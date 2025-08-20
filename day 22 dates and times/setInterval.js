"use strict";
//this is used to call the function after each interval(passed as argument)
"use strict";

let num = 5;

console.log(`Logging in ${num} seconds...`);

const timer = setInterval(() => {
  num--;
  if (num > 0) {
    console.log(num);
  } else {
    console.log("Logged in!");
    clearInterval(timer); // stop the interval
  }
}, 1000);
