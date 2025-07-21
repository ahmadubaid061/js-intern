"use strict";
let key = 5;
// calculating factporial using for loop

let factorialUsingForloop = function (n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
};

let fact1 = factorialUsingForloop(key);
console.log("factorial using for loop is: ", fact1);

//calculating factorial using reduce method

let factUsingReducedMethod = function (n) {
  let arr = Array.from(Array(n + 1).keys());
  let newarray = arr.slice(1);
  let red = newarray.reduce((a, b) => {
    return a * b;
  });

  return red;
};

let fact2 = factUsingReducedMethod(key);
console.log("factorial using reduced method is: ", fact2);
