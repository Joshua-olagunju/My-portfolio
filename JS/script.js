
// Hero sections pop Messages
const messages = [
  "Front-End Developer",
  "Creative UI/UX Designer"
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





// BackToTop Section
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

// Mobile Menu Section
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



// Skill Section Event listener Messages

function showSkill(sectionId) {
  // Hide all skill sections
  const sections = document.querySelectorAll('.skill-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  // Show the selected section
  document.getElementById(sectionId).style.display = 'block';

  // Remove 'active' class from all buttons
  const buttons = document.querySelectorAll('.skill-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Add 'active' class to the clicked button
  const clickedBtn = document.querySelector(`[data-skill="${sectionId}"]`);
  if (clickedBtn) {
    clickedBtn.classList.add('active');
  }
}

document.querySelectorAll("#toggleTheme, #toggleThemeMobile").forEach(btn => {
  btn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    const theme = document.body.classList.contains("light-mode") ? "light" : "dark";
    localStorage.setItem("theme", theme);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
  }
});



 const toggleBtn = document.getElementById("toggle-projects");
  const hiddenProjects = document.querySelectorAll(".extra-project");

  toggleBtn.addEventListener("click", () => {
    hiddenProjects.forEach((project) => {
      project.classList.toggle("d-none");
    });

    toggleBtn.textContent =
      toggleBtn.textContent === "Show Less" ? "Show More" : "Show Less";
  });

  