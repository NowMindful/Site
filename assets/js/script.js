document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded and running!");

  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");
  const menuOverlay = document.getElementById("menuOverlay");
  const body = document.body;

  menuToggle.addEventListener("click", () => {
    console.log("Menu toggle clicked!");
    const isMenuOpen = menu.classList.toggle("show");
    menuOverlay.classList.toggle("show");

    // Prevent scrolling when the menu is open
    body.style.overflow = isMenuOpen ? "hidden" : "auto";
  });
  // Close menu when clicking on the overlay
  menuOverlay.addEventListener("click", () => {
    menu.classList.remove("show");
    menuOverlay.classList.remove("show");
    body.style.overflow = "auto"; // Restore scrolling
  });
});
  