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
 Route::get('login', [CustomAuthController::class, 'index'])->name('login');
 //Route::post('custom-login', [CustomAuthController::class, 'customLogin'])->name('login.custom'); 
 Route::get('registration', [CustomAuthController::class, 'registration'])->name('register-user');
 //Route::post('custom-registration', [CustomAuthController::class, 'customRegistration'])->name('register.custom'); 
 Route::get('signout', [CustomAuthController::class, 'signOut'])->name('signout');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/from/{letters}', [App\Http\Controllers\CityController::class, 'findByName']);
Route::get('/city-exists/{letters}', [App\Http\Controllers\CityController::class, 'checkName']);

Route::get('/gallery', [App\Http\Controllers\GalleryController::class, 'index']);

Route::get('/search', [App\Http\Controllers\FlightController::class, 'index']);
Route::get('/flights/{from}/{to}/{when}/{price}', [App\Http\Controllers\FlightController::class, 'getFlights']);
Route::get('/user/myflights', [App\Http\Controllers\TicketController::class, 'getTicketsRegistered']);
Route::post('/ticket', [App\Http\Controllers\TicketController::class, 'store']);

Route::get('/{token}/tickets', [App\Http\Controllers\TicketController::class, 'getTicketsUnregistered']);
