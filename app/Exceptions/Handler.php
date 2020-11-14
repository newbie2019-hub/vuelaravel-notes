<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {

        // $this->renderable(function (Exception $e, $request) {

        //     if($e instanceOf JWTException){
        //         return response()->json(['msg'=>'Token is Invalid'], 400);
        //     }
        //     else if ($e instanceof TokenExpiredException) {
        //         $newToken = JWTAuth::refresh(JWTAuth::getToken());
        //         return response()->json(
        //             [
        //                 'status' => 'expired',
        //                 'newToken' => $newToken
        //             ],200
        //         );
        //     }
        //     else if($e instanceof TokenInvalidException){
        //         return response()->json(['msg'=>'Token Invalid'], 401);
        //     }
        //     else
        //     {
        //         return response()->json(['msg'=>'Token not found'], 500);
        //     }
        // });
    }

}
