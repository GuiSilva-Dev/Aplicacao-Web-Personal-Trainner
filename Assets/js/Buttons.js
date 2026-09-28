document.addEventListener('DOMContentLoaded', function () {

    if (window.location.hash !== "") {
        window.location.hash = '';
    }

    // Botão voltar ao topo
    const BackUpButton = document.getElementById('BackUpButton');

    function backButton() {
        const scrollPosition = window.scrollY;
        if (
            scrollPosition > 100
        ) {
            BackUpButton.style.display = 'flex';
            setTimeout(() => {
                BackUpButton.style.opacity = '1';
            }, 10);
        } else {
            BackUpButton.style.opacity = '0';//botão começa a sumir.
            setTimeout(() => {
                BackUpButton.style.display = 'none';
            },)
        }
    }

    document.addEventListener('scroll', backButton);

    BackUpButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

// Botão WhatsApp
const btnWhats = document.getElementById('btnWhats');

// Controla a visibilidade do botão
function whats() {
    const scrollPosition = window.scrollY;
    if( scrollPosition > 100){
        btnWhats.style.display = 'flex';
        setTimeout(() => {
            btnWhats.style.opacity = '1';
        }, 10);
    }else{
        btnWhats.style.opacity = '0';
        setTimeout(() => {
            btnWhats.style.display = 'none';
        },)
    }
}
// Abre a conversa no WhatsApp
document.addEventListener('scroll', whats);

btnWhats.addEventListener('click', function (){
    window.location.href =  'https://wa.me/5511974895522'
});
});