<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

        /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [

        'user_id',
        'flight_id',
        'token'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function flight(){
        return $this->belongsTo(Flight::class);
    }
}
