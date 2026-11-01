const calcular = document.getElementById('calcular');
const ctaIMC = document.getElementById('cta-imc'); // convite para falar com a personal após o resultado
const ctaIMCLink = document.getElementById('cta-imc-link');
const WHATS_IMC = 'https://wa.me/5511974895522?text=';

// Mostra ou esconde o CTA da calculadora
function mostrarCTA(mostrar, valorIMC) {
    if (!ctaIMC) return;
    ctaIMC.hidden = !mostrar;
    if (mostrar && ctaIMCLink) {
        // Mensagem pronta já com o IMC calculado
        const msg = `Olá, Janaina! Calculei meu IMC no site (${valorIMC}) e quero fazer minha avaliação física completa.`;
        ctaIMCLink.href = WHATS_IMC + encodeURIComponent(msg);
    }
}

// Converte o texto do campo em número (aceita vírgula ou ponto)
function lerNumero(id) {
    return parseFloat(
        document.getElementById(id).value.trim().replace(',', '.')
    );
}

// Classificação de acordo com a faixa do IMC
function classificarIMC(valorIMC) {
    if (valorIMC < 18.5) return 'abaixo do peso.';
    if (valorIMC < 25) return 'com peso ideal';
    if (valorIMC < 30) return 'levemente acima do peso';
    if (valorIMC < 35) return 'com obesidade grau 1';
    if (valorIMC < 40) return 'com obesidade grau 2';
    return 'com obesidade grau 3, Cuidado!';
}

function imc() {
    const nome = document.getElementById('nome').value.trim();
    const altura = lerNumero('altura');
    const peso = lerNumero('peso');
    const resultado = document.getElementById('resultado');
    mostrarCTA(false); // só volta a aparecer com um resultado válido

    // Validação com mensagens específicas
    if (nome === '' || isNaN(altura) || isNaN(peso)) {
        resultado.textContent = 'Preencha nome, altura e peso para calcular.';
        return;
    }

    const alturaM = altura > 3 ? altura / 100 : altura; // Convertendo para metros se vier em cm

    if (alturaM < 0.5 || alturaM > 2.5) {
        resultado.textContent = 'Altura inválida. Informe em centímetros (ex: 170) ou metros (ex: 1,70).';
        document.getElementById('altura').focus();
        return;
    }

    if (peso < 20 || peso > 400) {
        resultado.textContent = 'Peso inválido. Informe em quilos (ex: 70 ou 70,5).';
        document.getElementById('peso').focus();
        return;
    }

    const valorIMC = (peso / (alturaM * alturaM)).toFixed(2); // texto com 2 casas decimais
    const classificacao = classificarIMC(Number(valorIMC)); // classifica pelo mesmo valor exibido

    resultado.textContent = `${nome}, seu IMC é ${valorIMC.replace('.', ',')} e você está ${classificacao}`;
    mostrarCTA(true, valorIMC.replace('.', ','));
}

if (calcular) {
    calcular.addEventListener('click', imc);

    // Calcular ao apertar Enter em qualquer campo
    document.querySelectorAll('.container-imc input').forEach(campo => {
        campo.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                imc();
            }
        });
    });
}
