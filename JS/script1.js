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
