<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class groupes extends Controller
{
    public $nbr;
    public $max;


    function __construct( $nbr, $max ) {
		$this->nbr = $nbr;
		$this->max = $max;
	}
}
