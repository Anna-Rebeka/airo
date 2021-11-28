<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $path = 'database/capital_cities.sql';
        DB::unprepared(file_get_contents($path));
        
        $path2 = 'database/preferences.sql';
        DB::unprepared(file_get_contents($path2));

        $path3 = 'database/companies.sql';
        DB::unprepared(file_get_contents($path3));

        $this->call([
            FlightSeeder::class
        ]);

        $path4 = 'database/small_fixes.sql';
        DB::unprepared(file_get_contents($path4));
    }
}
