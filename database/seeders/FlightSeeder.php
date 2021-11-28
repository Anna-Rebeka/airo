<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Flight;


class FlightSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Flight::factory()
            ->count(1000)
            ->create();   
    }
}
