<?php

namespace Database\Factories;

use App\Models\Flight;
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
            'departure_id' => $this->faker->unique()->safeEmail(),
            'arrival_id' => City::all()->random()->id,
            'departure' => $faker->dateTimeBetween('+0 days', '+2 years'),
            'arrival' => Str::random(10),
        ];
    }
}
