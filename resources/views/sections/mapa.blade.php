<section id="mapa" class="py-20 bg-slate-100">

    <div class="max-w-7xl mx-auto px-6">

        <!-- Título -->
        <div class="text-center">

            <span class="text-blue-600 font-semibold uppercase tracking-widest">
                Mapa Interactivo
            </span>

            <h2 class="mt-4 text-3xl md:text-5xl font-bold text-slate-800">

                Explora el Instituto

            </h2>

            <p class="mt-6 text-slate-600 max-w-3xl mx-auto">

                Selecciona uno de los edificios para comenzar el recorrido virtual.

            </p>

        </div>

        <!-- Imagen -->
        <div class="relative mt-14">

            <img
                src="{{ asset('images/mapa-campus.png') }}"
                class="w-full rounded-3xl shadow-2xl"
                alt="Mapa">

            <!-- Edificio Izquierdo -->
            <button
                class="absolute left-[5%] top-[48%] w-[25%] h-[40%]"
                onclick="mostrarEdificio('Edificio A')">
            </button>

            <!-- Edificio Centro -->
            <button
                class="absolute left-[37%] top-[8%] w-[26%] h-[36%]"
                onclick="mostrarEdificio('Edificio Central')">
            </button>

            <!-- Edificio Derecho -->
            <button
                class="absolute right-[5%] top-[48%] w-[25%] h-[40%]"
                onclick="mostrarEdificio('Edificio B')">
            </button>

        </div>

    </div>

</section>

<!-- Modal -->
<div id="modalEdificio"
     class="fixed inset-0 bg-black/60 hidden items-center justify-center z-50">

    <div class="bg-white rounded-3xl p-8 w-[90%] max-w-md text-center">

        <h3 id="nombreEdificio"
            class="text-3xl font-bold text-slate-800">
        </h3>

        <p class="mt-4 text-slate-600">

            Aquí más adelante aparecerán los pisos y las aulas disponibles.

        </p>

        <button
            class="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
            onclick="cerrarModal()">

            Cerrar

        </button>

    </div>

</div>

<script>

function mostrarEdificio(nombre){

    document.getElementById("nombreEdificio").innerText = nombre;

    document.getElementById("modalEdificio")
        .classList.remove("hidden");

    document.getElementById("modalEdificio")
        .classList.add("flex");

}

function cerrarModal(){

    document.getElementById("modalEdificio")
        .classList.remove("flex");

    document.getElementById("modalEdificio")
        .classList.add("hidden");

}

</script>