@component('mail::message')
# Your ticket rezervation is confirmed!

You can see your ticket details in the link below.

@component('mail::button', ['url' => $url])
Ticket details
@endcomponent
 
Thank you for choosing our website for planning your trip.

Best regards,<br>
{{ config('app.name') }}
@endcomponent
