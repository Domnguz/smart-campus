@extends('layouts.app')

@section('title', 'Laboratorio 1')

@section('content')

<section class="bg-slate-100 min-h-screen pt-28 pb-16">

    <div class="max-w-6xl mx-auto px-5">

        <!-- Encabezado -->
        <div class="text-center mb-10">

            <span class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                LAB1
            </span>

            <h1 class="text-4xl md:text-5xl font-bold text-slate-800 mt-5">
                Laboratorio 1
            </h1>

            <p class="text-slate-500 mt-3 text-lg">
                Instituto CAP. FAP. José Abelardo Quiñones
            </p>

        </div>

        <!-- Tarjeta Principal -->
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">

            <!-- Imagen -->
            <img
                src="{{ asset('images/lab1.jpg') }}"
                alt="Laboratorio 1"
                class="w-full h-72 md:h-[450px] object-cover">

            <div class="p-8">

                <!-- Información rápida -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">

                    <div class="bg-blue-50 rounded-2xl p-5">

                        <h3 class="font-bold text-blue-700">
                            Código
                        </h3>

                        <p class="text-slate-700 mt-2">
                            LAB1
                        </p>

                    </div>

                    <div class="bg-green-50 rounded-2xl p-5">

                        <h3 class="font-bold text-green-700">
                            Ubicación
                        </h3>

                        <p class="text-slate-700 mt-2">
                            Edificio A
                        </p>

                    </div>

                    <div class="bg-yellow-50 rounded-2xl p-5">

                        <h3 class="font-bold text-yellow-700">
                            Piso
                        </h3>

                        <p class="text-slate-700 mt-2">
                            Primer Nivel
                        </p>

                    </div>

                    <div class="bg-purple-50 rounded-2xl p-5">

                        <h3 class="font-bold text-purple-700">
                            Capacidad
                        </h3>

                        <p class="text-slate-700 mt-2">
                            30 Estudiantes
                        </p>

                    </div>

                </div>

                <!-- Descripción -->
                <div class="mb-10">

                    <h2 class="text-2xl font-bold text-slate-800 mb-4">

                        Descripción

                    </h2>

                    <p class="text-slate-600 leading-8 text-justify">

                        El <strong>Laboratorio 1 (LAB1)</strong> es un ambiente académico del
                        Instituto de Educación Superior Tecnológico Público
                        <strong>CAP. FAP. José Abelardo Quiñones</strong>,
                        diseñado para el desarrollo de actividades prácticas,
                        demostrativas y de aprendizaje colaborativo.

                        Este espacio cuenta con el mobiliario y equipamiento
                        necesario para fortalecer las competencias de los
                        estudiantes mediante experiencias prácticas que
                        complementan la formación teórica impartida en clase.

                    </p>

                </div>

                <!-- Características -->
                <div class="mb-10">

                    <h2 class="text-2xl font-bold text-slate-800 mb-5">

                        Características del ambiente

                    </h2>

                    <div class="grid md:grid-cols-2 gap-4">

                        <div class="flex items-center bg-slate-50 p-4 rounded-xl">

                            ✅ Proyector Multimedia

                        </div>

                        <div class="flex items-center bg-slate-50 p-4 rounded-xl">

                            ✅ Pizarra Acrílica

                        </div>

                        <div class="flex items-center bg-slate-50 p-4 rounded-xl">

                            ✅ Iluminación LED

                        </div>

                        <div class="flex items-center bg-slate-50 p-4 rounded-xl">

                            ✅ Ventilación Natural

                        </div>

                        <div class="flex items-center bg-slate-50 p-4 rounded-xl">

                            ✅ Conexión a Internet

                        </div>

                        <div class="flex items-center bg-slate-50 p-4 rounded-xl">

                            ✅ Aire Acondicionado

                        </div>

                    </div>

                </div>

                <!-- Objetivo -->
                <div class="mb-12">

                    <h2 class="text-2xl font-bold text-slate-800 mb-4">

                        Objetivo del ambiente

                    </h2>

                    <p class="text-slate-600 leading-8 text-justify">

                        Brindar un espacio adecuado para el desarrollo de
                        actividades académicas prácticas, promoviendo el uso
                        de recursos tecnológicos y fortaleciendo el aprendizaje
                        de los estudiantes mediante experiencias interactivas.

                    </p>

                </div>

                <!-- Botón -->
                <div class="text-center">

                    <a href="{{ url('/recorrido') }}"
                        class="inline-block bg-blue-600 hover:bg-blue-700 transition duration-300 text-white text-lg font-semibold px-10 py-4 rounded-2xl shadow-lg">

                        🌐 Ingresar al Recorrido Virtual 360°

                    </a>

                </div>

            </div>

        </div>

    </div>

</section>

@endsection