// Hero sections
const messages = [
  "JOSHUA OLAGUNJU SOJI",
  "A Passionate Front-End Developer",
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



  
  const logos = document.querySelectorAll('.logo-container'); // Add dot here for class
  let currentIndex = 0;
  
  setInterval(() => {
    // Remove active class from all logos
    logos.forEach(logo => logo.classList.remove('active'));
  
    // Add active class to the current one
    logos[currentIndex].classList.add('active');
  
    // Move to the next logo
    currentIndex = (currentIndex + 1) % logos.length;
  }, 1000); // Change logo every 1 seconds
  
  

  const logos2 = document.querySelectorAll('.logo-container2'); // Ensure you have the correct class name
let currentIndex2 = 0;

setInterval(() => {
  // Remove active class from all logos
  logos2.forEach(logo2 => logo2.classList.remove('active'));

  // Add active class to the current one
  logos2[currentIndex2].classList.add('active');

  // Move to the next logo
  currentIndex2 = (currentIndex2 + 1) % logos2.length; // Use currentIndex2 to avoid mixing variables
}, 1000); // Change logo every 1 seconds (adjust this if needed)
