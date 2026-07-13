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

                <a href="/" class="relative text-slate-700 hover:text-blue-600 transition group">
                    Inicio
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>

                <details class="relative group/dropdown">

                    <summary class="cursor-pointer list-none flex items-center gap-1 text-slate-700 hover:text-blue-600 transition">
                        Ambientes
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4 transition-transform duration-300 group-open/dropdown:rotate-180"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </summary>

                    <div class="absolute right-0 mt-3 w-56 bg-white border border-blue-100 rounded-2xl shadow-xl overflow-hidden animate-[fadeIn_0.2s_ease-out]">

                        <a href="/ambientes/lab1" class="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition">
                            🧪 Laboratorio 1
                        </a>
                        <a href="/ambientes/lab2" class="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition">
                            🧪 Laboratorio 2
                        </a>
                        <a href="/ambientes/enfermeria" class="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition">
                            🏥 Enfermería
                        </a>
                        <a href="/ambientes/biblioteca" class="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition">
                            📚 Biblioteca
                        </a>
                        <a href="/ambientes/fablab" class="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition">
                            🏭 FabLab
                        </a>
                        <a href="/ambientes/auditorio" class="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition">
                            🎤 Auditorio
                        </a>

                    </div>

                </details>

            </div>

            <!-- Botón celular -->
            <button id="menuButton" class="md:hidden text-blue-900">
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
    <div id="mobileMenu" class="hidden md:hidden bg-white border-t border-blue-100">

        <a href="/" class="block px-6 py-4 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition">
            Inicio
        </a>

        <details>

            <summary class="px-6 py-4 cursor-pointer text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition flex items-center gap-1">
                Ambientes
            </summary>

            <div class="bg-blue-50/50">

                <a href="/ambientes/lab1" class="block px-10 py-3 text-slate-700 hover:bg-blue-100 hover:text-blue-600 transition">
                    🧪 Laboratorio 1
                </a>
                <a href="/ambientes/lab2" class="block px-10 py-3 text-slate-700 hover:bg-blue-100 hover:text-blue-600 transition">
                    🧪 Laboratorio 2
                </a>
                <a href="/ambientes/enfermeria" class="block px-10 py-3 text-slate-700 hover:bg-blue-100 hover:text-blue-600 transition">
                    🏥 Enfermería
                </a>
                <a href="/ambientes/biblioteca" class="block px-10 py-3 text-slate-700 hover:bg-blue-100 hover:text-blue-600 transition">
                    📚 Biblioteca
                </a>
                <a href="/ambientes/fablab" class="block px-10 py-3 text-slate-700 hover:bg-blue-100 hover:text-blue-600 transition">
                    🏭 FabLab
                </a>
                <a href="/ambientes/auditorio" class="block px-10 py-3 text-slate-700 hover:bg-blue-100 hover:text-blue-600 transition">
                    🎤 Auditorio
                </a>

            </div>

        </details>

    </div>

</nav>