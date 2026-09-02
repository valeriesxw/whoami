/* ==========================================================================
   VALERIE SU — PORTFOLIO SCRIPT
   Beginner-friendly notes:
   - This file has two small jobs: open/close the mobile menu, and close that
     menu automatically after a link is clicked or the page is resized back
     to desktop width. There is no backend and no external API calls here.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {

  // ---- 1. Mobile navigation toggle ----
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");

  function closeMenu() {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    var isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  navToggle.addEventListener("click", toggleMenu);

  // Close the mobile menu once a visitor taps a link, so it doesn't stay open
  var navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // If the window is resized back up to desktop width, make sure the
  // mobile menu isn't left stuck open behind the scenes
  window.addEventListener("resize", function () {
    if (window.innerWidth > 700) {
      closeMenu();
    }
  });

  // ---- 2. Auto-update the copyright year in the footer ----
  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
