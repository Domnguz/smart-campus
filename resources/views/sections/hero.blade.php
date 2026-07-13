<section class="relative h-screen overflow-hidden">

    <!-- Video de fondo -->
    <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover">

        <source src="{{ asset('videos/instituto.mp4') }}" type="video/mp4">

    </video>

    <!-- Capa oscura -->
    <div class="absolute inset-0 bg-black/55"></div>

    <!-- Contenido -->
   <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <h1 class="text-white text-4xl md:text-6xl font-bold leading-tight">

            Bienvenido al recorrido virtual del <br>

            <span class="text-blue-400">
                CAP. FAP. José Abelardo Quiñones
            </span>

        </h1>

        <p class="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl">

            Explora nuestras instalaciones mediante fotografías panorámicas
            e interactúa con cada ambiente del instituto.

        </p>

        <a href="#experiencia360"
            class="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold transition duration-300 shadow-xl">

            🌍 Explorar Instituto 360°

        </a>
          
        
<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

    <a href="#experiencia360">

        <svg xmlns="http://www.w3.org/2000/svg"
             class="w-14 h-14 text-white"
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