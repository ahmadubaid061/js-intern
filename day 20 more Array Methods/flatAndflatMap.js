"use strict";
//flat method used to make a single array containing all the elements from a group of nested arrays inside an array
const marks = [[12, 13, 14], [12, 56], [89, 79, 68], 9, 10];
//by flat method we can amke a single flat array from the above data
console.log(marks.flat());

//======================================the Dept Argument=========================
//in flat method inside () there is alaways a default dept parameter set to 1 but if we need to go upto 2 times dept then we can manually set that to 2 ,3 and so on

const array = [
  [1, 2, 3, [23, 24, 25], 17, 18, 19],
  [12, 14, [14, 15]],
];
//this is an array of dept2 nesting to flaten this we need a dept of 2
console.log(array.flat(2)); //dept=2

//====================================FlatMap Method=============================
//flat Map combines both map and flat methods
const object1 = {
  name: "Ubaid",
  marks: [1, 2, 3, 4, 5],
};
const object2 = {
  name: "Ahmad",
  marks: [6, 7, 8, 9, 10],
};
const object3 = {
  name: "Ali",
  marks: [11, 12, 13, 14, 15],
};

const objects = [object1, object2, object3];
console.log(objects); //this will return whole objects
console.log(objects.map((obj) => obj.marks)); //retuns just an aray of nested arrays
console.log(objects.map((obj) => obj.marks).flat()); //this will now combine all the nested arrays and make a single flattened array

//now using flatMap method we do not need those two steps

console.log(objects.flatMap((obj) => obj.marks));
