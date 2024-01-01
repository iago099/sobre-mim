// zoomAnimation.js

document.addEventListener('DOMContentLoaded', () => {
    const profilePicture = document.querySelector('.profile-picture');

    profilePicture.addEventListener('mouseenter', () => {
        profilePicture.style.transition = 'transform 0.3s ease';
        profilePicture.style.transform = 'scale(1.1)';
    });

    profilePicture.addEventListener('mouseleave', () => {
        profilePicture.style.transform = 'scale(1)';
    });
});

// zoomAnimation.js

document.addEventListener('DOMContentLoaded', () => {
    const headerContent = document.querySelector('.header-content');
    const headerTitle = document.querySelector('.header-content h1');

    // Adiciona o efeito à div .header-content
    headerContent.addEventListener('mouseenter', () => {
        headerContent.style.transition = 'transform 0.3s ease';
        headerContent.style.transform = 'scale(1.1)';
    });

    headerContent.addEventListener('mouseleave', () => {
        headerContent.style.transform = 'scale(1)';
    });

    // Adiciona o efeito ao título h1 dentro da .header-content
    headerTitle.addEventListener('mouseenter', () => {
        headerTitle.style.transition = 'transform 0.3s ease';
        headerTitle.style.transform = 'scale(1.1)';
    });

    headerTitle.addEventListener('mouseleave', () => {
        headerTitle.style.transform = 'scale(1)';
    });
});
// zoomAnimation sobre

document.addEventListener('DOMContentLoaded', () => {
    const skillsTitle = document.querySelector('#about h2');

    skillsTitle.addEventListener('mouseenter', () => {
        skillsTitle.style.transition = 'transform 0.3s ease';
        skillsTitle.style.transform = 'scaleX(1.1)';
    });

    skillsTitle.addEventListener('mouseleave', () => {
        skillsTitle.style.transform = 'scaleX(1)';
    });
});

// zoomAnimation lista

document.addEventListener('DOMContentLoaded', () => {
    const skillsTitle = document.querySelector('.skills-list h2');

    skillsTitle.addEventListener('mouseenter', () => {
        skillsTitle.style.transition = 'transform 0.3s ease';
        skillsTitle.style.transform = 'scaleX(1.1)';
    });

    skillsTitle.addEventListener('mouseleave', () => {
        skillsTitle.style.transform = 'scaleX(1)';
    });
});
// zoomAnimation projeto

document.addEventListener('DOMContentLoaded', () => {
    const projectsTitle = document.querySelector('#projects h2');

    projectsTitle.addEventListener('mouseenter', () => {
        projectsTitle.style.transition = 'transform 0.3s ease';
        projectsTitle.style.transform = 'scaleX(1.1)';
    });

    projectsTitle.addEventListener('mouseleave', () => {
        projectsTitle.style.transform = 'scaleX(1)';
    });
});
// zoomAnimation contato

document.addEventListener('DOMContentLoaded', () => {
    const contactTitle = document.querySelector('#contact h2');

    contactTitle.addEventListener('mouseenter', () => {
        contactTitle.style.transition = 'transform 0.3s ease';
        contactTitle.style.transform = 'scaleX(1.1)';
    });

    contactTitle.addEventListener('mouseleave', () => {
        contactTitle.style.transform = 'scaleX(1)';
    });
});
