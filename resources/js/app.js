import './bootstrap';

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
                    waveSpeed: 2.8,
                    waveIntensity: 1.8,
                    color: 0x1a0033
                }, 2000);

                startWavePulse();
            }

            // Показываем только выбранную секцию
            sections.forEach(sec => {
                sec.style.display = sec.id === targetId ? "block" : "none";
            });

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
            subtitle.style.opacity = "1";
            subtitle.style.animation = "glitch 0.6s ease";
            text.style.opacity = "1";
            text.style.animation = "revealUp 1s ease forwards";

            setInterval(() => {
                subtitle.style.animation = "none";
                subtitle.offsetHeight;
                subtitle.style.animation = "glitch 0.6s ease";
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

                observer.unobserve(card);
            }
        });
    }, {threshold: 0.2});

    cards.forEach(card => observer.observe(card));
});

function animateExperienceCards() {
    const cards = document.querySelectorAll(".exp-card");

    cards.forEach(card => {
        card.classList.remove("show");
        const badges = card.querySelectorAll(".tech-badge");
        badges.forEach(badge => badge.classList.remove("show"));

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

    images.forEach(img => {
        img.classList.remove('opacity-100', 'scale-100');
        img.classList.add('opacity-0', 'scale-105');
    });

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


const projects = {
    gambling1: {
        title: "Backend Developer / iGaming Platform",
        description:
            "Developed and maintained high-load online gambling platform systems.\n" +
            "Designed complex business logic for bonus systems (welcome bonuses, free spins, cashback, VIP programs), ensuring accurate calculations, instant crediting, and protection against abuse.\n" +
            "Optimized microservice performance, implemented monitoring and alerting, reduced latency, and increased reliability of distributed systems under peak loads with thousands of concurrent players.\n",
        images: [
            "images/winna2.png",
            "images/winna3.png",
            "images/winna.png"
        ]
    },
    gambling2: {
        title: "Backend Developer / iGaming Platform",
        description: "Responsible for backend development and maintenance of in-house games on a large gambling platform: original slots, crash, dice, plinko, table games, and other in-house titles.\n" +
            "Implemented game logic, RTP configurations, volatility tuning, and bonus mechanics with a focus on fairness, compliance, and GGR maximization.\n" +
            "Optimized performance for millions of spins per day, implemented real-time monitoring of actual RTP and anomalies, and scaled microservices for seamless gameplay with zero downtime.\n",
        images: [
            "images/h2.png",
            "images/h3.png",
            "images/heybets.png",
        ]
    },
    grabien: {
        title: "Full Stack Developer / Grabien",
        description: "Rewrote the legacy system of a leading media marketplace for news clips (Grabien — an online platform for journalists, producers, and media with video/audio archives, clipping tools, WebClipper, NewsBase, etc.).\n" +
            "Integrated PDF parsing and Manticore Search for powerful full-text search across transcripts, documents, and metadata — significantly improving search speed, accuracy, and relevance.\n" +
            "Added new features: UI/UX enhancements, batch processing, integrations with external services, and performance monitoring — all without downtime, focusing on stability and scalability for thousands of users.\n",
        images: [
            "images/grabien2.png",
            "images/grabien3.png",
            "images/grabien.png",
        ]
    },
    music: {
        title: "Backend Developer / SaaS Training App",
        description: "Designed a scalable and secure backend architecture.\n" +
            "Implemented APIs for frontend and mobile clients.\n" +
            "Integrated third-party services for video lessons and analytics.\n" +
            "Managed user accounts, progress tracking, and notifications.",
        images: [
            "images/saas-training-app.webp",
            "images/saas2.webp",
            "images/saas3.webp",
        ]
    },
    game: {
        title: "Full Stack Developer / MVP for Gamers",
        description: "Built from scratch an MVP web platform uniting gamers, artists, and professionals. Developed the backend in PHP (Laravel) and frontend in Vue.js, integrating external services (Steam, Discord, GitHub) for syncing user achievements.\n" +
            "Implemented key features:\n" +
            "- Token system for validating achievements and rewards\n" +
            "- Gamified quests and tournaments\n" +
            "- User profiles with digital trophy rooms and NFTs\n" +
            "- Social feed for content and achievements\n" +
            "- Admin panel for managing users and content",
        images: [
            "images/mvp-for-gamers-with-blockchain-1.webp",
            "images/Games3.webp",
            "images/games2.webp",
        ]
    },
    car: {
        title: "Backend Developer / Smart Auto Service",
        description: "Fully developed the backend for a mobile iOS application, including integration with external services (maps, AI) and designing architecture for scalability and reliability.",
        images: [
            "images/cars3.jpg",
            "images/car.jpg",
            "images/cars2.jpg",
        ]
    }
};

    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeModalBtn = document.getElementById('closeModal');

    document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', () => {
        const projectKey = item.dataset.project;
        const project = projects[projectKey];

        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;

        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.children[0].classList.remove('opacity-0', 'scale-95');
        }, 10);
    });
});

    closeModalBtn.addEventListener('click', () => {
    modal.children[0].classList.add('opacity-0', 'scale-95');
    setTimeout(() => modal.classList.add('hidden'), 300);
});

    modal.addEventListener('click', e => {
    if (e.target === modal) {
    modal.children[0].classList.add('opacity-0', 'scale-95');
    setTimeout(() => modal.classList.add('hidden'), 300);
}
});


const modalImages = document.getElementById('modalImages');

document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', () => {

        const projectKey = item.dataset.project;
        const project = projects[projectKey];

        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;

        modalImages.innerHTML = '';

        if (project.images) {

            project.images.forEach((src, index) => {

                const img = document.createElement('img');
                img.src = src;

                img.className = `
            absolute w-64 h-40 object-cover rounded-2xl shadow-2xl
            transition-all duration-700 ease-out
        `;

                img.style.transform = `rotate(0deg) translateX(0px) scale(0.95)`;

                modalImages.appendChild(img);

                const rotations = [-14, 0, 14];
                const offsets = [-90, 0, 90];

                setTimeout(() => {
                    img.style.transform = `
                rotate(${rotations[index] || 0}deg)
                translateX(${offsets[index] || 0}px)
                scale(1)
            `;
                }, 50 + index * 120);
            });
        }

        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.children[0].classList.remove('opacity-0', 'scale-95');
        }, 10);

    });
});

