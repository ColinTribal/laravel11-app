<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/example',function() {
 //get the example controllers index function 
    return app('App\Http\Controllers\ExampleController')->index();
});
