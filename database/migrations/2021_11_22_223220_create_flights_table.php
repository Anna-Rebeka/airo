<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFlightsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flights', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('departure_id');
            $table->unsignedBigInteger('arrival_id');
            $table->unsignedBigInteger('company_id');
            $table->decimal('price');
            $table->dateTime('departure');
            $table->dateTime('arrival');
            $table->timestamps();

        $table->foreign('departure_id')
            ->references('id')
            ->on('cities')
            ->onDelete('cascade');
            
        $table->foreign('arrival_id')
            ->references('id')
            ->on('cities')
            ->onDelete('cascade');

        $table->foreign('company_id')
            ->references('id')
            ->on('companies')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('flights');
    }
}
