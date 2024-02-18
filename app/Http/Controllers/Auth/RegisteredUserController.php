<?php

namespace App\Http\Controllers\Auth;

use Rules\Password;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Entrepreneur;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;
use Illuminate\Database\QueryException;

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
    {     
        try {
        $request->validate([
        'nom' => 'required|string|max:255',
        'prenom' => 'required|string|max:255',
         'email' => 'required|string|email|max:255|unique:'.User::class,
        'numTel' => 'required|integer|max:99999999',
        'genre' => 'required|string|max:255',
        'password' => 'required'
         ]);
        $user = User::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'email' => $request->email,
            'numTel' => $request->numTel,
            'genre'=>$request->genre,
            'image'=>$request->image,
            'password' => Hash::make($request->password),
        ]);
       
          
          
        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    } catch (QueryException $e) {
        Log::error($e->getMessage());
        return back()->withErrors(['message' => 'Une erreur s\'est produite lors de l\'enregistrement.']);
    }
    }
    public function storeE(Request $request): RedirectResponse
    {     
        try {
        $request->validate([
        'nom' => 'required|string|max:255',
        'prenom' => 'required|string|max:255',
         'email' => 'required|string|email|max:255|unique:'.User::class,
        'numTel' => 'required|integer|max:99999999',
        'genre' => 'required|string|max:255',
        'password' => 'required',
        'nomProjet' => 'required|string|max:255',
        'categorie'=>'required',
            'gouvernerat' => 'required|string|max:255',
            'ville' => 'required|string|max:255',
            'adresseExacte' => 'nullable|string|max:255',
            'numTelPro' => 'required',
            'latitude'=>'nullable',
            'longitude'=>'nullable'
         ]);
        $user = User::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'email' => $request->email,
            'numTel' => $request->numTel,
            'genre'=>$request->genre,
            'image'=>$request->image,
            'password' => Hash::make($request->password),
        ]);
            $entrepreneur = Entrepreneur::create([
                'nomProjet' => $request->nomProjet,
                'categorie'=>$request->categorie,
                'gouvernerat' => $request->gouvernerat,
                'ville' => $request->ville,
                'adresseExacte' => $request->adresseExacte,
                'numTelPro' => $request->numTelPro,
                'latitude'=>$request->latitude,
                'longitude'=>$request->longitude,
                'userId'=>$user->id
            ]); 
          
        event(new Registered($entrepreneur));

        Auth::login($entrepreneur);

        return redirect(RouteServiceProvider::HOME);
    } catch (QueryException $e) {
        return back()->withErrors(['message' => 'Une erreur s\'est produite lors de l\'enregistrement.']);
    }
    }
    
}
