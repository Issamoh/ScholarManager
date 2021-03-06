<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('etudiants', 'EtudiantsController@index');
Route::get('etudiants/{etu}', 'EtudiantsController@show');
Route::post('ajoutEtudiant', 'EtudiantsController@store');
Route::post('affect', 'EtudiantsController@affect_total');