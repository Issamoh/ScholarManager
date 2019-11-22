<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Etudiant;
class Administrateur extends Model
{
    //
    protected $fillable = ['nom', 'prenom', 'dateNaissance', 'lieuNaissance', 'email', 'tel','poste'];
    
    public function addStudent(Etudiant $etu){
    	if(!is_null($etu) ){
    		Etudiant::create(['matricule' => $etu->matricule, 'nom' => $etu->nom,'prenom' => $etu->prenom,'dateNaissance' => $etu->dateNaissance,'lieuNaissance' => $etu->lieuNaissance,'email' => $etu->email, 'tel' => $etu->tel]);
    	}
    }
}
