document.addEventListener('DOMContentLoaded', () => {

    // --- EFEITO DE HEADER AO ROLAR A PÁGINA ---
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- EFEITO DE DIGITAÇÃO ---
    const subtitleElement = document.getElementById('typing-subtitle');
    if (subtitleElement) {
        const text = "Uma exploração sobre os pilares da sociedade moderna: Inteligência Artificial, segurança, ética e o fluxo de informação.";
        let index = 0;
        subtitleElement.innerHTML = ""; // Limpa o texto para o efeito
        function type() {
            if (index < text.length) {
                subtitleElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 35); // Velocidade da digitação
            }
        }
        setTimeout(type, 800); // Inicia a digitação após uma pequena pausa
    }

    // --- EFEITO 3D NOS CARDS ---
    const cards = document.querySelectorAll('.tema-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            card.style.setProperty('--rotateX', `${-rotateX}deg`);
            card.style.setProperty('--rotateY', `${rotateY}deg`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--rotateX', '0deg');
            card.style.setProperty('--rotateY', '0deg');
        });
    });

    // --- ANIMAÇÃO DE SCROLL (REVELAR ELEMENTOS) ---
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        revealElements.forEach(el => revealObserver.observe(el));
    }

    // --- LÓGICA DO MENU MOBILE (CORRIGIDO) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const overlay = document.getElementById('page-overlay');

    if (menuToggle && mainNav && overlay) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('nav-active');
            menuToggle.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', () => {
            mainNav.classList.remove('nav-active');
            menuToggle.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Adiciona um listener para fechar o menu ao clicar em um item de navegação
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('nav-active');
                menuToggle.classList.remove('active');
                overlay.classList.remove('active');
            });
        });
    }
});