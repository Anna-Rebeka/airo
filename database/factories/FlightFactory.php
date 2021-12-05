<?php

namespace Database\Factories;

use App\Models\City;
use App\Models\Flight;
use App\Models\Company;

use DateTime;
use DatePeriod;
use DateInterval;

use Illuminate\Database\Eloquent\Factories\Factory;

class FlightFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Flight::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    { 
        $city1 = City::all()->random(1)->first();
        $city2 = City::all()->random(1)->first();

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
        //$price =  $distance;
        $leaves = $this->faker->dateTimeBetween('+0 days', '+30 days');
        
        $minutes = round(($distance / 830) * 60);

        $time = new DateTime($leaves->format('Y-m-d H:i'));

        $arrives = $time->add(new DateInterval('PT' . $minutes . 'M'));

        return [
            'name' => $this->faker->bothify('?###??##'),
            'departure_id' => $city1->id,
            'arrival_id' => $city2->id,
            'company_id' => $company->id,
            'departure' => $leaves,
            'arrival' => $arrives ,
            'duration' => $minutes,
            'distance' => $distance,
            'price' => $price
        ];
    }
}
