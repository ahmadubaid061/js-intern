"use strict";

//-------------------------------------------------------------------------------------------------------------------------Modal window----------------------------------

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
//-------------------------------------------------------------------------------------------------------------------creatiing Element   (cookie-message)-----------------
const message=document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML="we use cookie for improved functionality <button class='btn btn--close-cookie'>Got it!</button>";

//----------------------------------appending the message element to header
document.querySelector("header").append(message);

//-----------------------------------now removing the cookie message by click

document.querySelector('.btn--close-cookie').addEventListener('click',function(){
  message.remove();
})
//---------------------------------------------------------------------------------------------------------------implementing sticky navigationbar--------------------------
window.addEventListener("scroll", function () {
  const startPoint = section1.getBoundingClientRect();
  console.log(startPoint);
  console.log("this.top", startPoint.top);
  console.log("window.scroll", this.scrollY);
  if (this.scrollY >= startPoint.top) {
    navContainer.classList.add("sticky");
  } else {
    navContainer.classList.remove("sticky");
  }
});
//-----------------------------------------------------------------------------------------------------------------Implementing Smooth scroll-----------------------------
const buttonScrollto = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
buttonScrollto.addEventListener("click", function () {
  section1.scrollIntoView({ behavior: "smooth" });
});

//----------------------------------------------------------------------------------------------------------------implementing tabbed operations-------------------------
const tabs = document.querySelectorAll(".operations__tab");
console.log(tabs);
const tabContainer = document.querySelector(".operations__tab-container");
console.log(tabContainer);
const tabcontent = document.querySelectorAll(".operations__content");
console.log(tabcontent);
//attaching event to tabcontainer(parent element)using event delegation instead of foreach method
tabContainer.addEventListener("click", function (e) {
  const clickedBtn = e.target.closest(".operations__tab");
  //checking if we clicked on a button or just empty space
  if (!clickedBtn) return;
  //clicked is a button
  //first remove active class from all the buttons
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  //now add the active class to the clcicked button
  clickedBtn.classList.add("operations__tab--active");

  //===========================================================================Now changing the content below the buttons===========
  //-- class="operations__content operations__content--1 operations__content--active"
  //we have to change the operation__content--{dynamically } and attach the active vclass to the clicked one
  tabcontent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );
  console.log(clickedBtn.dataset.tab);
  document
    .querySelector(`.operations__content--${clickedBtn.dataset.tab}`)
    .classList.add("operations__content--active");
});

//-----------------------------------------------------------------------------------------------Implementing nav btns fading on hover-------------------------------
// const navContainer = document.querySelector(".nav");
// //--------------mouse enters

// navContainer.addEventListener("mouseover", function (e) {
//   if (e.target.classList.contains("nav__link")) {
//     const hovered = e.target;
//     console.log(hovered);
//     const siblings = hovered.closest(".nav").querySelectorAll(".nav__link");
//     console.log(siblings);
//     const logo = hovered.closest(".nav").querySelector("img");
//     siblings.forEach((item) => {
//       if (item !== hovered) item.style.opacity = 0.5;
//     });
//     logo.style.opacity = 0.5;
//   }
// });
// //-----------------mouse leaves
// navContainer.addEventListener("mouseout", function (e) {
//   if (e.target.classList.contains("nav__link")) {
//     const hovered = e.target;
//     console.log(hovered);
//     const siblings = hovered.closest(".nav").querySelectorAll(".nav__link");
//     console.log(siblings);
//     const logo = hovered.closest(".nav").querySelector("img");
//     siblings.forEach((item) => {
//       if (item !== hovered) item.style.opacity = 1;
//     });
//     logo.style.opacity = 1;
//   }
// });
 //------------------------------------there was so much repeatition so i need seperate function handle varibales and effects for both events

// const navContainer = document.querySelector(".nav");
// //------------------the function
// const handleHover = function (e, opacity) {
//   if (e.target.classList.contains("nav__link")) {
//     const hovered = e.target;
//     console.log(hovered);
//     const siblings = hovered.closest(".nav").querySelectorAll(".nav__link");
//     console.log(siblings);
//     const logo = hovered.closest(".nav").querySelector("img");
//     siblings.forEach((item) => {
//       if (item !== hovered) item.style.opacity = opacity;
//     });
//     logo.style.opacity = opacity;
//   }
// };
// //--------------mouse enters
// navContainer.addEventListener("mouseover", function (e) {
//   handleHover(e, 0.5);
// });
// //-----------------mouse leaves
// navContainer.addEventListener("mouseout", function (e) {
//   handleHover(e, 1);
// });
//-------------------------------------------------------------Now doing the above process using bind method

const navContainer = document.querySelector(".nav");

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const hovered = e.target;
    console.log(hovered);
    const siblings = hovered.closest(".nav").querySelectorAll(".nav__link");
    console.log(siblings);
    const logo = hovered.closest(".nav").querySelector("img");
    siblings.forEach((item) => {
      if (item !== hovered) item.style.opacity = this;
      //the this keyword is the opacity value defined inside bind method
    });
    logo.style.opacity = this;
  }
};
//--------------mouse enters
navContainer.addEventListener("mouseover", handleHover.bind(0.5));
//the bind method will return a copy of the handleHover function with an additional argument for opacity
//-----------------mouse leaves
navContainer.addEventListener("mouseout", handleHover.bind(1));







