function openModal() {
    const modal = document.getElementById('modal-container')
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'modal-container' || e.target.id == "fechar") {
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container'
        }
    })
}


// Destaque dos campos do formulário
const buttonSent = document.getElementById('enviar')
const campos = document.querySelectorAll("form input, form textarea");

campos.forEach(campo => {
    campo.addEventListener("focus", () => {
        campo.style.border = "2px solid #06d6a0";
        campo.style.outline = "none"; // tira o contorno padrão
    });

    campo.addEventListener("blur", () => {
        if (campo.value.trim() === "" ) { // verifica se o campo está vazio ou se é um número
        campo.style.border = "1px solid #e20808"; // volta ao normal
        } else {
        campo.style.border = "1px solid #ccc"; // volta ao normal
        } 
    });
});

