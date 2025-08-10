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
