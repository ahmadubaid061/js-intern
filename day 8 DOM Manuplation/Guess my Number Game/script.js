"use strict";
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🐣 no Number";
    score -= 2;
    document.querySelector(".score").textContent = score;
    if (score > 0) {
      document.querySelector(".message").textContent = " too low";
    } else {
      document.querySelector(".message").textContent = "👹you lost the game!";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".btnAgain").classList.add("zoom");
      document.querySelector(".check").disabled = true;
    }
  } else if (guess == randomNumber) {
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".message").textContent = "👑 correct number";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".btnAgain").classList.add("zoom");
    document.querySelector(".check").disabled = true;

    document.querySelector(".score").textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > randomNumber) {
    score -= 1;
    document.querySelector(".score").textContent = score;
    if (score > 0) {
      document.querySelector(".message").textContent = " too high";
    } else {
      document.querySelector(".message").textContent = "👹you lost the game!";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".btnAgain").classList.add("zoom");
      document.querySelector(".check").disabled = true;
    }
  } else if (guess < randomNumber) {
    score -= 2;
    document.querySelector(".score").textContent = score;
    if (score > 0) {
      document.querySelector(".message").textContent = " too low";
    } else {
      document.querySelector(".message").textContent = "👹you lost the game!";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".btnAgain").classList.add("zoom");
      document.querySelector(".check").disabled = true;
    }
  }
});

document.querySelector(".btnAgain").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".check").disabled = false;
  document.querySelector("body").style.backgroundColor = "gray";
  document.querySelector(".score").textContent = score;
});