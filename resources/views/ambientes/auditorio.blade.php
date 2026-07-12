{{-- resources/views/ambientes/auditorio.blade.php --}}
@extends('layouts.app')

@section('title', 'Auditorio')

@section('content')

<section class="bg-slate-50 min-h-screen pt-24 pb-20">

    <div class="w-full max-w-5xl mx-auto px-4 md:px-8">

        {{-- HERO --}}
        <div class="relative rounded-3xl overflow-hidden shadow-lg">

            <img
                src="{{ asset('images/aulas/auditorio.jpg') }}"
                class="w-full aspect-[16/9] md:aspect-[21/9] object-cover"
                alt="Auditorio">

            <div class="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/10 to-transparent"></div>

            <div class="absolute bottom-0 left-0 p-6 md:p-10">
                <span class="inline-block text-xs tracking-widest bg-blue-600 text-white font-semibold px-3 py-1 rounded-full">
                    AUD01
                </span>
                <h1 class="text-3xl md:text-5xl font-bold text-white mt-3">
                    Auditorio
                </h1>
                <p class="text-slate-200 mt-1 text-sm md:text-base">
                    Instituto CAP. FAP. José Abelardo Quiñones
                </p>
            </div>

        </div>

        {{-- FICHA DE DATOS --}}
        <div class="bg-white rounded-2xl mt-4 shadow-sm border border-blue-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-blue-100">

            <div class="px-5 py-6">
                <p class="text-xs uppercase tracking-wide text-blue-600 font-semibold">Código</p>
                <p class="text-lg font-bold text-slate-800 mt-1">AUD01</p>
            </div>

            <div class="px-5 py-6">
                <p class="text-xs uppercase tracking-wide text-blue-600 font-semibold">Ubicación</p>
                <p class="text-lg font-bold text-slate-800 mt-1">Pabellón B</p>
            </div>

            <div class="px-5 py-6">
                <p class="text-xs uppercase tracking-wide text-blue-600 font-semibold">Piso</p>
                <p class="text-lg font-bold text-slate-800 mt-1">Planta Baja</p>
            </div>

            <div class="px-5 py-6">
                <p class="text-xs uppercase tracking-wide text-blue-600 font-semibold">Capacidad</p>
                <p class="text-lg font-bold text-slate-800 mt-1">150 personas</p>
            </div>

        </div>

        {{-- CONTENIDO --}}
        <div class="grid md:grid-cols-5 gap-10 mt-12 bg-white rounded-2xl shadow-sm border border-blue-100 p-8 md:p-12">

            <div class="md:col-span-3">
                <h2 class="text-xl font-bold text-slate-800 mb-3">Descripción</h2>
                <p class="text-slate-600 leading-8">
                    El Auditorio del Instituto de Educación Superior Tecnológico
                    Público CAP. FAP. José Abelardo Quiñones es el espacio principal
                    para ceremonias, charlas, exposiciones y eventos institucionales,
                    con capacidad para recibir a un gran número de estudiantes,
                    docentes e invitados.
                </p>

                <h2 class="text-xl font-bold text-slate-800 mt-10 mb-3">Objetivo</h2>
                <p class="text-slate-600 leading-8">
                    Brindar un espacio adecuado para la realización de eventos
                    académicos e institucionales, fomentando la participación de
                    la comunidad educativa en actividades culturales y formativas.
                </p>
            </div>

            <div class="md:col-span-2">
                <h2 class="text-xl font-bold text-slate-800 mb-3">Características</h2>
                <ul class="space-y-3">
                    @foreach ([
                        'Escenario principal',
                        'Sistema de sonido',
                        'Proyector y pantalla grande',
                        'Butacas para el público',
                        'Iluminación escénica',
                        'Aire acondicionado',
                    ] as $item)
                        <li class="flex items-center gap-3 text-slate-700">
                            <span class="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">✓</span>
                            {{ $item }}
                        </li>
                    @endforeach
                </ul>
            </div>

        </div>

        {{-- CTA --}}
        <div class="text-center mt-14">
            <a href="{{ url('/recorrido/auditorio') }}"
                class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition">
                🌐 Ingresar al recorrido virtual
            </a>
        </div>

    </div>

</section>

@endsection