"use strict";

////////////////////////creating set///////////////////////////////////////////
// set is just like an array but doesnot allow duplicate eliments
let array = [1, 2, 3, 4, 4, 4, 5, 5, 5];
let set = new Set(array);
console.log(set);
// it will shorten to the array and removes all the duplictes values
////////////////////////////length vs size/////////////////////////////////////
console.log("the set size is: ", set.size); //incase of sets it is size
console.log("length of array is: ", array.length); // incase of array this is length

///////////////////////push , unshift, add////////////////////////////////////////
array.push(11); //addds to the end of array
array.unshift(6); // adds to the start of array
set.add(7); //adds to set order doesnot matter
console.log("array after push and unshift is: ", array);
console.log("set after add is: ", set);

/////////////////////shift,pop,delete////////////////////////////////////////////
array.shift(); //deletes from start of array
array.pop(); //deletes from end of array
set.delete(3); //delete the passed value
console.log("array after shift and pop :", array);
console.log("set after delete is: ", set);

////////////////////include vs has///////////////////////////////////////////////
const arrayboolean = array.includes(6);
const setboolean = set.has(6);
console.log("array boolean is: ", arrayboolean);
console.log("set boolean is: ", setboolean);

//////////////////////clear//////////////////////////////////////////////////
set.clear();
console.log("set after clearing is: ", set);

///////////////////////////use case of sets/////////////////////////////////
//set.size can be used for returning how many different charactors are used in a string (name,or password)

const sTring = "ahmad ali";
const seT = new Set(sTring);
console.log(
  "the simplified string without duplicates is: ",
  seT,
  "and the total number of charactors used is: ",
  seT.size
);
///////////////////////////////converting back to array using spread operator////////////////////////
const newArray = new Array(...seT);
console.log("new array is: ", newArray);
