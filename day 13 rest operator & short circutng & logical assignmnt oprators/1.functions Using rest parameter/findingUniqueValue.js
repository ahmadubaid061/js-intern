"use strict";
////////////Unique value means a value defined by a certain condition such as in this case unique the one which is greater than the twice of each indivisual element og the array
function findingUnique(...array) {
  let unique = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > unique * 2) {
      unique = array[i];
    }
  }
  return unique;
}

const numbers = [1, 4, 7, 11, 88, 415, 2, 44, 101, 207];
let unique = findingUnique(...numbers);
console.log("the unique element of the array is: ", unique);
