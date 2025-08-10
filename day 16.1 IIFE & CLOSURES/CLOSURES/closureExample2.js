"use strict";

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`we are now boarding all ${n} Passengers`);
    console.log(`there are three groups with each ${perGroup} passengers`);
  }, wait * 1000);
  //wait is time and it is by default in milliseconds so by multiplying eith 1000 it becomes wait times seconds
  console.log(`We will start boarding in ${wait} seconds`);
  //this will be printed to the console before the settimeout function because that will load after wait seconds
};

boardPassengers(240, 4);

///////////////////////////explaination////////////////////////////
//the setTimeout function is example of a closure
// here the setTimeout is a predefined function in javascript which used to delay an event for a certain time

////////////////////////////setTImeout//////////////////////////////////////
let timeout;

function myFunction() {
  timeout = setTimeout(alertFunc, 5000);
}

function alertFunc() {
  console.log("Hello!");
}

myFunction();
