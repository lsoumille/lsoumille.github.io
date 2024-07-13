// JavaScript pour le carousel des membres
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;

    function showSlide(index) {
        const slides = carousel.children;
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = i === index ? 'block' : 'none';
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Change de slide toutes les 3 secondes
    showSlide(currentIndex);
});

// JavaScript pour le menu de navigation
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les liens du menu
    const menuLinks = document.querySelectorAll('li a[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Empêcher le comportement par défaut
            const targetId = this.getAttribute('href'); // Obtenir l'ID de la section cible
            const targetSection = document.querySelector(targetId);

            // Calculer la position de la section cible
            const topOffset = targetSection.offsetTop;

            // Défiler vers la section cible avec une animation
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });

            document.getElementById("menu-btn").checked = false;
        });
    });
});