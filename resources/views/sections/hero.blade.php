<section class="relative h-screen overflow-hidden">


    {{-- VIDEO DE FONDO --}}
    <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover">


        <source src="{{ asset('videos/instituto.mp4') }}" type="video/mp4">


    </video>




    {{-- CAPA OSCURA --}}
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>





    {{-- CONTENIDO --}}
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">





        {{-- ETIQUETA --}}
        <span class="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full 
        bg-white/10 backdrop-blur-md border border-white/20
        text-white text-sm tracking-[0.3em] uppercase">


            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>


            Smart Campus 360°


        </span>








        {{-- TITULO --}}
        <h1 class="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-tight">


            Bienvenido al recorrido virtual del


            <span class="block mt-3 text-transparent bg-clip-text 
            bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">


                CAP. FAP. José Abelardo Quiñones


            </span>


        </h1>








        {{-- DESCRIPCIÓN --}}
        <p class="mt-8 text-lg md:text-xl text-gray-200 max-w-3xl leading-8">


            Explora nuestras instalaciones mediante fotografías panorámicas
            e interactúa con cada ambiente del instituto a través de una
            experiencia virtual inmersiva.


        </p>








        {{-- BOTÓN --}}
        <a href="#experiencia360"


            class="group mt-10 inline-flex items-center gap-3

            bg-white/15 backdrop-blur-xl

            border border-white/30

            hover:bg-white/25

            text-white

            px-10 py-4

            rounded-full

            text-lg font-semibold

            shadow-2xl

            transition-all duration-300

            hover:scale-105">





            <span class="text-2xl group-hover:rotate-12 transition">

                🌍

            </span>




            <span>

                Explorar Instituto 360°

            </span>




            <span class="group-hover:translate-x-2 transition">

                →

            </span>




        </a>








        {{-- FLECHA --}}
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">


            <a href="#experiencia360"
                aria-label="Bajar">


                <svg xmlns="http://www.w3.org/2000/svg"

                    class="w-14 h-14 text-white drop-shadow-lg"

                    fill="none"

                    viewBox="0 0 24 24"

                    stroke="currentColor">


                    <path stroke-linecap="round"

                        stroke-linejoin="round"

                        stroke-width="2.5"

                        d="M6 9l6 6 6-6"/>


                </svg>


            </a>


        </div>





    </div>



</section>