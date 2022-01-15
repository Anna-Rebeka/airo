<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Flight;
use App\Models\City;
use App\Models\Company;
use DateTime;
use DateInterval;

class FlightController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('flights.index', [
            'user' => auth()->user()
        ]);
    }
    function faker() {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $randomString = '';
      
        for ($i = 0; $i < 8; $i++) {
            $index = rand(0, strlen($characters) - 1);
            $randomString .= $characters[$index];
        }
      
        return $randomString;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store($city1, $city2, $leaves)
    {   
        $long1 = deg2rad($city1->lng);
        $long2 = deg2rad($city2->lng);
        $lat1 = deg2rad($city1->lat);
        $lat2 = deg2rad($city2->lat);

        $dlong = $long2 - $long1;
        $dlati = $lat2 - $lat1;

        $val = pow(sin($dlati/2),2)+cos($lat1)*cos($lat2)*pow(sin($dlong/2),2);

        $res = 2 * asin(sqrt($val));
        $radius = 3958.756;

        $distance = $res * $radius;
        $company = Company::all()->random(1)->first();
        $price =  $distance * (0.05 + 0.001 * $company->class +  0.001 * rand(1,10));
        
        $time = new DateTime($leaves);
        $minutes = round(($distance / 830) * 60);
        $arrives = $time->add(new DateInterval('PT' . $minutes . 'M'));
        $arrives = $arrives->format('Y-m-d H:i');
        $flight = Flight::create([
            'name' => $this->faker(),
            'departure_id' => $city1->id,
            'arrival_id' => $city2->id,
            'company_id' => $company->id,
            'leaves' => $leaves,
            'arrives' => $arrives,
            'duration' => $minutes,
            'price' => $price,
            'distance' => $distance
        ]);
        
        //$flight->departure;
        //$flight->arrival;

        return $flight;
    }


    public function getFlights($from, $to, $when, $price)
    {
        $city1 = City::where('name', $from)->get()->first();
        $city2 = City::where('name', $to)->get()->first();

        //treba vyrobit
        $theDate = new DateTime($when);
        $morning = $theDate->format('Y-m-d H:i:s');

        $theDate->add(new DateInterval('PT' . 1439 . 'M'));
        $evening = $theDate->format('Y-m-d H:i:s');

        $flights = Flight::where('departure_id', $city1->id)
            ->where('arrival_id', $city2->id)
            ->where('leaves', '>=', $morning)
            ->where('arrives', '<=', $evening)
            ->where('price', '<=', $price)
            ->with('departure')
            ->with('arrival')
            ->with('company')
            ->get();
        
        return $flights;
    }

    public function getFlight($from, $fromDate, $price)
    {

        $flights = Flight::where('departure_id', $from->id)
            ->where('leaves', '>=', $fromDate)
            ->where('price', '<=', $price)
            ->with('departure')
            ->with('arrival')
            ->with('company')
            //->orderBy('distance', 'ASC')
            ->orderBy('leaves', 'ASC')
            ->limit(5)
            ->random(1)
            ->get()->first();
        
         if ($flights) { 
            $flights->departure->preferences;
            $flights->arrival->preferences;
            return $flights;
            }
            $to = City::where('name', '!=', $from)->get()->first();
            return $this->store($from, $to, $fromDate);
    }

    public function getLastFlight($from, $to, $fromDate, $price)
    {
        $flights = Flight::where('departure_id', $from->id)
            ->where('arrival_id', $to->id)
            ->where('leaves', '>=', $fromDate)
            ->where('price', '<=', $price)
            ->with('departure')
            ->with('arrival')
            ->with('company')
            //->orderBy('distance', 'ASC')
            ->orderBy('leaves', 'ASC')
            ->get()->first();
        
        if ($flights) { 
            $flights->departure->preferences;
            $flights->arrival->preferences;
            return $flights;
        }
        return $this->store($from, $to, $fromDate);
    }

    public function getRoundtrips($from, $fromDate, $toDate, $noDst, $price, $prefferences)
    {
        $city = City::where('name', $from)->with('preferences')->get()->first();

        $theDate = new DateTime($fromDate);
        
        $start = new DateTime($fromDate);

        $end = new DateTime($toDate);
        $end->add(new DateInterval('PT' . 1439 . 'M'));
    
        $diff = $end->diff($start);
        $hours = $diff->h;
        $hours = $hours + ($diff->days*24);
        $interval =  floor($hours / $noDst);
        $interval = $interval*60;

        $midTime = new DateTime($fromDate);
        //$midTime->add(new DateInterval('PT' . $interval . 'M'));
        //$midTime->format('Y-m-d H:i:s');
        $midPrice = $price / $noDst;
        $totalPrice = 0;
        $totalDistance = 0;
        $roundtrips = array();
        $midCity = City::where('name', $from)->with('preferences')->get()->first();
        for ($i = 1; $i <= $noDst; $i++) {
            $flight = $this->getFlight($midCity, $midTime->format('Y-m-d H:i:s'), $midPrice);
            $flight->arrival->preferences;
            $flight->departure->preferences;
            $roundtrips[] = $flight;
            $totalPrice += $flight->price;
            $totalDistance +=  $flight->distance;
            $midCity = City::where('id', $flight->arrival_id)->with('preferences')->get()->first();    
            $midTime = $midTime->add(new DateInterval('PT' . $interval . 'M')); 
            //$roundtrips[] = $midTime->format('Y-m-d H:i:s');
        }

            $flight = $this->getLastFlight($midCity, $city, $midTime->format('Y-m-d H:i:s'), $midPrice);
            $totalPrice += $flight->price;
            $totalDistance +=  $flight->distance;
            $roundtrips[] = $flight;
        
            //$roundtrips[] = $midCity->name;
            //$roundtrips[] = $city->name;
            //$roundtrips[] = $midTime;

            $result = array("flights"=>$roundtrips, "price"=>$totalPrice, "distance"=>$totalDistance);
            
            return json_encode($result);

        return $roundtrips;
    }
}
