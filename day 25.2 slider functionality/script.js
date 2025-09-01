"use strict";

const slider = document.querySelector(".slider");

const slides = document.querySelectorAll(".slide");

const btn_left = document.querySelector(".btn--left");
const btn_right = document.querySelector(".btn--right");
slider.style.transform = "scale(0.5";

slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${100 * i}%)`;
});
let curSlide = 0;
const maxSlide = slides.length;

const goTOslide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};
goTOslide(0);
//next slide

btn_right.addEventListener("click", function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goTOslide(curSlide);
});

//previous slide

btn_left.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goTOslide(curSlide);
});
