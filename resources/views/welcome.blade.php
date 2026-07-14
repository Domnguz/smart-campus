@extends('layouts.app')

@section('title', 'Inicio - Recorrido Virtual 360°')

@section('content')


@include('sections.hero')


@include('sections.features')



<section id="experiencia360" class="py-24 bg-gradient-to-b from-slate-50 to-white">


    <div class="max-w-7xl mx-auto px-6">



        <div class="bg-white rounded-[2.5rem] shadow-2xl border border-blue-100 p-6 md:p-12 overflow-hidden">


            <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                {{-- IMAGEN --}}
                <div class="relative group">


                    <div class="absolute -inset-4 bg-gradient-to-r from-blue-200/40 to-cyan-200/40 rounded-[2.5rem] blur-2xl group-hover:opacity-80 transition">
                    </div>



                    <img
                        src="{{ asset('images/fototecno.png') }}"
                        alt="Vista 360 del Instituto"
                        class="relative w-full h-72 md:h-96 lg:h-[500px] object-cover rounded-[2rem] shadow-xl transition duration-500 group-hover:scale-[1.02]">

                </div>
                {{-- TEXTO --}}
                <div class="text-center lg:text-left">



                    <span class="inline-flex items-center gap-3 text-blue-600 font-semibold uppercase tracking-[0.25em] text-sm">


                        <span class="w-10 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-400"></span>
                        Experiencia 360°

                    </span>


                    <h2 class="mt-6 text-4xl md:text-6xl font-black text-slate-800 leading-tight">


                        Descubre el instituto


                        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">

                            en una nueva dimensión

                        </span>


                    </h2>

                    <p class="mt-7 text-lg text-slate-600 leading-8 max-w-xl mx-auto lg:mx-0">


                        Explora una vista panorámica del Instituto CAP. FAP.
                        José Abelardo Quiñones y recorre sus instalaciones
                        mediante una experiencia inmersiva e interactiva antes
                        de visitar cada ambiente.


                    </p>

                    <div class="mt-8 flex justify-center lg:justify-start">


                        <a href="{{ url('/recorrido/1') }}"
                            class="group inline-flex items-center justify-center gap-4
                            bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500
                            hover:from-blue-700 hover:to-cyan-600
                            text-white px-10 py-5
                            rounded-2xl
                            font-bold text-lg
                            shadow-xl shadow-blue-200
                            transition-all duration-300
                            hover:-translate-y-1 hover:scale-105">

                            <span class="text-3xl group-hover:rotate-12 transition duration-300">
                                🌍
                            </span>

                            <span>
                                Iniciar recorrido 360°
                            </span>

                            <span class="text-2xl group-hover:translate-x-2 transition duration-300">
                                →
                            </span>

                        </a>
                        </a>
                    </div>

                </div>


            </div>

        </div>

    </div>

</section>





{{-- Mapa futuro --}}
{{-- @include('sections.mapa') --}}



@endsection