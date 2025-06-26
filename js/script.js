document.addEventListener('DOMContentLoaded', function() {
    // Плавный скролл
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Инициализация анимаций при скролле
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        const animate = () => {
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
                
                if (rect.top <= viewHeight - 100) {
                    el.classList.add('fade-in-up');
                }
            });
        };
        
        // Запускаем сразу и при скролле
        animate();
        window.addEventListener('scroll', animate);
    };

    // Инициализация слайдеров
    const initRoomSliders = () => {
        const sliders = document.querySelectorAll('.room-gallery');
        
        sliders.forEach(slider => {
            new Swiper(slider, {
                loop: true,
                autoplay: {
                    delay: 3000,
                    pauseOnMouseEnter: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                lazy: {
                    loadPrevNext: true,
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                speed: 800
            });
        });
    };

    // Добавляем классы для анимации
    const setupAnimations = () => {
        // Для страницы about.html
        document.querySelectorAll('.card').forEach((card, index) => {
            card.classList.add('animate-on-scroll', `delay-${index % 3}`);
        });

        // Для страницы rooms.html
        document.querySelectorAll('.room-item').forEach((item, index) => {
            item.classList.add('animate-on-scroll', `delay-${index % 3}`);
        });

        // Для страницы index.html
        const heroText = document.querySelector('.hero-text');
        if (heroText) {
            heroText.classList.add('animate-on-scroll');
        }

        // Для всех изображений
        document.querySelectorAll('img').forEach(img => {
            img.classList.add('img-scale');
        });
    };

    // Инициализация всех функций
    setupAnimations();
    animateOnScroll();
    initRoomSliders();
});

