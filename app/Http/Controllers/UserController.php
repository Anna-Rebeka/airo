<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function contacts()
    {   
        return view('contacts', [
            'user' => auth()->user(),
        ]);
    }
}
