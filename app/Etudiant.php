<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Etudiant extends Model
{
    //
	protected $fillable = ['matricule', 'nom', 'prenom', 'dateNaissance', 'lieuNaissance','gender','moyenneBac', 'email', 'tel','groupe','niveau'];
}
