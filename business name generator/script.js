"Use Strict";
let adjective;
let postfix;
let business;

let output = document.querySelector("#output");
let reset = document.querySelector(".reset");
let submit = document.querySelector(".submit");
let first, middle, last;
let initial = function () {
  reset.classList.add("hidden");
};
let generateRandom = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
submit.addEventListener("click", function (e) {
  e.preventDefault();
  adjective = document.querySelector(".adjective").value;
  business = document.querySelector(".business").value;
  postfix = document.querySelector(".postfix").value;

  if (!adjective || !postfix || !business) {
    output.textContent = "please provide valid details!";
  }

  let random = generateRandom();

  if (random < 4) {
    first = capitalize(adjective.slice(0, 1));
    middle = business.slice(0, 1).toLowerCase();
    last = capitalize(postfix.slice(0));
    output.style.fontStyle = "italic";
    output.style.color = "#8e44ad"; // purple
    output.style.textTransform = "none";
  } else if (random >= 4 && random < 8) {
    first = capitalize(adjective.slice(0, 5));
    middle = business.slice(0, 2).toUpperCase();
    last = capitalize(postfix.slice(0, 2));
    output.style.fontWeight = "bold";
    output.style.color = "#16a085"; // teal
    output.style.textTransform = "none";
  } else if (random >= 8 && random < 12) {
    first = capitalize(adjective.slice(0, 6));
    middle = business.slice(0); // full
    last = capitalize(postfix.slice(0, 5));
    output.style.textTransform = "uppercase";
    output.style.color = "#e67e22"; // orange
  } else if (random >= 12 && random < 15) {
    first = adjective.toUpperCase().slice(0, 4);
    middle = business.slice(0, 2);
    last = postfix.toLowerCase().slice(0, 5);
    output.style.fontStyle = "oblique";
    output.style.color = "#2980b9"; // blue
  } else if (random >= 15 && random < 18) {
    first = capitalize(adjective.slice(-4));
    middle = business.slice(1, 4).toLowerCase();
    last = capitalize(postfix.slice(-3));
    output.style.fontWeight = "lighter";
    output.style.color = "#c0392b"; // red
  } else {
    first = adjective.toLowerCase().slice(0, 3);
    middle = business.toUpperCase().slice(0, 3);
    last = postfix.toUpperCase().slice(0, 3);
    output.style.fontStyle = "normal";
    output.style.fontWeight = "900";
    output.style.color = "#2c3e50"; // dark gray
  }

  output.textContent = first + middle + last;
  reset.classList.remove("hidden");
});

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
reset.addEventListener("click", function () {
  initial();
});
