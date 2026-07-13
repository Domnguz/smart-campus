<nav id="navbar"
    class="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50 transition-all duration-500">

    <div class="max-w-7xl mx-auto px-6">

        <div class="flex items-center justify-between h-20">

            <!-- Logo -->
            <a href="{{ url('/') }}" class="flex items-center gap-3">

                <img src="{{ asset('images/logo.png') }}"
                     class="w-12 h-12 object-contain">

                <div class="block">

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

                <a href="/" class="hover:text-blue-600">
                    Inicio
                </a>

                <details class="relative">

                    <summary class="cursor-pointer list-none hover:text-blue-600">
                        Ambientes
                    </summary>

                    <div class="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg z-50">

                        <a href="/ambientes/lab1" class="block px-4 py-2 hover:bg-gray-100">
                            🧪 Laboratorio 1
                        </a>

                        <a href="/ambientes/lab2" class="block px-4 py-2 hover:bg-gray-100">
                            🧪 Laboratorio 2
                        </a>

                        <a href="/ambientes/enfermeria" class="block px-4 py-2 hover:bg-gray-100">
                            🏥 Enfermería
                        </a>

                        <a href="/ambientes/biblioteca" class="block px-4 py-2 hover:bg-gray-100">
                            📚 Biblioteca
                        </a>

                        <a href="/ambientes/fablab" class="block px-4 py-2 hover:bg-gray-100">
                            🏭 FabLab
                        </a>

                        <a href="/ambientes/auditorio" class="block px-4 py-2 hover:bg-gray-100">  
                            🎤Auditorio
                        </a>

                    </div>

                </details>

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

        <details>

            <summary class="px-6 py-4 cursor-pointer hover:bg-gray-100">
                Ambientes
            </summary>

            <div class="bg-gray-50">

                <a href="/ambientes/lab1" class="block px-10 py-3 hover:bg-gray-100">
                    🧪 Laboratorio 1
                </a>

                <a href="/ambientes/lab2" class="block px-10 py-3 hover:bg-gray-100">
                    🧪 Laboratorio 2
                </a>

                <a href="/ambientes/enfermeria" class="block px-10 py-3 hover:bg-gray-100">
                    🏥 Enfermería
                </a>

                <a href="/ambientes/biblioteca" class="block px-10 py-3 hover:bg-gray-100">
                    📚 Biblioteca
                </a>

                <a href="/ambientes/fablab" class="block px-10 py-3 hover:bg-gray-100">
                    🏭 FabLab
                </a>
                
                <a href="/ambientes/auditorio" class="block px-10 py-3 hover:bg-gray-100">
                    🎤 Auditorio
                </a>
              
            </a>
           
        </div>

        </details>

    </div>

</nav>