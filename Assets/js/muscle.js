// Exercícios por grupo muscular
const exercises = {

  chest: [
    { name: "Supino reto", img: "https://www.hipertrofia.org/blog/wp-content/uploads/2023/09/smith-bench-press.gif" },
    { name: "Flexão de braço", img: "https://treinototal.com.br/wp-content/uploads/2023/04/flexao-de-bracos.gif" },
    { name: "Crucifixo com halteres", img: "https://www.hipertrofia.org/blog/wp-content/uploads/2023/09/dumbbell-fly.gif" }
  ],
  back: [
    { name: "Puxada na barra", img: "https://www.hipertrofia.org/blog/wp-content/uploads/2019/05/cable-pulldown.gif" },
    { name: "Remada curvada", img: "https://i.pinimg.com/originals/67/c3/58/67c35807d2d249e637724d60ad07e400.gif" },
    { name: "Pulldown", img: "https://www.hipertrofia.org/blog/wp-content/uploads/2019/05/pulldown.gif" }
  ],
  biceps: [
    { name: "Rosca direta", img: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/biceps-rosca-biceps-no-banco-scott-com-barra-W.gif" },
    { name: "Rosca martelo", img: "https://www.hipertrofia.org/blog/wp-content/uploads/2023/04/dumbbell-hammer-curl-v-2.gif" },
    { name: "Barra fixa supinada", img: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/rosca-direta-com-barra-e-pegada-fechada.gif" }
  ],
  triceps: [
    { name: "Tríceps pulley", img: "https://media.tenor.com/GpvUxIvyOZ0AAAAM/tr%C3%ADceps-pulley-corda.gif" },
    { name: "Mergulho em banco", img: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/triceps-no-banco.gif" },
    { name: "Tricéps testa", img: "https://i.pinimg.com/originals/e1/cb/f3/e1cbf337b41701d1c91e7ed4354542f2.gif" }
  ],
  legs: [
    { name: "Agachamento", img: "https://www.hipertrofia.org/blog/wp-content/uploads/2017/11/smith-full-squat.gif" },
    { name: "Leg press", img: "https://i.pinimg.com/originals/6e/77/3d/6e773d8f6913a93bf2a3e3d31e1e3f0f.gif" },
    { name: "Cadeira extensora", img: "https://treinototal.com.br/wp-content/uploads/2024/03/cadeira-extensora-como-fazer.gif" }
  ],
  shoulders: [
    { name: "Elevação lateral", img: "https://www.hipertrofia.org/blog/wp-content/uploads/2023/11/dumbbell-lateral-raise.gif" },
    { name: "Desenvolvimento com halteres", img: "https://image.tuasaude.com/media/article/ne/ga/exercicio-para-ombro_73965.gif?width=686&height=487" },
    { name: "Desenvolvimento com halteres", img: "https://www.hipertrofia.org/blog/wp-content/uploads/2024/05/Face-Pull.gif" }
  ],
  abs: [
    { name: "Abdominal crunch", img: "https://www.hipertrofia.org/blog/wp-content/uploads/2017/09/abdominal-remador.gif" },
    { name: "Prancha", img: "https://i.pinimg.com/736x/6b/4c/96/6b4c966a7df06403f18fdf05385563aa.jpg" },
    { name: "elevação de pernas", img: "https://www.hipertrofia.org/blog/wp-content/uploads/2017/09/captains-chair-straight-leg-raise.gif" }

  ]

};
// Elementos da interface
const listEl = document.getElementById('list');
const btn = document.getElementById('load');
const select = document.getElementById('muscle');

// Exibe os exercícios selecionados
function showExercises(muscle) {
  const arr = exercises[muscle];
  if (!arr || arr.length === 0) {
    listEl.innerHTML = "Nenhum exercício encontrado para esse músculo.";
    return;
  }

  listEl.innerHTML = arr.map(e => `
    <div class="gif">
      <strong>${e.name}</strong><br/>
      ${e.img ? `<img src="${e.img}" alt="${e.name}"/>` : ''}
    </div>
  `).join('');
}

// Carrega os exercícios selecionados
btn.addEventListener('click', () => showExercises(select.value));

// Exibe o grupo inicial
showExercises(select.value); 