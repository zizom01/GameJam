const navbar = document.querySelector('.navbar');
const toggleButton = document.querySelector('.toggle-button');

// Function to handle navbar visibility based on scroll position and screen width
function updateNavbarVisibility() {
    if (window.scrollY >= 20 || window.innerWidth < 700) { // Show if scrolled down or on small screens
        navbar.classList.add('visible');
    } else if (!navbar.classList.contains('active')) {
        navbar.classList.remove('visible');
    }
}

// Initial check on page load
updateNavbarVisibility();

// Event listeners for scroll and resize
window.addEventListener('scroll', updateNavbarVisibility);
window.addEventListener('resize', updateNavbarVisibility);

// Toggle the mobile menu when the toggle button is clicked
toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
