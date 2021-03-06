<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Etudiant;
use App\Groupe;
class EtudiantsController extends Controller
{
    //
	public function index()
	{
		return Etudiant::all();
	}

	public function show($etu)
	{
		return Etudiant::where('matricule', $etu)->get();
	}


	public function store(Request $request)
	{
		$etudiant= new Etudiant;
		//if($request->matricule->isEmpty()) return false;
		$etudiant->niveau=1;
		$etudiant->matricule=Etudiant::latest()->first()->matricule + 1;
		$etudiant->nom=$request->input('nom');
		$etudiant->prenom=$request->input('prenom');
		$etudiant->dateNaissance=$request->input('dateNaissance');
		$etudiant->lieuNaissance=$request->input('lieuNaissance');
		$etudiant->email=$request->input('email');
		$etudiant->moyenneBac=$request->input('moyenneBac');
		$etudiant->gender=$request->input('gender');
		$etudiant->tel=$request->input('tel');
		$etudiant->save();
		return response()->json($etudiant, 201);	
	}

	private function affecterGroupe(Etudiant $et,$groupe){
		$et->groupe=$groupe;
		$et->save();
	}

	public function affect_total(Request $request)
	{
		//A ameliorer pour les niveau 
		$nbetudgr=$request->input('nbrMaxPGroupe');

	$etuds=Etudiant::all()->where('niveau',1/*$request->input('niveauEtude')*/);
		$nbetud=$etuds->Count();
		$i=$nbetud;//nombre des etudiants
		if($i>0)
		{

			if($nbetud%$nbetudgr==0){
				$nbgrp=$nbetud/$nbetudgr;//nombre de groupe
			}else $nbgrp=$nbetud/$nbetudgr+1;
			
			$tab=array();
			for($k=1;$k<=$nbgrp;$k++)
			{
				$tab[$k]=0;
			}

			foreach($etuds as $etud){
				$a=rand(1,$nbgrp);
				if($tab[$a]!=$nbetudgr)
				{
					$tab[$a]++;
					
					$this->affecterGroupe($etud,$a);
				}
			}
			
				//$etud=Etudiant::find($cpt);
				
			}
		
		return Etudiant::all()->where('niveau',1/*$request->input('niveauEtude')*/);
	}

 /*
    public function update(Request $request, Product $product)
    {
        $product->update($request->all());
 
        return response()->json($product, 200);
    }
 
    public function delete(Product $product)
    {
        $product->delete();
 
        return response()->json(null, 204);
    }*/
}
