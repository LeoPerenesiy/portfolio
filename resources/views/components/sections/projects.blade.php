<section id="projects" class="projects-section py-20 bg-gray-50">
    <div class="container works-wrapper mt-20 mx-auto px-6 flex flex-col md:flex-row items-start md:items-stretch gap-12">

        <!-- Левая часть: картинка -->
        <div class="w-full md:w-1/2 relative group">
            <img src="{{ asset('images/grab.png') }}" alt="Project Screenshot" class="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105">
            <!-- Overlay при наведении -->
            <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white p-6 text-sm text-center">
                Worked on Backend API, Queue Workers, Redis caching, Docker infrastructure
            </div>
        </div>

        <!-- Правая часть: текст -->
        <div class="w-full md:w-1/2 flex flex-col">
            <h2 class="text-4xl font-bold mb-8">Latest Works</h2>

            <!-- Список проектов -->
            <ul class="space-y-4">
                <li class="text-2xl font-semibold text-gray-800 cursor-pointer relative group">
                    iGaming Platform
                    <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                    <p class="text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                        Backend: Laravel, Redis, Docker, Queue workers
                    </p>
                </li>
                <li class="text-2xl font-semibold text-gray-800 cursor-pointer relative group">
                    iGaming Platform #2
                    <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                    <p class="text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                        Real-time trading dashboard, WebSocket streams, Optimized API
                    </p>
                </li>
                <li class="text-2xl font-semibold text-gray-800 cursor-pointer relative group">
                    Media Platform
                    <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                    <p class="text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                        Video processing dashboard with high-load backend and interactive frontend
                    </p>
                </li>
                <li class="text-2xl font-semibold text-gray-800 cursor-pointer relative group">
                    Health
                    <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                    <p class="text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                        Video processing dashboard with high-load backend and interactive frontend
                    </p>
                </li>
                <li class="text-2xl font-semibold text-gray-800 cursor-pointer relative group">
                    Sport
                    <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                    <p class="text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                        Video processing dashboard with high-load backend and interactive frontend
                    </p>
                </li>
                <!-- Добавляешь ещё 6 проектов так же -->
            </ul>
        </div>

    </div>
</section>

