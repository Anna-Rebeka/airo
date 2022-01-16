<x-master>
    <div id="myflights" data-user="{{ json_encode(auth()->user()) }}" data-flights="{{ json_encode($tickets) }}" data-roundtrips="{{ json_encode($roundtrips) }}">
</x-master>