// Hero sections
const messages = [
  "A Front-End Developer",
  "A Creative UI/UX Designer"
];

let index = 0;
const welcomeElement = document.getElementById("welcome");

// Immediately show the first message
welcomeElement.textContent = messages[index];

// Start the loop
setInterval(() => {
  index = (index + 1) % messages.length;
  welcomeElement.textContent = messages[index];
}, 2000); // 2 seconds interval


 


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



// Get all the links in the mobile menu
const menuLinks = document.querySelectorAll('.menu ul li a');

// Loop through the links and add event listeners
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Get the checkbox that controls the mobile menu
        const menuCheckbox = document.querySelector('.menu-checkbox');
        
        // Uncheck the checkbox to close the menu
        menuCheckbox.checked = false;
    });
});
