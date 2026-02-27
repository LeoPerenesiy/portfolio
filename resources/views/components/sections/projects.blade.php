<section id="projects" class="projects-section py-20 bg-gray-50">
    <div class="works-wrapper mt-20 mx-auto px-6 flex flex-col md:flex-row items-start md:items-stretch gap-12">

        <!-- Левая часть: картинка -->
        <div class="w-full md:w-1/2 relative overflow-hidden rounded-xl bg-black">
            <!-- Чёрный фон -->
            <div class="absolute inset-0 bg-black z-10 transition-opacity duration-500" id="blackOverlay"></div>

            <!-- Картинки проектов -->
            <img src="{{ asset('images/gambling1.png') }}" class="project-image absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 scale-105" data-project="gambling1">
            <img src="{{ asset('images/gambling2.png') }}" class="project-image absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 scale-105" data-project="gambling2">
            <img src="{{ asset('images/grabien.png') }}" class="project-image absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 scale-105" data-project="grabien">
        </div>

        <!-- Правая часть: список проектов -->
        <div class="w-full md:w-1/2 flex flex-col">
            <h2 class="text-4xl font-bold mb-8 latest-works-header text-white tracking-tight" style="text-shadow: 0 2px 8px rgba(0,0,0,0.07);">
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

                <!-- Добавляешь остальные проекты по той же схеме -->
            </ul>
        </div>

    </div>
</section>
