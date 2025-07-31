"use strict";

let obj1 = {
  people: 13,
  laguage: "pashto",
};

let obj2 = {
  people: 20,
  language: "english",
};

//////////////////////////////using logical and assignment &&= operator//////
//logical and assignment works only if the initial value is a truthy value

obj1.people &&= 20; //object1.people is now 20 because initialy people variable is true

obj2.religion &&= "islam"; //it will not initialize because initially religion is undefined means false

console.log("object 1 is: ", obj1);
console.log("object 2 is: ", obj2);

/////////////////////////////using logical OR assignment ||=/////////////////
//works only if the initial value is a falsy value

obj1.cars ||= 10; //this will now add a new variable cars to the obj1 and initilaize it with value 10, because initially there was no variable named cars so it's initial value is falsy

obj2.language ||= "pashto"; //this will not work since the initial value f language variable is true

console.log("object1 after OR assignment is: ", obj1);
console.log("object2 after OR assignment is: ", obj2);

//////////////////////////using logical nullish assignment///////////////////
//works only if the initial value is either null o undefined

let x = 1;
let y = null;
let a = 0;
let b = NaN;
let c = undefined;

y ??= x; // this will assign y with value 1 as initial value of y is null
b ??= x; //this wouldnot work since initial value of b is not undefined or null b retains it's original value which is Nan
c ??= a; //this will assign c with a value 0 since initail value of c is undefined
console.log("y is: ", y);
console.log("b is: ", b);
console.log("c is: ", c);
