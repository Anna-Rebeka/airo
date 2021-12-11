<x-master>
    <div id="myflights" data-user="{{ json_encode(auth()->user()) }}" data-flights="{{ json_encode($tickets) }}">
</x-master>