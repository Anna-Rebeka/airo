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
    public function store($city1, $city2, $leaves, $price)
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
        
        $flight->departure;
        $flight->arrival;

        return $flight;
    }


    public function getFlights($from, $to, $when, $price)
    {
        $city1 = City::where('name', $from)->get()->first();
        $city2 = City::where('name', $to)->get()->first();

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

    public function getFlight($from, $to, $fromDate, $price)
    {

        $flights = Flight::where('departure_id', $from->id)
            ->where('arrival_id', $to->id)
            ->where('leaves', '>=', $fromDate)
            ->where('price', '<=', $price)
            ->with('departure')
            ->with('arrival')
            ->with('company')
            ->inRandomOrder()
            ->get()->first();
        
         if ($flights) { 
            $flights->departure->preferences;
            $flights->arrival->preferences;
            return $flights;
            }
            return $this->store($from, $to, $fromDate, $price);
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
            ->orderBy('leaves', 'ASC')
            ->get()->first();
        
        if ($flights) { 
            $flights->departure->preferences;
            $flights->arrival->preferences;
            return $flights;
        }
        return $this->store($from, $to, $fromDate, $price);
    }


    public function decodePreferences($preferences){
        $prefs = [];

        if($preferences[0]){
            array_push($prefs, "Culture");
        }
        if($preferences[1]){
            array_push($prefs, "Relaxation");
        }
        if($preferences[2]){
            array_push($prefs, "Luxury flights");
        }
        if($preferences[3]){
            array_push($prefs, "Beach resort");
        }
        if($preferences[4]){
            array_push($prefs, "History");
        }

        if($preferences[5]){
            array_push($prefs, "Social");
        }

        if($preferences[6]){
            array_push($prefs, "Adventure");
        }

        if($preferences[7]){
            array_push($prefs, "Premium services");
        }

        return $prefs;
    }


    public function getRoundtrips($from, $fromDate, $toDate, $noDst, $price, $culture, $relaxation, $luxuryFlights, $beachResort, $history, $social, $adventure, $premiumServices){
        $result = [];

        $prefs = [$culture, $relaxation, $luxuryFlights, $beachResort, $history, $social, $adventure, $premiumServices];
        
        $preferences = $this->decodePreferences($prefs);

        $preferences_checked = 0;

        $from = City::where('name', $from)->first();

        for ($i = 0; $i <= rand(4, 6); $i++) {
            array_push($result, $this->getRoundtrip($from, $fromDate, $toDate, $noDst, $price, $preferences, $preferences_checked));
        }

        return json_encode($result);
    }

    public function getRoundtrip($from, $fromDate, $toDate, $noDst, $price, $preferences, $preferences_checked)
    {
        $home = $from;

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
        $maxPrice = $price / ($noDst + 1);
        $totalPrice = 0;
        $totalDistance = 0;
        $roundtrips = array();
 
        $cities = City::where('name', '!=', $from->name)->inRandomOrder()->get(); //vsetky mesta okrem odkial idem
        $cities_to_visit = [];
        $count = $noDst; //3 zastavky ->  BA-LO[0]-NY[1]-TO[2]->BA 

        foreach ($cities as $city) {
            if ($count == 0) {
                break;
            }
            $intersect = count(array_intersect($preferences, $city->preferences()->pluck('name')->toArray()));
            
            if ($intersect >= $preferences_checked){
                array_push($cities_to_visit, $city);
            }

            $count -= 1;
        }
        $preferences_checked -= 1;
        
        
        foreach ($cities_to_visit as $to) {
            $flight = $this->getFlight($from, $to, $midTime->format('Y-m-d H:i:s'), $maxPrice);
            $flight->arrival->preferences;
            $flight->departure->preferences;
            $flight->company;
            $roundtrips[] = $flight;
            $totalPrice += $flight->price;
            $totalDistance +=  $flight->distance;
            $midTime = $midTime->add(new DateInterval('PT' . $interval . 'M')); 
            $from = $to;
        }

            $flight = $this->getLastFlight($from, $home, $midTime->format('Y-m-d H:i:s'), $maxPrice);
            $flight->company;
            $totalPrice += $flight->price;
            $totalDistance +=  $flight->distance;
            $roundtrips[] = $flight;

            $result = array("flights"=>$roundtrips, "price"=>$totalPrice, "distance"=>$totalDistance);
            
            return $result;

        return $roundtrips;
    }
}
