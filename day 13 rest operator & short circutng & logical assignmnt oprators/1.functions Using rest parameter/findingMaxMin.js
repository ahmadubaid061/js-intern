"use strict";
//////////////////////////////////finding Maximum value/////////////////////
function findMax(...rest) {
  let max = rest[0];
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] > max) {
      max = rest[i];
    }
  }
  return max;
}

///////////////////////////////finding Minimum value///////////////////////
function findMin(...rest) {
  let min = rest[0];
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] < min) {
      min = rest[i];
    }
  }
  return min;
}

const numbers = [2, 4, 7, 1, 5, 9, 2, 4, 6, 4, 2];
let maximum = findMax(...numbers);
let minimum = findMin(...numbers);
console.log("Maximum number in the array is: ", maximum);
console.log("Minimum number in the array is: ", minimum);
