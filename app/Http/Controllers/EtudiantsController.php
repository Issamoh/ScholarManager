<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Etudiant;
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
    
       $etudiant = Etudiant::create($request->all());
       return response()->json($etudiant, 201);	
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
