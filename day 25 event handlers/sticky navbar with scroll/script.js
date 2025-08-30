"use strict";

const startPoint = document.querySelector("#item1").getBoundingClientRect();
console.log(startPoint);

window.addEventListener("scroll", function () {
  if (this.scrollY >= startPoint.top) {
    document.querySelector(".nav").classList.add("sticky");
  } else {
    document.querySelector(".nav").classList.remove("sticky");
  }
});
