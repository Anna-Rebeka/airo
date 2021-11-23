<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CityController extends Controller
{

    public function get($name)
    {
        return City::where('name','like', '%' + $name) -> get();
    }
}
