<section class="relative py-24 bg-gradient-to-b from-white via-blue-50/40 to-slate-50 overflow-hidden">

    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>

    <div class="max-w-7xl mx-auto px-6 relative">

        <div class="text-center">

            <span class="inline-flex items-center gap-3 text-blue-600 font-semibold uppercase tracking-[0.25em] text-sm">
                <span class="w-10 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-400"></span>
                Beneficios
                <span class="w-10 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600"></span>
            </span>

            <h2 class="mt-6 text-3xl md:text-5xl font-black text-slate-800">
                ¿Por qué utilizar
                <span class="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    Smart Campus 360?
                </span>
            </h2>

            <p class="mt-6 max-w-3xl mx-auto text-slate-600 text-lg">
                Nuestra plataforma permite explorar los ambientes del instituto de forma interactiva,
                facilitando la orientación de estudiantes, docentes y visitantes.
            </p>

        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            @foreach ([
                ['icon' => '📱', 'title' => 'Compatible con celulares', 'text' => 'Accede al recorrido virtual desde cualquier dispositivo móvil mediante un código QR.'],
                ['icon' => '🌐', 'title' => 'Recorridos 360°', 'text' => 'Explora las aulas mediante fotografías panorámicas con una experiencia inmersiva.'],
                ['icon' => '🗺️', 'title' => 'Mapa Interactivo', 'text' => 'Selecciona fácilmente los edificios y navega por sus diferentes ambientes.'],
                ['icon' => '⚡', 'title' => 'Acceso rápido', 'text' => 'Ingresa directamente al recorrido virtual escaneando un código QR.'],
            ] as $item)

                <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-blue-100 p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-3xl shadow-lg shadow-blue-200">
                        {{ $item['icon'] }}
                    </div>

                    <h3 class="mt-6 text-xl font-bold text-slate-800">
                        {{ $item['title'] }}
                    </h3>

                    <p class="mt-4 text-slate-600">
                        {{ $item['text'] }}
                    </p>

                </div>

            @endforeach

        </div>

    </div>

</section>