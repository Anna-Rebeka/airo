<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\City;

class CityController extends Controller
{

    public function findByName($name)
    {
        return City::where('name','like', $name . '%')->limit(20)->get();
    }

    public function chceckName($name){

        $result = City::where('lower(name)','like', '%'.strtolower($name).'%')->get();

        if ($result->first()) {
            return TRUE;
         } 
        return FALSE;
    }
}
