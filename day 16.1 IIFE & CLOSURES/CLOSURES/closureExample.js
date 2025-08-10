"use strict";

let f;

const g = function () {
  const a = 200;
  f = function () {
    //the f is initialized with a function
    console.log(a * 2);
  };
};

//previodly i did as
// let double=g();
// double()  this would be equal to the function returned by the g() function

//but here

g();
f(); //when called after the g() it works fine

////////////////////////////now lets work with two functions//////////////////////

let a;

const b = function () {
  const x = 300;
  a = function () {
    console.log(x * 2);
  };
};

const c = function () {
  const d = 400;
  a = function () {
    console.log(d * 2);
  };
};

b();
a();

//when called after execution of b ,a will have the closure value of x=300

c();
a();

//now as called after excecution of c, a has the closure value of d=400
