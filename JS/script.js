const hero = document.getElementById('hero');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateX(0)';
        } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'translateX(-50px)';
        }
    });
}, { threshold: 0.3 });

observer.observe(hero);
/* Line two */
const aboutText = document.querySelector('#about-text');
const aboutImage = document.querySelector('#about-image');

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutText.style.opacity = 1;
            aboutText.style.transform = 'translateX(0)';
            aboutImage.style.opacity = 1;
            aboutImage.style.transform = 'translateX(0)';
        } else {
            aboutText.style.opacity = 0;
            aboutText.style.transform = 'translateX(-50px)';
            aboutImage.style.opacity = 0;
            aboutImage.style.transform = 'translateX(50px)';
        }
    });
}, { threshold: 0.3 });

aboutObserver.observe(aboutText);
aboutObserver.observe(aboutImage);
/*line three*/


/*line four */

/*line five*/

/*line six*/
// Function to trigger the fade-in effect for testimonials
function fadeInTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    
    testimonials.forEach((testimonial) => {
        // Check if the testimonial is in view
        const rect = testimonial.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            // Add the class to animate it when in view
            testimonial.classList.add('fade-in');
        } else {
            // Remove the fade-in class when the testimonial is out of view to reset the animation
            testimonial.classList.remove('fade-in');
        }
    });
}

// Run the fade-in effect when the page loads and on scroll
window.addEventListener('load', fadeInTestimonials);
window.addEventListener('scroll', fadeInTestimonials);
/*line seven*/
function fadeInCertifications() {
    const certifications = document.querySelectorAll('.certification');

    certifications.forEach((certification) => {
        const rect = certification.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            certification.classList.add('fade-in');
        } else {
            certification.classList.remove('fade-in');  // Remove when out of view
        }
    });
}

window.addEventListener('load', fadeInCertifications);
window.addEventListener('scroll', fadeInCertifications);

/*line eight */
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});



