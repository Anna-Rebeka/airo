<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Flight;
use App\Models\City;
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
            ->orderBy('distance', 'ASC')
            ->orderBy('leaves', 'ASC')
            ->get()->first();
        
        return $flights;
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
            ->orderBy('distance', 'ASC')
            ->orderBy('leaves', 'ASC')
            ->get()->first();
        
        return $flights;
    }

    public function getRoundtrips($from, $fromDate, $toDate, $noDst, $price, $prefferences)
    {
        $city = City::where('name', $from)->get()->first();

        $theDate = new DateTime($fromDate);
        
        $start = new DateTime($fromDate);

        $end = new DateTime($toDate);
        $end->add(new DateInterval('PT' . 1439 . 'M'));
    
        $diff = $end->diff($start);
        $hours = $diff->h;
        $hours = $hours + ($diff->days*24);
        $interval =  floor($hours / $noDst);

        $midTime = new DateTime($fromDate);
        //$midTime->add(new DateInterval('PT' . $interval . 'H'));
        //$midTime->format('Y-m-d H:i:s');
        $midPrice = $price / $noDst;
        $totalPrice = 0;
        $roundtrips = array();
        $midCity = City::where('name', $from)->get()->first();
        for ($i = 1; $i <= $noDst; $i++) {
                $flight = $this->getFlight($midCity, $midTime, $midPrice);
                $roundtrips[] = $flight;
                $midCity = City::where('id', $flight->id)->get()->first();    
                $midTime->add(new DateInterval('PT' . $interval . 'H')); 
            }

            $flight = getLastFlight($midCity, $city, $midTime, $midPrice);
            $roundtrips[] = $flight;

        return $roundtrips;
    }
}
