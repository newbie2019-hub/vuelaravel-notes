<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\NotesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::group(['prefix' => 'auth', 'middleware'=>'api'], function () {
    Route::post('store', [AuthController::class, 'store']);
    Route::post('me', [AuthController::class, 'me']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('payload', [AuthController::class, 'payload']);
    Route::post('refresh', [AuthController::class, 'refresh']);
});



Route::middleware(['middleware'=>'api'])->group(function () 
{
    Route::group(['prefix' => 'note'], function () {

        Route::post('store', [NotesController::class, 'store']);
        Route::get('get', [NotesController::class, 'get']);
        Route::delete('delete', [NotesController::class, 'delete']);
        Route::put('put', [NotesController::class, 'put']);
        Route::get('getArchived', [NotesController::class, 'getArchived']);
        Route::put('addArchived', [NotesController::class, 'addArchived']);
        Route::put('unarchive', [NotesController::class, 'unarchive']);

    });
});