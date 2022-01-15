<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'leaves',
        'arrives',
        'departure_id',
        'arrival_id',
        'company_id',
        'price',
        'distance',
        'duration'
    ];

    public function tickets(){
        return $this->hasMany(Ticket::class);
    }

    public function departure(){
        return $this->belongsTo(City::class);
    }

    public function company(){
        return $this->belongsTo(Company::class);
    }

    public function arrival(){
        return $this->belongsTo(City::class);
    }

}
