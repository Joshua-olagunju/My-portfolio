// Hero sections
const messages = [
    "JOSHUA OLAGUNJU",
    "A Passionate Front-End Developer",
    "A Creative UI/UX Designer"
  ];
  
  let index = 0; // Start at the first message
  
  // Initial message
  document.getElementById("welcome").textContent = messages[index];
  
  // Update the message every 3 seconds
  setInterval(() => {
    // Change the message
    document.getElementById("welcome").textContent = messages[index];

    // Update the index to the next message (looping back to 0 when at the end)
    index = (index + 1) % messages.length; // This makes the index loop
  }, 2000); // 2000ms = 2 seconds


  
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
