<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;
use Tymon\JWTAuth\Validators\TokenValidator;

class CheckTokenValidity extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        

        try {

            $user = JWTAuth::parseToken()->authenticate();

        }catch(Exception $e) {
            
            if ($e instanceof TokenExpiredException) {
                $newToken = JWTAuth::refresh(JWTAuth::getToken());
                return response()->json(
                    [
                        'status' => 'expired',
                        'newToken' => $newToken
                    ],201
                );
            }
            else if($e instanceof TokenInvalidException){
                return response()->json(['msg'=>'Token Invalid'], 401);
            }
            else
            {
                return response()->json(['msg'=>'Token not found'], 500);
            }
        }

        return  $next($request);
    }
}
