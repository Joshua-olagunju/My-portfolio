document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.querySelector(".menu");
    const menuLabel = document.querySelector(".menu-label");

    document.addEventListener("click", function (event) {
        // Check if the click is outside the menu and the menu label (☰ button)
        if (
            menuToggle.checked && // Only run if the menu is open
            !menu.contains(event.target) && 
            !menuLabel.contains(event.target)
        ) {
            menuToggle.checked = false; // Close the menu
        }
    });
});
