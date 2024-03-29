<?php

use Illuminate\Support\Facades\Route;

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


Route::resources([
    'encuesta' => 'App\Http\Controllers\EncuestaController',
]);

Route::get('/prueba/{id}','App\Http\Controllers\EncuestaController@prueba')->name('prueba');
Route::get('/','App\Http\Controllers\EncuestaController@index');