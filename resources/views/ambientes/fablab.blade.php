@extends('layouts.app')

@section('title', 'FabLab')

@section('content')

<section class="bg-slate-100 min-h-screen pt-28 pb-16">

    <div class="max-w-6xl mx-auto px-5">

        <div class="text-center mb-10">

            <span class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                FAB01
            </span>

            <h1 class="text-4xl md:text-5xl font-bold text-slate-800 mt-5">
                FabLab
            </h1>

            <p class="text-slate-500 mt-3 text-lg">
                Laboratorio de Fabricación Digital
            </p>

        </div>

        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">

            <img
                src="{{ asset('images/aulas/fablab.png') }}"
                class="w-full h-72 md:h-[450px] object-cover object-center"
                alt="FabLab">

            <div class="p-8">

                <div class="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">

                    <div class="bg-blue-50 rounded-2xl p-5">
                        <h3 class="font-bold text-blue-700">Código</h3>
                        <p class="mt-2">FAB01</p>
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
                        <p class="mt-2">20 Estudiantes</p>
                    </div>

                </div>

                <h2 class="text-2xl font-bold mb-4">
                    Descripción
                </h2>

                <p class="text-slate-600 leading-8 text-justify mb-10">

                    El FabLab (Laboratorio de Fabricación Digital) del Instituto de Educación Superior Tecnológico Público
                    CAP. FAP. José Abelardo Quiñones es un espacio de innovación tecnológica diseñado para que los estudiantes
                    desarrollen proyectos utilizando herramientas y equipos de fabricación digital. En este ambiente se fomenta
                    la creatividad, el trabajo colaborativo, el diseño y la creación de prototipos mediante el uso de tecnologías
                    modernas orientadas al aprendizaje práctico.

                </p>

                <h2 class="text-2xl font-bold mb-5">
                    Características
                </h2>

                <div class="grid md:grid-cols-2 gap-4 mb-10">

                    <div class="bg-slate-50 rounded-xl p-4">🖨️ Impresoras 3D</div>

                    <div class="bg-slate-50 rounded-xl p-4">✂️ Cortadora Láser</div>

                    <div class="bg-slate-50 rounded-xl p-4">💻 Computadoras para Diseño CAD</div>

                    <div class="bg-slate-50 rounded-xl p-4">🛠️ Herramientas de Fabricación Digital</div>

                    <div class="bg-slate-50 rounded-xl p-4">📐 Área de Prototipado</div>

                    <div class="bg-slate-50 rounded-xl p-4">🌐 Software Especializado</div>

                </div>

                <h2 class="text-2xl font-bold mb-4">
                    Objetivo
                </h2>

                <p class="text-slate-600 leading-8 text-justify mb-10">

                    Brindar un espacio de innovación tecnológica donde los estudiantes puedan desarrollar habilidades
                    en diseño, fabricación digital, prototipado rápido y emprendimiento, promoviendo el aprendizaje
                    basado en proyectos y el uso de tecnologías de última generación.

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