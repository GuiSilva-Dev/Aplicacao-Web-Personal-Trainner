const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;

    const altura = parseFloat(
        document.getElementById('altura').value.replace(',', '.')
    );

    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== "" && altura !== "" && peso !== "") {
        const alturaCm = altura > 3 ? altura / 100 : altura; // Convertendo para cm se necessário
        const valorIMC = (peso / (alturaCm * alturaCm)).toFixed(2);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'Abaixo do peso.'

        } else if (valorIMC < 25) {

            classificacao = 'com peso ideal';
        } else if (valorIMC < 30) {

            classificacao = 'levemente acima do peso';
        } else if (valorIMC < 35) {

            classificacao = 'com obesidade grau 1';
        } else if (valorIMC < 40) {

            classificacao = 'com obesidade grau 2';
        } else {
            classificacao = 'com obesidade grau 3, Cuidado!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e voce esta ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos';
    }
}

calcular.addEventListener('click', imc);