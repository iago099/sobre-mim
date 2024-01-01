// zoomAndColorChange habilidades

document.addEventListener('DOMContentLoaded', () => {
    const skillsSections = document.querySelectorAll('#skills .skills-list h2, #skills .electricity-list h2');
    const skillsListItems = document.querySelectorAll('#skills .skills-list li, #skills .electricity-list li');

    // Adiciona o efeito para os h2
    skillsSections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.transition = 'transform 0.3s ease, color 0.3s ease';
            section.style.transform = 'scale(1.1)';
            section.style.color = 'blue'; // Cor azul quando passa o mouse
        });

        section.addEventListener('mouseleave', () => {
            section.style.transform = 'scale(1)';
            section.style.color = ''; // Retorna à cor original quando o mouse sai
        });
    });

    // Adiciona o efeito para os li
    skillsListItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transition = 'transform 0.3s ease, color 0.3s ease';
            item.style.transform = 'scale(1.1)';
            item.style.color = 'blue'; // Cor azul quando passa o mouse
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
            item.style.color = ''; // Retorna à cor original quando o mouse sai
        });
    });
});
// zoomAndColorChange contato

document.addEventListener('DOMContentLoaded', () => {
    const contactParagraphs = document.querySelectorAll('#contact p');

    contactParagraphs.forEach(paragraph => {
        paragraph.addEventListener('mouseenter', () => {
            paragraph.style.transition = 'transform 0.3s ease, color 0.3s ease';
            paragraph.style.transform = 'scale(1.1)';
            paragraph.style.color = 'blue'; // Cor azul quando passa o mouse
        });

        paragraph.addEventListener('mouseleave', () => {
            paragraph.style.transform = 'scale(1)';
            paragraph.style.color = ''; // Retorna à cor original quando o mouse sai
        });
    });
});
