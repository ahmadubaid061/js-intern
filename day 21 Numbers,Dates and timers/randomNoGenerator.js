"use strict";
const generateRandom = function (min, max) {
  return Math.trunc(Math.random() * (max - min) + 1) + min;
};

console.log(generateRandom(15, 19)); //will generate a random no between 15 and 19
