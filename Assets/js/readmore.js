document.addEventListener('DOMContentLoaded', () => {

    const readMoreButtons = document.querySelectorAll('.read-more,.read-more-2,.read-more-3,.read-more-4');

    readMoreButtons.forEach((button, i) => {
        const item = button.closest('.list-footer,.list-footer2,.list-footer3,.list-footer4');
        const resposta = item && item.querySelector('.post-content');
        const pergunta = item && item.querySelector('.post-summary');

        // Liga o botão à resposta que ele controla (leitores de tela)
        if (resposta) {
            resposta.id = resposta.id || `resposta-faq-${i + 1}`;
            button.setAttribute('aria-controls', resposta.id);
        }

        // Clicar no texto da pergunta também abre/fecha (área de toque maior)
        if (pergunta) {
            pergunta.classList.add('pergunta-clicavel');
            pergunta.addEventListener('click', () => button.click());
        }

        button.addEventListener('click', () => {

            const post = button.closest('.list-footer,.list-footer2,.list-footer3,.list-footer4');
            const content = post && post.querySelector('.post-content');
            if (!content) return;

            content.classList.toggle('visible');

            const aberto = content.classList.contains('visible');

            button.textContent = aberto
                ? '▲' // ▲
                : '▼'; // ▼

            // Informa ao leitor de tela se a resposta está aberta
            button.setAttribute('aria-expanded', String(aberto));
            button.setAttribute('aria-label', aberto ? 'Ocultar resposta' : 'Mostrar resposta');
        });
    });
});
