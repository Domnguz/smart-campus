@extends('layouts.app')

@section('title', 'Enfermería')

@section('content')

<section class="bg-slate-100 min-h-screen pt-28 pb-16">

    <div class="w-full max-w-screen-2xl mx-auto px-4 md:px-8">

        <div class="text-center mb-10">

            <span class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                ENF01
            </span>

            <h1 class="text-4xl md:text-5xl font-bold text-slate-800 mt-5">
                Enfermería
            </h1>

            <p class="text-slate-500 mt-3 text-lg">
                Instituto CAP. FAP. José Abelardo Quiñones
            </p>

        </div>

        <div class="bg-white rounded-3xl shadow-xl overflow-hidden w-full">

            <img
                src="{{ asset('images/aulas/enfermeriatecnica.png') }}"
                class="w-full h-[400px] md:h-[650px] object-cover"
                alt="Enfermería">

            <div class="p-8 md:p-12">

                <div class="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">

                    <div class="bg-blue-50 rounded-2xl p-5">
                        <h3 class="font-bold text-blue-700">Código</h3>
                        <p class="mt-2">ENF01</p>
                    </div>

                    <div class="bg-green-50 rounded-2xl p-5">
                        <h3 class="font-bold text-green-700">Ubicación</h3>
                        <p class="mt-2">Edificio Principal</p>
                    </div>

                    <div class="bg-yellow-50 rounded-2xl p-5">
                        <h3 class="font-bold text-yellow-700">Piso</h3>
                        <p class="mt-2">Primer Nivel</p>
                    </div>

                    <div class="bg-purple-50 rounded-2xl p-5">
                        <h3 class="font-bold text-purple-700">Capacidad</h3>
                        <p class="mt-2">25 Estudiantes</p>
                    </div>

                </div>

                <h2 class="text-2xl font-bold mb-4">
                    Descripción
                </h2>

                <p class="text-slate-600 leading-8 text-justify mb-10">

                    El ambiente de Enfermería del Instituto de Educación Superior
                    Tecnológico Público CAP. FAP. José Abelardo Quiñones está destinado
                    al desarrollo de actividades prácticas y simulaciones clínicas,
                    permitiendo a los estudiantes fortalecer sus competencias en atención
                    básica de salud mediante el uso de equipos y recursos especializados.

                </p>

                <h2 class="text-2xl font-bold mb-5">
                    Características
                </h2>

                <div class="grid md:grid-cols-2 gap-4 mb-10">

                    <div class="bg-slate-50 rounded-xl p-4">🛏️ Camillas para prácticas</div>
                    <div class="bg-slate-50 rounded-xl p-4">🩺 Maniquíes de simulación</div>
                    <div class="bg-slate-50 rounded-xl p-4">💊 Botiquín de primeros auxilios</div>
                    <div class="bg-slate-50 rounded-xl p-4">🚑 Equipos de atención básica</div>
                    <div class="bg-slate-50 rounded-xl p-4">🚿 Lavamanos clínico</div>
                    <div class="bg-slate-50 rounded-xl p-4">💡 Buena iluminación</div>

                </div>

                <h2 class="text-2xl font-bold mb-4">
                    Objetivo
                </h2>

                <p class="text-slate-600 leading-8 text-justify mb-10">

                    Brindar un espacio adecuado para el desarrollo de actividades
                    prácticas relacionadas con la atención en salud, fortaleciendo las
                    competencias profesionales y promoviendo la aplicación de normas de
                    bioseguridad.

                </p>

                <div class="text-center">

                    <a href="{{ url('/recorrido') }}"
                        class="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg transition">

                        🌐 Ingresar al Recorrido Virtual

                    </a>

                </div>

            </div>

        </div>

    </div>

</section>

@endsection