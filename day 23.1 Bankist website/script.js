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

document.querySelector('btn--close-cookie').addEventListener('click',function(){
  message.remove();
})







