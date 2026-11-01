const modal = document.getElementById('modal-container')
let ultimoFoco = null // elemento que abriu o modal, para devolver o foco ao fechar

function openModal() {
    ultimoFoco = document.activeElement
    modal.classList.add('mostrar')

    // Foca o primeiro campo para o usuário já começar a digitar
    const primeiroCampo = modal.querySelector('input')
    if (primeiroCampo) {
        setTimeout(() => primeiroCampo.focus(), 50)
    }
}

function closeModal() {
    modal.classList.remove('mostrar')
    localStorage.fechaModal = 'modal-container'
    if (ultimoFoco) {
        ultimoFoco.focus()
    }
}

// Fecha ao clicar fora ou no botão X (registrado uma única vez)
modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.closest('#fechar')) {
        closeModal()
    }
})

// Fecha com Escape e mantém o Tab dentro do modal
document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('mostrar')) return

    if (e.key === 'Escape') {
        closeModal()
    }

    if (e.key === 'Tab') {
        const focaveis = modal.querySelectorAll('button:not([disabled]), input, textarea')
        const primeiro = focaveis[0]
        const ultimo = focaveis[focaveis.length - 1]

        if (e.shiftKey && document.activeElement === primeiro) {
            e.preventDefault()
            ultimo.focus()
        } else if (!e.shiftKey && document.activeElement === ultimo) {
            e.preventDefault()
            primeiro.focus()
        }
    }
})


// Validação dos campos do formulário (as cores de foco/erro ficam no style.css)
const buttonSent = document.getElementById('enviar')
const formContato = buttonSent.closest('form')
const campos = formContato.querySelectorAll('input, textarea')

// Libera o botão ENVIAR só quando todos os campos estiverem válidos
function validarFormulario() {
    buttonSent.disabled = !formContato.checkValidity()
}

campos.forEach(campo => {
    // Ao sair do campo: marca como inválido se estiver vazio ou errado (ex: e-mail)
    campo.addEventListener('blur', () => {
        if (!campo.checkValidity()) {
            campo.setAttribute('aria-invalid', 'true')
        } else {
            campo.removeAttribute('aria-invalid')
        }
    })

    campo.addEventListener('input', validarFormulario)
})

validarFormulario()
