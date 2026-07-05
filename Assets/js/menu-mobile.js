// Menu Lateral Mobile
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menuLateral = document.getElementById('menu-lateral');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuClose = document.getElementById('menu-close');
    const menuLinks = document.querySelectorAll('.menu-lateral-link');
    const body = document.body;

    // Função para abrir o menu
    function openMenu() {
        menuLateral.classList.add('active');
        menuOverlay.classList.add('active');
        hamburgerMenu.classList.add('active');
        body.classList.add('menu-open');
    }

    // Função para fechar o menu
    function closeMenu() {
        menuLateral.classList.remove('active');
        menuOverlay.classList.remove('active');
        hamburgerMenu.classList.remove('active');
        body.classList.remove('menu-open');
    }

    // Abrir menu ao clicar no botão hamburger
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function (e) {
            e.stopPropagation();
            openMenu();
        });
    }

    // Fechar menu ao clicar no botão fechar
    if (menuClose) {
        menuClose.addEventListener('click', closeMenu);
    }

    // Fechar menu ao clicar no overlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }

    // Fechar menu ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            closeMenu();
            // Scroll suave para a seção
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    setTimeout(() => {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 300);
                }
            }
        });
    });

    // Fechar menu ao pressionar ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menuLateral.classList.contains('active')) {
            closeMenu();
        }
    });

    // Prevenir scroll quando menu está aberto
    menuLateral.addEventListener('touchmove', function (e) {
        if (this.scrollTop === 0 && e.touches[0].clientY > 0) {
            e.preventDefault();
        }
        if (this.scrollHeight <= this.clientHeight + this.scrollTop && e.touches[0].clientY < 0) {
            e.preventDefault();
        }
    }, { passive: false });
});

