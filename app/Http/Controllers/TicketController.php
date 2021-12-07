<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;
use Illuminate\Support\Facades\DB;

class TicketController extends Controller
{

    public function getTicketsRegistered()
    {   
        $tickets = auth()->user()->tickets()->with('flights')->with('arrival')->with('departure')->get();

        return view('flights.index', [
            'user' => auth()->user(),
            'tickets' => $tickets
        ]);
    }

    public function getTicketsUnregistered($token)
    {   
        return Ticket::where('token', $token)->get();   
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $fields)
    {
        $attributes = $fields->validate([
            'token' => ['string', 'max:255'],
            'flight_id' => ['required']
        ]);
                
        $user = auth()->user();
        $user_id = null;
        
        if($user){
            $user_id = $user->id;
        }

        if ($fields['token'] == ''){
            $attributes['token'] = null;
        } 

        $ticket = DB::transaction(function () use(&$user, $attributes, &$fields){
            $ticket = Ticket::create([
                'user_id' => $user_id,
                'flight_id' => $attributes['flight_id'],
                'token' => $attributes['token'],
            ]);
            return $ticket;
        });
        return $ticket;
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ticket $ticket)
    {
        DB::transaction(function () use(&$ticket) {
            $ticket->delete();
        });
    }

    public function getTicketsByUserId($id){
        return Ticket::where('user_id','like', $id . '%')->get();
    }
}
