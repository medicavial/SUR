<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::group(['middleware'=>'cors'], function ()
{
  Route::get('prueba', function () {
      return 'Hello World';
  });
});

Route::get('breweries', ['middleware' => 'cors', function()
{
    return \Response::json(\App\Brewery::with('beers', 'geocode')->paginate(10), 200);
}]);

Route::post('login', array('uses' => 'LoginController@getUsuarios'));

Route::group(array('prefix' => 'api', 'middleware' => 'cors'), function()
{
  Route::post('login', array('uses' => 'LoginController@getUsuarios'));
});
