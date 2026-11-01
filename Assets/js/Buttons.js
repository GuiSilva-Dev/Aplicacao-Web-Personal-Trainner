document.addEventListener('DOMContentLoaded', function () {

    const BackUpButton = document.getElementById('BackUpButton'); // Botão voltar ao topo
    const btnWhats = document.getElementById('btnWhats'); // Botão WhatsApp
    if (!BackUpButton || !btnWhats) return;

    const DURACAO_FADE = 500; // mesmo tempo da transição de opacity do .button-fixed no style.css
    let visivel = null; // guarda o estado atual para não mexer no DOM a cada scroll

    // Mostra ou esconde um botão flutuante com efeito de fade
    function alternarBotao(botao, mostrar) {
        if (mostrar) {
            botao.style.display = 'flex';
            setTimeout(() => {
                botao.style.opacity = '1';
            }, 10);
        } else {
            botao.style.opacity = '0'; // botão começa a sumir
            setTimeout(() => {
                if (!visivel) botao.style.display = 'none'; // só some se continuar no topo
            }, DURACAO_FADE);
        }
    }

    // Controla a visibilidade dos dois botões
    function atualizarBotoes(scrollPosition) {
        const mostrar = scrollPosition > 100;
        if (mostrar === visivel) return; // nada mudou, não faz nada
        visivel = mostrar;

        alternarBotao(BackUpButton, mostrar);
        alternarBotao(btnWhats, mostrar);
    }

    // Um único listener de scroll (passivo), limitado a 1 vez por frame
    let agendado = false;
    function aoRolar() {
        if (agendado) return;
        agendado = true;
        requestAnimationFrame(() => {
            atualizarBotoes(window.scrollY); // lê o scroll uma vez só
            agendado = false;
        });
    }
    document.addEventListener('scroll', aoRolar, { passive: true });
    aoRolar(); // estado inicial (ex: página aberta já rolada por um link #secao)

    // Volta ao topo
    BackUpButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Abre a conversa no WhatsApp já com uma mensagem pronta
    const MSG_WHATS = 'Olá, Janaina! Vim pelo site e quero saber mais sobre a consultoria.';
    btnWhats.addEventListener('click', function () {
        window.open('https://wa.me/5511974895522?text=' + encodeURIComponent(MSG_WHATS), '_blank', 'noopener'); // nova aba, sem sair do site
    });
    // Os botões flutuantes são <button>, então Enter e Espaço já funcionam pelo teclado
});
