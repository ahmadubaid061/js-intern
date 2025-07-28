"use strict";
//spread operator is used to expand an array or Objects and get access it's values

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr, ...arr2]; // this will insert all the values from both arrays into the third array

console.log("the third array is: ", arr3);

/////////////////////////////////Creating Copy of the array//////////////////////////////////////
const numbers = [1, 2, 3, 4, 5];
const numbersCopy = [...numbers];
console.log("the copy of the numbers array is: ", numbersCopy);

/////////////////////////////////Adding Elements to arrays /////////////////////////////////////
let array = [1, 2, 3, 4, 5, 6];
let array2 = [0, ...array, 7, 8, 9, 10]; //inserts array at index 1
console.log("the updated array is: ", array2);

////////////////////////////////manipulating objects////////////////////////////////////////////

const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  c: 3,
  d: 4,
};

//inserting both into third object using spread operator
const obj3 = {
  ...obj1,
  ...obj2,
};
console.log("the final object is: ", obj3);

/////////////////////////////Updating properties inside an object///////////////////////////////

const user = {
  name: "Ubaid",
  degree: "BSCS",
  roll_no: 11,
};

//updating roll no

const updatedUser = {
  ...user,
  roll_no: 22,
};

console.log("the user details are: ", updatedUser);
// this will print the user details with roll no updated to 22
