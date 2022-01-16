<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomAuthController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['middleware' => ['auth']], function() {
    /**
    * Logout Route
    */
    Route::get('/logout', [App\Http\Controllers\LogoutController::class, 'perform'])->name('logout.perform');
 });


 Route::get('dashboard', [CustomAuthController::class, 'dashboard']); 
 Route::post('login', [CustomAuthController::class, 'customLogin']);
 Route::post('register', [CustomAuthController::class, 'customRegistration']);
 Route::get('signout', [CustomAuthController::class, 'signOut'])->name('signout');

Route::get('/contacts', [App\Http\Controllers\UserController::class, 'contacts']);
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/from/{letters}', [App\Http\Controllers\CityController::class, 'findByName']);
Route::get('/city-exists/{letters}', [App\Http\Controllers\CityController::class, 'checkName']);

Route::get('/gallery', [App\Http\Controllers\GalleryController::class, 'index']);

Route::get('/search', [App\Http\Controllers\FlightController::class, 'index']);
Route::get('/flights/{from}/{to}/{when}/{price}', [App\Http\Controllers\FlightController::class, 'getFlights']);
Route::get('/roundtrips/{from}/{dateFrom}/{dateTo}/{numberOfDestination}/{price}/{culture}/{relaxation}/{luxuryFlights}/{beachResort}/{history}/{social}/{adventure}/{premiumServices}', [App\Http\Controllers\FlightController::class, 'getRoundtrips']);
Route::get('/myflights', [App\Http\Controllers\TicketController::class, 'getTicketsRegistered']);

Route::get('/myroundtickets', [App\Http\Controllers\TicketController::class, 'getRoundtripsRegistered']);

Route::post('/ticket', [App\Http\Controllers\TicketController::class, 'store']);
Route::post('/roundticket', [App\Http\Controllers\TicketController::class, 'storeRoundtrip']);

Route::delete('/ticket/{id}', [App\Http\Controllers\TicketController::class, 'destroy']);
Route::delete('/roundtrip/{code}', [App\Http\Controllers\TicketController::class, 'destroyRoundtrip']);

Route::get('/mytickets/{id}', [App\Http\Controllers\TicketController::class, 'showTicketRegistered']);
Route::get('/tickets/{token}', [App\Http\Controllers\TicketController::class, 'showTicketsUnregistered']);

Route::fallback(function () {
    return view("404");
});