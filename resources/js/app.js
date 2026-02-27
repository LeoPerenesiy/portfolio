import './bootstrap';
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.134/build/three.module.js';

document.addEventListener("DOMContentLoaded", () => {
    VANTA.WAVES({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        minHeight: 600.00,
        minWidth: 300.00,
        scale: 1.0,
        scaleMobile: 1.0,
        waveHeight: 20.0,
        waveSpeed: 1.0,
        color: 0x0a0a0a,     // почти чёрный
        shininess: 30.0,
        waveIntensity: 0.5,
    });
});

let vantaEffect = null;

function initVanta(options) {
    if (vantaEffect) vantaEffect.destroy();
    vantaEffect = VANTA.WAVES({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        scale: 1.0,
        scaleMobile: 1.0,
        minHeight: window.innerHeight,
        minWidth: window.innerWidth,
        ...options
    });
}

// Функция плавного перехода параметров
function morphVanta(targetOptions, duration = 1500) {
    if (!vantaEffect) return;

    const start = {
        waveHeight: vantaEffect.options.waveHeight,
        waveSpeed: vantaEffect.options.waveSpeed,
        waveIntensity: vantaEffect.options.waveIntensity,
        color: vantaEffect.options.color
    };

    const startTime = performance.now();

    function animate() {
        const now = performance.now();
        let t = (now - startTime) / duration;
        if (t > 1) t = 1;

        // Линейная интерполяция числовых параметров
        vantaEffect.options.waveHeight = start.waveHeight + (targetOptions.waveHeight - start.waveHeight) * t;
        vantaEffect.options.waveSpeed = start.waveSpeed + (targetOptions.waveSpeed - start.waveSpeed) * t;
        vantaEffect.options.waveIntensity = start.waveIntensity + (targetOptions.waveIntensity - start.waveIntensity) * t;

        // Для цвета: простая интерполяция RGB
        function lerpColor(a, b, t) {
            const r = ((a >> 16) & 0xff) + (((b >> 16) & 0xff) - ((a >> 16) & 0xff)) * t;
            const g = ((a >> 8) & 0xff) + (((b >> 8) & 0xff) - ((a >> 8) & 0xff)) * t;
            const bl = (a & 0xff) + ((b & 0xff) - (a & 0xff)) * t;
            return (Math.round(r) << 16) | (Math.round(g) << 8) | Math.round(bl);
        }
        if (targetOptions.color !== undefined) {
            vantaEffect.options.color = lerpColor(start.color, targetOptions.color, t);
        }

        if (t < 1) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

// FOOTER
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".footer-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const target = document.querySelector(btn.dataset.target);
            if(target){
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Авто-подсветка текущей секции при скролле
    const sections = ["#about", "#experience", "#projects"].map(id => document.querySelector(id));
    window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY + window.innerHeight / 2;
        sections.forEach((sec, i) => {
            const btn = buttons[i];
            const offsetTop = sec.offsetTop;
            const offsetBottom = offsetTop + sec.offsetHeight;

            if(scrollPos >= offsetTop && scrollPos < offsetBottom){
                buttons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
            }
        });
    });
});

let pulseInterval = null;

function startWavePulse() {
    if (!vantaEffect) return;

    if (pulseInterval) clearInterval(pulseInterval);

    const baseHeight = 100;
    const baseIntensity = 1.6;

    pulseInterval = setInterval(() => {
        const time = Date.now() * 0.003;

        vantaEffect.options.waveHeight =
            baseHeight + Math.sin(time) * 15;

        vantaEffect.options.waveIntensity =
            baseIntensity + Math.sin(time) * 0.2;

    }, 16);
}


function stopWavePulse() {
    if (pulseInterval) {
        clearInterval(pulseInterval);
        pulseInterval = null;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".footer-btn");
    const sections = document.querySelectorAll(".section");
    initVanta({
        waveHeight: 18,
        waveSpeed: 0.8,
        waveIntensity: 0.4,
        color: 0x0a0a0a
    });
    // Инициализация: показываем только первую секцию (Home)
    sections.forEach((sec, i) => sec.style.display = i === 0 ? "block" : "none");
    buttons[0].classList.add("active");


    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.dataset.target;

            if (targetId === "experience") {
                // WOW эффект с плавным morph
                morphVanta({
                    waveHeight: 60,
                    waveSpeed: 2.0,
                    waveIntensity: 1.2,
                    color: 0x0011ff
                });
                stopWavePulse();
                animateExperienceCards();
            } else if (targetId === "home") {
                morphVanta({
                    waveHeight: 18,
                    waveSpeed: 0.8,
                    waveIntensity: 0.4,
                    color: 0x0a0a0a
                });
                stopWavePulse();
            } else {
                morphVanta({
                    waveHeight: 120,
                    waveSpeed: 3.5,
                    waveIntensity: 2.0,
                    // color: 0xff0033
                    // color: 880022
                    // color: 0x888888
                    // color: "0x303033"
                    // color: "0xf5f5f7"
                    // color: "0xe6e6e6"
                    color: "0x1f1f1f"
                }, 2000);

                startWavePulse();
            }

            // Показываем только выбранную секцию
            sections.forEach(sec => {
                sec.style.display = sec.id === targetId ? "block" : "none";
            });

            // Обновляем активную кнопку
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
});

// HOME ANIMATION
document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("hero-title");
    const subtitle = document.getElementById("hero-subtitle");
    const text = document.getElementById("hero-text");

    const original = title.innerHTML;
    title.innerHTML = "";

    let i = 0;

    function typeWriter() {
        if (i < original.length) {
            title.innerHTML += original.charAt(i);
            i++;
            setTimeout(typeWriter, 40);
        } else {
            // hero-subtitle и hero-text показываем первый раз
            subtitle.style.opacity = "1";
            subtitle.style.animation = "glitch 0.6s ease";
            text.style.opacity = "1";
            text.style.animation = "revealUp 1s ease forwards";

            // Повторяем анимацию только для hero-subtitle каждые 2 секунды
            setInterval(() => {
                subtitle.style.animation = "none"; // сброс текущей анимации
                subtitle.offsetHeight; // триггер перерендера
                subtitle.style.animation = "glitch 0.6s ease"; // снова анимация
            }, 3000);
        }
    }

    typeWriter();
});

const cursor = document.getElementById("cursor");

let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Плавное движение курсора с небольшим лагом
function animateCursor() {
    posX += (mouseX - posX) * 0.15;
    posY += (mouseY - posY) * 0.15;

    cursor.style.left = posX + "px";
    cursor.style.top = posY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".exp-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const card = entry.target;
                card.classList.add("show");

                // Показываем бейджи с небольшим stagger
                const badges = card.querySelectorAll(".tech-badge");
                badges.forEach((badge, index) => {
                    setTimeout(() => badge.classList.add("show"), index * 100);
                });

                observer.unobserve(card); // больше не нужно следить
            }
        });
    }, {threshold: 0.2});

    cards.forEach(card => observer.observe(card));
});

function animateExperienceCards() {
    const cards = document.querySelectorAll(".exp-card");

    cards.forEach(card => {
        // Сбрасываем классы, чтобы анимация могла повториться
        card.classList.remove("show");
        const badges = card.querySelectorAll(".tech-badge");
        badges.forEach(badge => badge.classList.remove("show"));

        // Слегка задерживаем, чтобы CSS transition сработал
        setTimeout(() => {
            card.classList.add("show");
            badges.forEach((badge, index) => {
                setTimeout(() => badge.classList.add("show"), index * 100);
            });
        }, 50);
    });
}

const items = document.querySelectorAll('.project-item');
const images = document.querySelectorAll('.project-image');
const blackOverlay = document.getElementById('blackOverlay');

function showProject(project) {

    // Убираем все картинки
    images.forEach(img => {
        img.classList.remove('opacity-100', 'scale-100');
        img.classList.add('opacity-0', 'scale-105');
    });

    // Находим нужную
    const active = document.querySelector(`[data-project="${project}"].project-image`);

    if (active) {
        blackOverlay.style.opacity = "0";
        active.classList.remove('opacity-0', 'scale-105');
        active.classList.add('opacity-100', 'scale-100');
    }
}

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        showProject(item.dataset.project);
    });

    item.addEventListener('click', () => {
        showProject(item.dataset.project);
    });
});

// ANIMATION FOR PROJECTS SECTION ON SHOW (NO WHITE FLASH, IMAGES STAY CLICKABLE)
function animateProjectsSection() {
    const projectsSection = document.getElementById('projects');
    const header = projectsSection.querySelector('.latest-works-header');
    const projectItems = projectsSection.querySelectorAll('.project-item');

    // Заголовок
    header.style.opacity = '0';
    header.style.transform = 'translateY(20px)';

    // Список проектов справа
    projectItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(20px)';
    });

    setTimeout(() => {
        // Заголовок
        header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';

        // Список проектов справа
        projectItems.forEach((item, i) => {
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, i * 100);
        });
    }, 50);
}

// Событие переключения футера
document.querySelectorAll('.footer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.dataset.target === 'projects') {
            animateProjectsSection();
        }
    });
});


