<?php

namespace App\Http\Controllers;
require "groupes.php";
use App\Administrateur;
use Illuminate\Http\Request;

class AdministrateurController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
     
       
    }

 
    public function show(Administrateur $administrateur)
    {
        //
    }
public function affect_total($nbetudgr)
{
    $etuds=\App\Etudiant::all();
    $nbetud=$etuds->Count();
    $i=$nbetud;
    if($i>0)
    {

     $nbgrp=$nbetud/$nbetudgr;
     $tab=array();
     for($k=1;$k<=$nbgrp;$k++)
     {
        $tab[$k]=new groupes(0,0);
     }
      
      $cpt=1;
      while($cpt<=$nbetud)
      {
        $etud=\App\Etudiant::find($cpt);
      $a=rand(1,$nbgrp);
      if($tab[$a]->max==0)
      {
        $tab[$a]->nbr++;
        $cpt++;
           if($tab[$a]->nbr==$nbetudgr)
           {
            $tab[$a]->max==1;
           }
       $etud->group=$a;
       $etud->save();
      }
      }
    }
}

}
