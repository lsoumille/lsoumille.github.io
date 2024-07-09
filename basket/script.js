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
