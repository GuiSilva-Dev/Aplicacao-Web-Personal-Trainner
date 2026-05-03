# Projeto Personal Trainer - Janaina Santos 🏋️‍♀️💪

Uma *landing page* interativa e responsiva desenvolvida para uma Personal Trainer. Este projeto foca-se na apresentação de serviços de treino personalizado, incorporando ferramentas úteis para os utilizadores, como uma calculadora de Índice de Massa Corporal (IMC) e sugestões de exercícios divididos por grupos musculares.

## 🚀 Funcionalidades

* **Calculadora de IMC:** Permite ao utilizador inserir o nome, peso e altura para descobrir o seu IMC e a respetiva classificação de saúde.
* **Guia de Exercícios:** Uma secção dinâmica que exibe GIFs e nomes de exercícios com base no grupo muscular selecionado (peito, costas, bíceps, abdominal, etc.).
* **Design Responsivo:** Interface adaptável a diferentes tamanhos de ecrã, incluindo um menu lateral (*hamburger menu*) para navegação mobile.
* **Animações de Scroll:** Elementos visuais que surgem suavemente à medida que o utilizador faz *scroll* na página (utilizando a biblioteca AOS e a API `IntersectionObserver`).
* **Acessibilidade e Usabilidade:** * Botão "Voltar ao Topo" dinâmico.
    * Botão flutuante de contacto rápido via WhatsApp.
    * Funcionalidade "Ler mais / Ler menos" para otimizar o espaço dos textos longos.
    * Modais interativos para apresentação de informações adicionais.

## 🛠️ Tecnologias e Ferramentas Utilizadas

* **HTML5:** Estruturação semântica da página.
* **CSS3:** Estilização personalizada, utilização de variáveis CSS (`:root`) para consistência da paleta de cores e personalização da barra de *scroll*.
* **JavaScript (ES6+):** Lógica da aplicação dividida em módulos para melhor organização e manutenção.
* **Tailwind CSS:** Utilizado via CDN para classes utilitárias e agilização do desenvolvimento.
* **AOS (Animate On Scroll):** Biblioteca externa para animações de entrada de elementos.
* **Bootstrap Icons:** Biblioteca de ícones vetoriais.

## 📁 Estrutura de Ficheiros

A lógica JavaScript foi modularizada para manter o código limpo e organizado:

* `index.html`: Ficheiro principal que contém a estrutura da página.
* `style.css`: Folha de estilos principal do projeto.
* `imc.js`: Lógica matemática e de validação para a calculadora de IMC.
* `muscle.js`: Base de dados local (objetos JS) e lógica para renderizar os exercícios por grupo muscular.
* `Buttons.js`: Controlo de visibilidade e comportamento dos botões flutuantes (WhatsApp e Voltar ao Topo).
* `menu-mobile.js`: Lógica de abertura, fecho e comportamento do menu de navegação em dispositivos móveis.
* `modal.js`: Comportamento de abertura e fecho das janelas modais, além de efeitos visuais nos *inputs* de formulários.
* `readmore.js`: Alternância de visibilidade para textos longos nos cartões de informação.
* `Scroll..js`: Implementação do `IntersectionObserver` para gatilhos de animação baseados no *scroll* nativo.

## 💻 Como executar o projeto localmente

Como este é um projeto *frontend* estático, não requer a instalação de dependências complexas ou de um servidor *backend*.

1. Certifica-te de que tens o [Git](https://git-scm.com/) instalado.
2. Clona este repositório para a tua máquina local:
   ```bash
   git clone [https://github.com/O_TEU_NOME_DE_UTILIZADOR/NOME_DO_REPOSITORIO.git](https://github.com/O_TEU_NOME_DE_UTILIZADOR/NOME_DO_REPOSITORIO.git)
