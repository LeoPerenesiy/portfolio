<section class="min-h-screen flex justify-center items-center px-4">
    <div class="w-full md:w-1/2 flex flex-col">
        <div class="w-full md:w-1/2 flex flex-col project-block">
            <h2 class="
            text-4xl
            font-bold
            mb-8
            latest-works-header
            text-white tracking-tight"
                style="text-shadow: 0 2px 8px rgba(0,0,0,0.07);">
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
            <div class="modal-content-block text-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative p-10 transform scale-95 opacity-0 transition-all duration-300 shadow-2xl border border-white/10">
                <!-- Close button -->
                <button id="closeModal" class="
    absolute top-6 right-6 w-14 h-14 flex items-center justify-center
    rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500
    shadow-xl hover:shadow-2xl
    text-white hover:text-yellow-100
    transition-all duration-500
    transform hover:rotate-180 hover:scale-125
">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <!-- Project content -->
                <h2 id="modalTitle" class="text-4xl font-bold mb-6"></h2>

                <div id="modalImages" class="relative mt-12 h-72 flex items-center justify-center"></div>

                <p id="modalDescription" class="text-lg leading-relaxed whitespace-pre-line"></p>
            </div>
        </div>
    </div>
</section>
