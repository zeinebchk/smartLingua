<?php

use App\Models\Entrepreneur;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('entrepreneurs', function (Blueprint $table) {
            $table->id();
            $table->string('nomProjet');
            $table->string('categorie');
            $table->string('gouvernerat');
            $table->string('ville');
            $table->string('adresseExacte');
            $table->integer('numTelPro');
            $table->point('emplacement');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('entrepreneurs');
       
    }
};
