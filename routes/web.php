<?php

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

Route::get('etudiants', 'EtudiantsController@index');
Route::get('etudiants/{etu}', 'EtudiantsController@show');

Route::post('ajoutEtudiant', 'EtudiantsController@store');
/*Route::post('etudiants', function() {
    return  response()->json([
            'message' => 'Create success'
        ], 201);
});*/