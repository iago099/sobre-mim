// carousel.js

// Função para avançar para o próximo slide
function nextSlide(projectId) {
    const carousel = document.querySelector(`#${projectId} .carousel`);
    const firstSlide = carousel.firstElementChild;

    // Adiciona a classe para iniciar a animação
    firstSlide.classList.add('slide-out');

    // Aguarda o término da animação e remove o primeiro slide do final
    setTimeout(() => {
        carousel.appendChild(firstSlide);
        firstSlide.classList.remove('slide-out');
    }, 500); // O mesmo valor que a duração da transição no CSS
}

// Configura um temporizador para avançar automaticamente os slides a cada 3 segundos (3000 milissegundos)
setInterval(() => nextSlide('project1'), 3000);
setInterval(() => nextSlide('project2'), 3000);
