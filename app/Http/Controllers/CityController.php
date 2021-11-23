<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\City;

class CityController extends Controller
{

    public function findByName($name)
    {
        return City::where('name','like', $name . '%') -> get();
    }
}
