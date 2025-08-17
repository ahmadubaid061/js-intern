"use strict";
//------------------------------------------------------array.fill
// This method is used to fill a portion of an array, or the entire array, with a static value.
// It modifies the original array in place.

let array = [1, 2, 3, 4, 5, 6, 7];
const modifiedArray = array.fill(2, 4, 7); //(the value,starting position,ending position)
console.log(modifiedArray);

//Also
const x = new Array(6); //creates an array of size 6
x.fill(1); //fills the entire array with 1
console.log(x);

////////////////////////////////////////////////////////array.from///////////////////////////////////
//This method creates a new, shallow-copied Array instance from an iterable or array-like object. It allows for transformation of elements during creation.
const arr = Array.from({ length: 7 }, (curr, index) => index + 1);
//this creates a new array with length 7 and at each position i+1 value is stored
console.log(arr);
//---------------------------------------------create an array from a string
const name = "Ubaid";
const nameArray = Array.from(name);
console.log(nameArray);
