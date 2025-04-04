document.addEventListener("click", function(event) {
    const menuToggle = document.getElementById("menu-toggle");
    const menuLabel = document.querySelector(".menu-label");
    const menu = document.querySelector(".menu");

    if (menuToggle.checked && !menu.contains(event.target) && !menuLabel.contains(event.target)) {
        menuToggle.checked = false;
    }
});
