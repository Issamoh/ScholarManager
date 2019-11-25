@extends('layout')

@section('content')

<h1>List of Students</h1> 
<ul>

	@foreach($children as $riad)
   <li>
   <h2>{{$riad->Nom}}</h2>
   <h3>{{$riad->Email}}</h3>
   <em>{{$riad->created_at->diffForHumans()}}</em>
   </li>
    @endforeach
</ul>

@endsection