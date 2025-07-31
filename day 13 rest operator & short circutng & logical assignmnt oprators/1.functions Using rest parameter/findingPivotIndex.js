"use strict";
///////////////pivot index is the one at which the total sum of the right side is equal to the total sum of the leftside of an array
function findPivotIndex(...array) {
  let totalsum = 0;
  let leftsum = 0;
  for (let i = 0; i < array.length; i++) {
    totalsum += array[i];
  }

  for (let i = 0; i < array.length; i++) {
    let rightsum = totalsum - leftsum - array[i];
    if (leftsum === rightsum) {
      return i;
    }
    leftsum += array[i];
  }
}

const numbers = [1, 2, 3, 5, 6];
const pivot = findPivotIndex(...numbers);
console.log("pivot index of the arrays is: ", pivot);
