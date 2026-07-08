<nav class="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50">

    <div class="max-w-7xl mx-auto px-6">

        <div class="flex items-center justify-between h-20">

            <!-- Logo -->
            <a href="{{ url('/') }}" class="flex items-center gap-3">

                <img src="{{ asset('images/logo.png') }}"
                     class="w-12 h-12 object-contain">

                <div class="hidden sm:block">

                    <h1 class="text-lg font-bold text-blue-900">
                        CAP. FAP. José Abelardo Quiñones
                    </h1>

                    <p class="text-sm text-gray-500">
                        Smart Campus 360
                    </p>

                </div>

            </a>

            <!-- Menú PC -->
            <div class="hidden md:flex items-center gap-8">

                <a href="/">Inicio</a>
                <a href="#mapa">Ambientes</a>
                <a href="#nosotros">Nosotros</a>
                <a href="#contacto">Contáctanos</a>

            </div>

            <!-- Botón celular -->
            <button id="menuButton" class="md:hidden">

                <svg xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">

                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"/>

                </svg>

            </button>

        </div>

    </div>

    <!-- Menú móvil -->
    <div id="mobileMenu" class="hidden md:hidden bg-white border-t">

        <a href="/" class="block px-6 py-4 hover:bg-gray-100">
            Inicio
        </a>

        <a href="#mapa" class="block px-6 py-4 hover:bg-gray-100">
            Ambientes
        </a>

        <a href="#nosotros" class="block px-6 py-4 hover:bg-gray-100">
            Nosotros
        </a>

        <a href="#contacto" class="block px-6 py-4 hover:bg-gray-100">
            Contáctanos
        </a>

    </div>

</nav>