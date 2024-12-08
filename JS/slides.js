const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
    // Remove 'active' class from the current slide
    slides[currentSlide].classList.remove('active');
    
    // Move to the next slide
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add 'active' class to the next slide
    slides[currentSlide].classList.add('active');
}

// Change slides every 3 seconds
setInterval(showNextSlide, 3000);