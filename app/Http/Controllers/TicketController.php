<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Ticket;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\ReservationMade;

class TicketController extends Controller
{

    public function getTicketsRegistered()
    {   
        if(!auth()->user()){
            return redirect('/');
        }
        $tickets = auth()->user()->tickets()->where('roundtrip_code', NULL)->get();

        foreach ($tickets as $ticket){
            $flight = $ticket->flight;
            $flight->arrival;
            $flight->departure;
            $flight->ticket_id = $ticket->id;
        }

        $roundtrips = $this->getRoundtripsRegistered();

        return view('flights.index', [
            'user' => auth()->user(),
            'tickets' => $tickets,
            'roundtrips' => $roundtrips
        ]);
    }


    public function showTicketRegistered($id)
    {   
        $ticket = Ticket::find($id);
        
        if(!$ticket){
            return redirect('/404');
        }

        if(!auth()->user() || !$ticket || $ticket->user != auth()->user()){
            return redirect('/');
        }
        $ticket->flight;
        $ticket->flight->company;
        $ticket->flight->arrival;
        $ticket->flight->departure;

        return view('tickets.show', [
            'user' => auth()->user(),
            'ticket' => $ticket
        ]);
    }

    public function showTicketsUnregistered($token)
    {   
        $ticket = Ticket::where('token', $token)->get()->first();

        if(!$ticket){
            return redirect('/404');
        }

        $ticket->flight;
        $ticket->flight->company;
        $ticket->flight->arrival;
        $ticket->flight->departure;   
        
        return view('tickets.show', [
            'user' => auth()->user(),
            'ticket' => $ticket
        ]);
    }



    public function getRoundtripsRegistered(){
        $tickets = auth()->user()->tickets()->where('roundtrip_code', '!=' , NULL)->orderBy('roundtrip_code')->get();

        $code = NULL;
        $result = [];
        $tmp = [];

        foreach ($tickets as $ticket){
            if ($code != null && $code != $ticket->roundtrip_code){
                $result[$code] = $tmp;
                $tmp = [];
            }
            $flight = $ticket->flight;
            $flight->arrival;
            $flight->departure;
            $flight->ticket_id = $ticket->id;

            $code = $ticket->roundtrip_code;
            array_push($tmp, $ticket);
        }

        return $result;
    }


    public function storeRoundtrip(Request $fields)
    {

        $ids = $fields['id'];
        $nos = $fields['no'];

        $result = [];
        $roundtrip_code = null;
            do{
                $roundtrip_code = Str::random(16);
            } while (Ticket::where('roundtrip_code', $roundtrip_code)->first());

        $user = auth()->user();
        $user_id = null;
        $token = null;    

        if($user){
            $user_id = $user->id;
        }
        else{
            do{
                $token = Str::random(16);
            } while (Ticket::where('token', $token)->first());
        }
        
        for($i = 0; $i < count($ids); $i++) {
            $ticket = Ticket::create([
                'user_id' => $user_id,
                'flight_id' => $flight_id,
                'roundtrip_code' => $roundtrip_code,
                'no' => $nos[$i],
                'token' => $token,
            ]);

            array_push($result, $ticket);
        }

        return json_encode($result);
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
            'flight_id' => ['required'],
            'no' => ['integer'],
        ]);
        
        $attributes['no'] = 1;
        
        if($fields['no']){
            $attributes['no'] = $fields['no'];
        }

        $user = auth()->user();
        $user_id = null;
        $attributes['token'] = null;

        if($user){
            $user_id = $user->id;
        }
        else{
            do{
                $token = Str::random(16);
            } while (Ticket::where('token', $token)->first());
            $attributes['token'] = $token;
        }

        $ticket = DB::transaction(function () use(&$user_id, $attributes, &$fields){
            $ticket = Ticket::create([
                'user_id' => $user_id,
                'flight_id' => $attributes['flight_id'],
                'no' => $attributes['no'],
                'token' => $attributes['token'],
            ]);
            return $ticket;        
        });

        if(!$user && $fields['email']){
            Mail::to($fields['email'])
                ->send(new ReservationMade($attributes['token']))
            ;
        }
        return $ticket;
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ticket = Ticket::find($id);
        if(!$ticket){
            return null;
        }
        DB::transaction(function () use(&$ticket) {
            $ticket->delete();
        });
    }

    public function getTicketsByUserId($id){
        return Ticket::where('user_id','like', $id . '%')->get();
    }
}
