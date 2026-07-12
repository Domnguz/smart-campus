@extends('layouts.app')

@section('title', 'Inicio')

@section('content')

@include('sections.hero')

@include('sections.features')

{{-- @include('sections.mapa') aqui saca las llaves para activar el mapa idiota de mrd--}}

@endsection

