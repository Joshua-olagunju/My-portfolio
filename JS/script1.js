/* ========================
       Project.html Testimonial Section
   ======================== */
// Function to trigger the fade-in effect for testimonial2
function fadeInTestimonials2() {
    const testimonials2 = document.querySelectorAll('.testimonial2');

    testimonials2.forEach((testimonial2) => {
        if (testimonial2) {
            // Check if the testimonial2 is in view
            const rect = testimonial2.getBoundingClientRect();
            console.log('Testing visibility for testimonial2:', testimonial2);
            console.log('Top:', rect.top, 'Bottom:', rect.bottom);
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                console.log('Adding fade-in class to testimonial2:', testimonial2);
                // Add the class to animate it when in view
                testimonial2.classList.add('fade-in');
            } else {
                console.log('Removing fade-in class from testimonial2:', testimonial2);
                // Remove the fade-in class when the testimonial2 is out of view to reset the animation
                testimonial2.classList.remove('fade-in');
            }
        }
    });
}

// Run the fade-in effect for testimonial2 when the page loads and on scroll
window.addEventListener('load', fadeInTestimonials2);
window.addEventListener('scroll', fadeInTestimonials2);


/* ========================
       Project.html Section
   ======================== */

function zoomInProjects() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        // Check if the project card is in view
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            card.classList.add('zoom-in');
        } else {
            card.classList.remove('zoom-in');
        }
    });
}
// Run the zoom-in effect when the page loads and on scroll
window.addEventListener('load', zoomInProjects);
window.addEventListener('scroll', zoomInProjects);
/* ========================
       Project.html Backtotop Section
   ======================== */
// Function to show or hide the Back to Top button
function toggleBackToTop() {
    const backToTopButton = document.getElementById('backToTop2');
    
    // Check if the page is scrolled down more than 200px
    if (window.scrollY > 200) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

// Scroll back to top smoothly when clicked
document.getElementById('backToTop2').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Run the function when the page is loaded and on scroll
window.addEventListener('load', toggleBackToTop);
window.addEventListener('scroll', toggleBackToTop);
