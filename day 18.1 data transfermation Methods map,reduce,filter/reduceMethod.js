"use strict";

//Reduce method reduces an arrray to a single variable by perfoming an operation over the arrray elements and reduce the whole array to a single variable

//FOr Example to add all the elements of an array that will return a single value

//-----------------------adding all the elements using reduce---------------------
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reduced = array.reduce(function (acc, curr, i) {
  return acc + curr;
}, 0);
//the 0 is the initial value of the accumulator parameter
console.log(reduced);

//----------------------multiplying all elements--------------------------------------

const product = array.reduce((acc, curr, i) => {
  return acc * curr;
});
console.log(product);

//------------------------finding maximum Value using reduced----------------------------

const max = array.reduce((acc, curr) => {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
});
console.log(max);



