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
document.addEventListener("DOMContentLoaded", () => {
  const cookieBannerId = "cookie-banner";
  const localStorageKey = "cookiesAccepted";

  // Check if cookies have already been accepted
  if (!localStorage.getItem(localStorageKey)) {
      showCookieBanner();
  }

  // Show the cookie banner
  function showCookieBanner() {
      const banner = document.getElementById(cookieBannerId);
      if (banner) {
          banner.style.display = "block";
      }
  }

  // Accept cookies and hide the banner
  const acceptButton = document.getElementById("accept-cookies");
  if (acceptButton) {
      acceptButton.addEventListener("click", () => {
          localStorage.setItem(localStorageKey, "true"); // Store acceptance in localStorage
          const banner = document.getElementById(cookieBannerId);
          if (banner) {
              banner.style.display = "none"; // Hide the banner
          }
      });
  }
});