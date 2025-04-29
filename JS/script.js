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
  