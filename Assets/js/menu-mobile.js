// Menu Lateral Mobile
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menuLateral = document.getElementById('menu-lateral');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuClose = document.getElementById('menu-close');
    const menuLinks = document.querySelectorAll('.menu-lateral-link');
    const body = document.body;
    if (!hamburgerMenu || !menuLateral) return;

    // Menu fechado não recebe foco pelo Tab
    menuLateral.setAttribute('inert', '');

    // Abre o menu
    function openMenu() {
        menuLateral.classList.add('active');
        if (menuOverlay) menuOverlay.classList.add('active');
        hamburgerMenu.classList.add('active');
        body.classList.add('menu-open');
        menuLateral.removeAttribute('inert');
        hamburgerMenu.setAttribute('aria-expanded', 'true');
        if (menuClose) menuClose.focus(); // leva o foco para dentro do menu
    }

    // Fecha o menu
    function closeMenu(devolverFoco = true) {
        menuLateral.classList.remove('active');
        if (menuOverlay) menuOverlay.classList.remove('active');
        hamburgerMenu.classList.remove('active');
        body.classList.remove('menu-open');
        menuLateral.setAttribute('inert', '');
        hamburgerMenu.setAttribute('aria-expanded', 'false');
        if (devolverFoco) hamburgerMenu.focus(); // devolve o foco ao botão
    }

    // Abrir pelo botão
    hamburgerMenu.addEventListener('click', function (e) {
        e.stopPropagation();
        openMenu();
    });

    // Fechar pelo botão
    if (menuClose) {
        menuClose.addEventListener('click', () => closeMenu());
    }

    // Fechar pelo overlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', () => closeMenu());
    }

    // Fechar ao navegar
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            closeMenu(false); // o foco segue para a seção escolhida
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
    // (compara com a posição do toque inicial: clientY sozinho é sempre positivo)
    let toqueInicialY = 0;
    menuLateral.addEventListener('touchstart', function (e) {
        toqueInicialY = e.touches[0].clientY;
    }, { passive: true });

    menuLateral.addEventListener('touchmove', function (e) {
        const deslocamento = e.touches[0].clientY - toqueInicialY; // > 0 puxando para baixo, < 0 para cima
        const noTopo = this.scrollTop === 0;
        const noFim = this.scrollHeight <= this.clientHeight + this.scrollTop;

        if ((noTopo && deslocamento > 0) || (noFim && deslocamento < 0)) {
            e.preventDefault();
        }
    }, { passive: false });
});

