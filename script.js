// JavaScript for image slider (home page)
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
}

setInterval(showSlide, 3000);
showSlide();  // Initialize the first slide