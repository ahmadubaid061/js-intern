"use strict";
//setTimeout is a predefined funciton in js used to set a timer for the excecution of a function
//the excecution is delayed until the timer is is completed

const timer = setTimeout(
  (person) => console.log(`hello ${person}`),
  3000, //timer default in milliseconds
  "Ubaid" //the argument that will be passed as the person paramter
);
console.log("waiting......"); //it is logged at start and then after 3 seconds the function is excecuted
