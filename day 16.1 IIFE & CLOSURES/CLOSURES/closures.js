"use strict";
function createCounter() {
  let count = 0; // 'count' is a variable in the outer function's scope

  function increment() {
    // 'increment' is the inner function, forming a closure
    count++;
    return count;
  }

  return increment; // The outer function returns the inner function
}

const counter1 = createCounter();
//now counter1 is the increment function
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2

const counter2 = createCounter();
console.log(counter2()); // Output: 1 (Independent state for each counter)
