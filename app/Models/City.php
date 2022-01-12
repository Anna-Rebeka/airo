<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;


       /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'lat',
        'lng',
        'country',
        'capital',
        'population',
        'info',
        'image'
    ];

    public function flight_departures(){
        return $this->hasMany(Flight::class);
    }

    public function flight_arrivals(){
        return $this->hasMany(Flight::class);
    }

    public function preferences(){
        return $this->hasMany(Preference::class);
    }


}
