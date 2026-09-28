// Menu Lateral Mobile
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menuLateral = document.getElementById('menu-lateral');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuClose = document.getElementById('menu-close');
    const menuLinks = document.querySelectorAll('.menu-lateral-link');
    const body = document.body;

    // Abre o menu
    function openMenu() {
        menuLateral.classList.add('active');
        menuOverlay.classList.add('active');
        hamburgerMenu.classList.add('active');
        body.classList.add('menu-open');
    }

    // Fecha o menu
    function closeMenu() {
        menuLateral.classList.remove('active');
        menuOverlay.classList.remove('active');
        hamburgerMenu.classList.remove('active');
        body.classList.remove('menu-open');
    }

    // Abrir pelo botão
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function (e) {
            e.stopPropagation();
            openMenu();
        });
    }

    // Fechar pelo botão
    if (menuClose) {
        menuClose.addEventListener('click', closeMenu);
    }

    // Fechar pelo overlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }

    // Fechar ao navegar
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            closeMenu();
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

    // Fechar com Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menuLateral.classList.contains('active')) {
            closeMenu();
        }
    });

    // Evitar rolagem além dos limites do menu
    menuLateral.addEventListener('touchmove', function (e) {
        if (this.scrollTop === 0 && e.touches[0].clientY > 0) {
            e.preventDefault();
        }
        if (this.scrollHeight <= this.clientHeight + this.scrollTop && e.touches[0].clientY < 0) {
            e.preventDefault();
        }
    }, { passive: false });
});

