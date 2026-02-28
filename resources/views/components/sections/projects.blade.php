<section id="projects" class="projects-section py-20 bg-gray-50">
    <div class="works-wrapper mt-20 mx-auto px-6 flex flex-col md:flex-row items-start md:items-stretch gap-12">

        <!-- Левая часть: картинка -->
        <div class="w-full md:w-1/2 relative overflow-hidden rounded-xl bg-black">
            <!-- Чёрный фон -->
            <div class="absolute inset-0 bg-black z-10 transition-opacity duration-500" id="blackOverlay"></div>

            <!-- Картинки проектов -->
            <img src="{{ asset('images/winna.png') }}" class="project-image absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 scale-105" data-project="gambling1">
            <img src="{{ asset('images/heybets.png') }}" class="project-image absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 scale-105" data-project="gambling2">
            <img src="{{ asset('images/grabien.png') }}" class="project-image absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 scale-105" data-project="grabien">
            <img src="{{ asset('images/saas-training-app.webp') }}" class="project-image absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 scale-105" data-project="music">
            <img src="{{ asset('images/mvp-for-gamers-with-blockchain-1.webp') }}" class="project-image absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 scale-105" data-project="game">
            <img src="{{ asset('images/car.jpg') }}" class="project-image absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 scale-105" data-project="car">
        </div>

        <!-- Правая часть: список проектов -->
        <div class="w-full md:w-1/2 flex flex-col">
            <h2 class="hr-projects text-4xl font-bold mb-8 latest-works-header text-white tracking-tight" style="text-shadow: 0 2px 8px rgba(0,0,0,0.07);">
                Latest Works
            </h2>

            <ul class="space-y-6 overflow-y-auto max-h-[600px] pr-2">
                <li class="group cursor-pointer project-item relative" data-project="gambling1">
                    <div class="relative inline-block transition-all duration-300 transform group-hover:translate-x-4">

                        <!-- Стрелка -->
                        <span class="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0
                         transition-all duration-300 group-hover:opacity-100 group-hover:-left-4 text-blue-300">
              →
            </span>

                        <!-- Название проекта -->
                        <span class="project-title text-2xl font-semibold relative text-white group-hover:text-blue-100">
              iGaming Platform
                            <!-- underline -->
              <span class="block h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full mt-1 rounded"></span>
            </span>
                    </div>
                </li>

                <li class="group cursor-pointer project-item relative" data-project="gambling2">
                    <div class="relative inline-block transition-all duration-300 transform group-hover:translate-x-4">
            <span class="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0
                         transition-all duration-300 group-hover:opacity-100 group-hover:-left-4 text-blue-300">
              →
            </span>
                        <span class="project-title text-2xl font-semibold relative text-white group-hover:text-blue-100">
              iGaming Platform #2
              <span class="block h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full mt-1 rounded"></span>
            </span>
                    </div>
                </li>

                <li class="group cursor-pointer project-item relative" data-project="grabien">
                    <div class="relative inline-block transition-all duration-300 transform group-hover:translate-x-4">
            <span class="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0
                         transition-all duration-300 group-hover:opacity-100 group-hover:-left-4 text-blue-300">
              →
            </span>
                        <span class="project-title text-2xl font-semibold relative text-white group-hover:text-blue-100">
              Grabien
              <span class="block h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full mt-1 rounded"></span>
            </span>
                    </div>
                </li>

                <li class="group cursor-pointer project-item relative" data-project="music">
                    <div class="relative inline-block transition-all duration-300 transform group-hover:translate-x-4">
            <span class="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0
                         transition-all duration-300 group-hover:opacity-100 group-hover:-left-4 text-blue-300">
              →
            </span>
                        <span class="project-title text-2xl font-semibold relative text-white group-hover:text-blue-100">
              Saas Training App
              <span class="block h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full mt-1 rounded"></span>
            </span>
                    </div>
                </li>

                <li class="group cursor-pointer project-item relative" data-project="game">
                    <div class="relative inline-block transition-all duration-300 transform group-hover:translate-x-4">
            <span class="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0
                         transition-all duration-300 group-hover:opacity-100 group-hover:-left-4 text-blue-300">
              →
            </span>
                        <span class="project-title text-2xl font-semibold relative text-white group-hover:text-blue-100">
              MVP for Gamers
              <span class="block h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full mt-1 rounded"></span>
            </span>
                    </div>
                </li>

                <li class="group cursor-pointer project-item relative" data-project="car">
                    <div class="relative inline-block transition-all duration-300 transform group-hover:translate-x-4">
            <span class="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0
                         transition-all duration-300 group-hover:opacity-100 group-hover:-left-4 text-blue-300">
              →
            </span>
                        <span class="project-title text-2xl font-semibold relative text-white group-hover:text-blue-100">
              SmartAutoService
              <span class="block h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full mt-1 rounded"></span>
            </span>
                    </div>
                </li>
            </ul>
        </div>

        <!-- Modal -->
        <div id="projectModal" class="fixed inset-0 z-50 hidden bg-gradient-to-r from-purple-800/40 via-indigo-800/40 to-blue-900/40 backdrop-blur-lg flex items-center justify-center p-6">
            <div class="bg-gray-900/95 text-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative p-10 transform scale-95 opacity-0 transition-all duration-300 shadow-2xl border border-white/10">

                <!-- Close button -->
                <button id="closeModal" class="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500/80 text-white hover:text-white transition-all duration-300 transform hover:rotate-90 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <!-- Project content -->
                <h2 id="modalTitle" class="text-4xl font-bold mb-6"></h2>
                <p id="modalDescription" class="text-lg leading-relaxed whitespace-pre-line"></p>
            </div>
        </div>

    </div>
</section>
