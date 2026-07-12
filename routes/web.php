<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


/*
|--------------------------------------------------------------------------
| PANORAMAS
|--------------------------------------------------------------------------
*/


Route::get('/recorrido/{panorama}', function ($panorama) {
    return view('viewer', compact('panorama'));
});



/*
|--------------------------------------------------------------------------
| AMBIENTES
|--------------------------------------------------------------------------
*/

Route::get('/ambientes/auditorio', function () {
    return view('ambientes.auditorio');
});

Route::get('/ambientes/lab1', function () {
    return view('ambientes.lab1');
});

Route::get('/ambientes/lab2', function () {
    return view('ambientes.lab2');
});

Route::get('/ambientes/enfermeria', function () {
    return view('ambientes.enfermeria');
});

Route::get('/ambientes/biblioteca', function () {
    return view('ambientes.biblioteca');
});

Route::get('/ambientes/fablab', function () {
    return view('ambientes.fablab');
});