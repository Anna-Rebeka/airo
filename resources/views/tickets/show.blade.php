<x-master>
    <div id="show-ticket" data-user="{{ json_encode(auth()->user()) }}" data-ticket="{{ json_encode($ticket) }}"></div>
</x-master>