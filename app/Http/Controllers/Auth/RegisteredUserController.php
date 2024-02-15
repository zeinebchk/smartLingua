<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Entrepreneur;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {    $request->validate([
        'nom' => 'required|string|max:255',
        'prenom' => 'required|string|max:255',
        'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
        'numTel' => 'required|numeric|max:99999999',
        'genre' => 'required|string|max:255',
        'password' => ['required', Rules\Password::defaults()],
         ]);
        $user = User::create([
            'nom' => $request->nom,
            'prenom' => $request->numTel,
            'email' => $request->email,
            'numTel' => $request->nom,
            'password' => Hash::make($request->password),
        ]);
        if($request->genre==="pro"){
            $request->validate([
                'nomProjet' => 'required|string|max:255',
                'numTelPro' => 'required|numeric|max:99999999',
                'gouvernerat' => 'required|string|max:255',
                'ville' => 'required|string|max:255',
                'adresseExacte' => 'nullable|string|max:255',
                'emplacement'=>'nullable|point'
                 ]);
            $entrepreneur = Entrepreneur::create([
                'nomProjet' => $request->nomProjet,
                'numTelPro' => $request->numTelPro,
                'gouvernerat' => $request->gouvernerat,
                'ville' => $request->ville,
                'adresseExacte' => $request->adresseExacte,
                'emplacement'=>$request->emplacement,
                'userId'=>$user->id
            ]); 
            Auth::login($entrepreneur);
         } 
        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
