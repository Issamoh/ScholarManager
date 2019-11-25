@extends('layout')

@section('content')


   <h2>{{$childr->Nom}}</h2>
   <h3>{{$childr->Email}}</h3>
   <P>status :
   	{{$childr->created_at->diffForHumans()}} 
   </P>
@endsection