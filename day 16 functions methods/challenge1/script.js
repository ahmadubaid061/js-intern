"use strict";
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:  C++"],

  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let input = Number(prompt(`${this.question} ${this.options.join("\n")}`));

    if (
      typeof input === "number" &&
      input >= 0 &&
      input < this.answers.length
    ) {
      this.answers[input]++;
    } else {
      alert("Invalid input!");
    }
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are: ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".button")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
