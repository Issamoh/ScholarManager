<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEtudiantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
            Schema::create('etudiants', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('matricule')->unique();
            $table->string('nom');
            $table->string('prenom');
            $table->date('dateNaissance');
            $table->string('lieuNaissance');
            $table->string('gender');
            $table->float('moyenneBac');
            $table->string('email')->unique();
            $table->string('tel');
            $table->integer('groupe');
            $table->integer('niveau');
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('etudiants');
    }
}
