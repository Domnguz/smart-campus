@extends('layouts.app')

@section('title', 'Inicio')

@section('content')

@include('sections.hero')

@include('sections.features')

<section id="experiencia360" class="py-20 bg-white">
    
    <div class="max-w-7xl mx-auto px-6">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <!-- Imagen -->
            <div>

                <img
                    src="{{ asset('images/fototecno.png') }}"
                    alt="Vista 360 del Instituto"
                    class="w-full h-72 md:h-96 lg:h-[450px] object-cover rounded-3xl shadow-xl">

            </div>

            <!-- Texto -->
            <div class="text-center lg:text-left">

                <span class="text-blue-600 font-semibold uppercase tracking-widest">
                    Experiencia 360°
                </span>

                <h2 class="mt-4 text-3xl md:text-5xl font-bold text-slate-800">

                    ¿Quieres conocer el instituto en 360°?

                </h2>

                <p class="mt-6 text-lg text-slate-600 leading-8">

                    Antes de visitar cada ambiente, explora una vista panorámica del Instituto CAP. FAP. José Abelardo Quiñones y familiarízate con sus instalaciones mediante una experiencia inmersiva.

                </p>

                <a href="/recorrido"
                   class="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg">

                    🌍 Iniciar recorrido 360°

                </a>

            </div>

        </div>

    </div>

</section>



{{-- @include('sections.mapa') aqui saca las llaves para activar el mapa idiota de mrd--}}

@endsection

