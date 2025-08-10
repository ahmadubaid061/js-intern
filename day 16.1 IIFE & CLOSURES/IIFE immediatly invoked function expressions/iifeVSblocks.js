"use strict";
////////////////immediatly invoked function expressions//////////////////////////////////
const name = "something";
(function () {
  const current = 2025;
  const bithYear = 2002;
  var age = current - bithYear;
  console.log("age is: ", age);
})();

//1-the function is called immediatly and cannot be called later
//2- the varibles inside the function are function scoped and cannot be accessed outside in the global scope so provide privacy

// console.log(age); // this will return age is not defined because var is function scoped
// console.log(bithYear); //this will return birthYear is not defined;

////////////////////////////////////////////BLOCKS////////////////////////////////////
{
  const marks = 23;
  var rollNo = 11;
}
console.log("marks are: ", marks); // throws error: marks not defined as const is block scoped
console.log("roll number is: ", rollNo); //no error as var is not block scoped
