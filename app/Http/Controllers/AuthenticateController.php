<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\User;
use Response;

class AuthenticateController extends Controller
{


    public function authenticate(Request $request)
    {
    	$credentials = $request->only('email', 'password');

    	try {
    		if( ! $token = JWTAuth::attempt($credentials) ){
    			return response()->json(['error' => 'Invalid Email or Password'], 401);
    		}
    	} catch (JWTException $e) {
    		return response()->json(['error' => 'could_not_create_token'], 500);
    	}

    	return response()->json(compact('token'));
    }


    public function currentUser()
    {
        // try {
        //     if( ! $user = JWTAuth::parseTokent()->authenticate()) {
        //         return response()->json(['User Not Found'], 404);
        //     }
        // } catch ( Tymon\JWTAuth\Exceptions\TokenExpiredException $e)  {
        //     return response()->json(['Token Expired'], $e->getStatusCode());
        // } catch ( Tymon\JWTAuth\Exceptions\TokenInvalidException $e)  {
        //     return response()->json(['Token Invalid'], $e->getStatusCode());
        // } catch ( Tymon\JWTAuth\Exceptions\TokenInvalidException $e)  {
        //     return response()->json(['Token Missing'], $e->getStatusCode());
        // }
        $user = JWTAuth::toUser();
        $user->load('locations');
        return $user;
    }



}
