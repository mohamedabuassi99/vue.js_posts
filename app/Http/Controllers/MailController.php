<?php

namespace App\Http\Controllers;

use App\Mail\PrettyMail;
use App\Mail\verificationMail;
use App\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    //
    public function send()
    {
        $user = User::find(1);

        try {
            Mail::to($user)->send(new PrettyMail($user));

        } catch (ModelNotFoundException $modelNotFoundException) {
            return 'error' ;
        }
    }
}
