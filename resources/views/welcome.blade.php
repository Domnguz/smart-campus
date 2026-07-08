@extends('layouts.app')

@section('title', 'Inicio')

@section('content')

@include('sections.hero')

@include('sections.about')

@include('sections.features')

@include('sections.mapa')

@endsection

<!-- Bottom Sheet -->
<div id="sheet"
class="fixed bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-2xl translate-y-full transition-transform duration-500 z-50">

    <div class="p-6">

        <div class="w-16 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>

        <h2 id="sheetTitle"
        class="text-2xl font-bold text-center text-slate-800">
            Edificio
        </h2>

        <p class="text-center text-gray-500 mt-2">
            Seleccione un piso
        </p>

        <div class="mt-8 space-y-4">

            <button
                class="floor w-full py-4 rounded-xl bg-blue-600 text-white font-semibold"
                data-floor="1">

                Primer Piso

            </button>

            <button
                class="floor w-full py-4 rounded-xl bg-blue-600 text-white font-semibold"
                data-floor="2">

                Segundo Piso

            </button>

            <button
                class="floor w-full py-4 rounded-xl bg-blue-600 text-white font-semibold"
                data-floor="3">

                Tercer Piso

            </button>

        </div>

        <button
        id="closeSheet"
        class="w-full mt-8 py-3 border rounded-xl">

            Cerrar

        </button>

    </div>

</div>