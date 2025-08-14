"use strict";

const calAverageHumanAge = function (array) {
  const average = array
    .map((value) => (value <= 2 ? value * 2 : value * 4 + 16))
    .filter((value) => value >= 18)
    .reduce((acc, curr, index, arr) => acc + curr / arr.length, 0);
  console.log(`the average adult Human age is: `, average);
};
let arr1 = [5, 2, 4, 1, 15, 8, 3];
let arr2 = [16, 6, 10, 5, 6, 1, 4];
calAverageHumanAge(arr1);
calAverageHumanAge(arr2);
