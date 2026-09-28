// Observa a entrada e saída dos elementos na tela.
const myObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");
        } else {

            entry.target.classList.remove("visible");
        }
    })
});
// Elementos observados
const elementos = document.querySelectorAll("");

elementos.forEach((Element) =>
    myObserver.observe(Element)
);