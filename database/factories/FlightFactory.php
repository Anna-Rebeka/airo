<?php

namespace Database\Factories;

use App\Models\Flight;
use App\Models\Company;

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
        return [
            'name' => Str::random(10),
            'departure_id' => City::all()->random()->id,
            'arrival_id' => City::all()->random()->id,
            'company_id' => Company::all()->random()->id,
            $when = $faker->dateTimeBetween('+0 days', '+2 years'),
            'departure' => $when,
            'arrival' => $when ,
            'price' => 1000
        ];
    }
}
