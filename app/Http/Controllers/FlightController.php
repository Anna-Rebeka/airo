<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Flight;
use App\Models\City;

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
        $city1 = City::find($from);
        $city2 = City::find($to);

        //treba vyrobit
        $morning = $when;
        $evening = $when;

        $flights = Flight::where('departure_id', $city1->id)
            ->where('arrival_id', $city2->id)
            ->where('departure', '>=', $morning)
            ->where('arrival', '<=', $evening)
            ->where('price', '<=', $price)
            ->get();
        
        return $flights;
    }
}
