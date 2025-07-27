"use strict";

function sum(a, b, c) {
  return a + b + c;
}

console.log("sum without argument keyword is: ", sum(5, 6, 7));

// using the "argument " keyword
function add() {
  // no need of perimeters
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

let total = add(1, 2, 5, 9, 23, 10, 54);
console.log("sum using argument keword is: ", total);

// more usage
function arg() {
  console.log("the first argument is: ", arguments[0]); //prints the first argument
  console.log("total number of arguments are: ", arguments.length); // total no of arguments
}

arg("ubaid", "Ahmad", 24, "BSCS");
