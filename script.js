document.addEventListener("DOMContentLoaded", () => {
  // JavaScript code here
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    // Toggle the 'active' class on hamburger
    hamburger.classList.toggle("active");

    // Toggle the 'nav-active' class on navLinks
    navLinks.classList.toggle("nav-active");
  });
});
