"use strict";

const calAverageHumanAge = function (array) {
  const dogTohumanAge = array.map(
    (value, index) => (value <= 2 ? value * 2 : value * 4 + 16)
    //map method is used for changing dog's ages to Human ages
  );
  const adultAges = dogTohumanAge.filter((value, index) => value >= 18);
  //filter method is used to filter all the ages greater than or equall 18 and save them in a new array;
  console.log("the adult Human ages are: ", adultAges);
  const AverageHumanAge = function (Ages) {
    let sum = Ages.reduce((acc, curr) => acc + curr);
    //reduce method is used to calculate sum of all the ages
    return sum / Ages.length;
  };
  console.log("the average Adult Human Age is: ", AverageHumanAge(adultAges));
};
let arr = [5, 2, 4, 1, 15, 8, 3];

calAverageHumanAge(arr);
