"use strict";
//implementing smooth scrolling using for each looping
// document.querySelectorAll(".nav-link").forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const targetSection = document.querySelector(this.getAttribute("href"));
//     if (targetSection) {
//       targetSection.scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });

//--------------------------------------------------------------------------now using event propagation
//event propagation involves two techniques
//1- attach event the parent element of the clicked element
//2- select the target element (clicked element) and apply the event

document.querySelector(".nav-menu").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    const targetElement = document.querySelector(e.target.getAttribute("href"));
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  }
});
