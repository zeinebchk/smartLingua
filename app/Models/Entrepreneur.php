<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Entrepreneur extends User
{
    use HasFactory;
    protected $fillable=[
       'nomProjet',
       'categorie',
       'gouvernerat',
       'ville',
       'adresseExacte',
       'numTelPro',
       'latitude',
       'longitude',
    ];
}
