"use strict ";
//=======================================addAdjacentHtml is a method which adds corresponding  html to the page main content
const initial = document.querySelector(".initial");
const Adjacent = document.querySelector(".Adjacent");
const create = document.querySelector(".create");
initial.classList.remove("initial--hidden");

document.querySelector("#html").addEventListener("click", function () {
  initial.classList.add("initial--hidden");
  create.classList.add("create--hidden");
  Adjacent.classList.remove("hidden");
});
//----------------------------------beforeBegin------------------
const beforeBegin = function () {
  const html = ` <div id="adjacentHtml"> <p>THis is how it look when you insert it before start</p></div>`;
  Adjacent.insertAdjacentHTML("beforebegin", html);
};
//----------------------------------AfterBegin------------------
const AfterBegin = function () {
  const html = ` <div id="adjacentHtml"> <p>THis is how it look when you insert it After start</p></div>`;
  Adjacent.insertAdjacentHTML("afterbegin", html);
};
//----------------------------------beforeEnd------------------
const beforeEnd = function () {
  const html = ` <div id="adjacentHtml"> <p>THis is how it look when you insert it before end</p></div>`;
  Adjacent.insertAdjacentHTML("beforeend", html);
};
//----------------------------------After end------------------
const AfterEnd = function () {
  const html = ` <div id="adjacentHtml"> <h4>THis is how it look when you insert it After End</h4></div>`;
  Adjacent.insertAdjacentHTML("afterend", html);
};
document.getElementById("beforeStart").addEventListener("click", beforeBegin);
document.querySelector("#afterStaRT").addEventListener("click", AfterBegin);
document.querySelector("#beforeEnd").addEventListener("click", beforeEnd);
document.querySelector("#afterEnd").addEventListener("click", AfterEnd);

//-------------------------------------------------creating Elements-------------------------------------

document.querySelector("#create").addEventListener("click", function () {
  initial.classList.add("initial--hidden");
  Adjacent.classList.add("hidden");
  create.classList.remove("create--hidden");
});
//------------------------------Pre pend--------------------
document.querySelector("#Prepend").addEventListener("click", function () {
  const newElement = document.createElement("div");
  newElement.innerHTML = `<h4>This is how when new element is prepended to the main</h4>`;
  newElement.style.border = "1px solid black";
  newElement.style.textAlign = "center";
  newElement.style.backgroundColor = "blue";
  newElement.style.color = "white";
  newElement.style.margin = "10px";
  create.prepend(newElement);
});

//--------------------------------Apend ---------------------
document.querySelector("#Apend").addEventListener("click", function () {
  const newElement = document.createElement("div");
  newElement.innerHTML = `<h4>This is how when new element is Apended to the main</h4>`;
  newElement.style.border = "1px solid black";
  newElement.style.textAlign = "center";
  newElement.style.backgroundColor = "blue";
  newElement.style.color = "white";
  newElement.style.margin = "10px";
  create.append(newElement);
});

//----------------------------------before ---------------
document.querySelector("#before").addEventListener("click", function () {
  const newElement = document.createElement("div");
  newElement.innerHTML = `<h4>This is how when new element is added before the main</h4>`;
  newElement.style.border = "1px solid black";
  newElement.style.textAlign = "center";
  newElement.style.backgroundColor = "blue";
  newElement.style.color = "white";
  newElement.style.margin = "10px";
  create.before(newElement);
});
//-----------------------------------after----------------
document.querySelector("#after").addEventListener("click", function () {
  const newElement = document.createElement("div");
  newElement.innerHTML = `<h4>This is how when new element is added After the main</h4>`;
  newElement.style.border = "1px solid black";
  newElement.style.textAlign = "center";
  newElement.style.backgroundColor = "blue";
  newElement.style.color = "white";
  newElement.style.margin = "10px";
  create.after(newElement);
});

//----------------------------------------------------------------------------delete Element-------------------------------------------
document.querySelector("#delete").addEventListener("click", function () {
  document.querySelector("header").remove();
});
