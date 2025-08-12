"use strict";
// */Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.

///////////////////solution steps////////////////////////////////////////////
///1---Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)

const checkDogs = function (arr1, arr2) {
  arr1 = arr1.slice(1, -2);
  const array = [...arr1, ...arr2];

  array.forEach(function (value, i) {
    value >= 3
      ? console.log(
          `Dog Number ${i + 1} is an adult and it is ${value} years old`
        )
      : console.log(
          `Dog Number ${i + 1} is still a Puppy and it is ${value} years old`
        );
  });
};
let arr1 = [3, 5, 2, 12, 7];
let arr2 = [4, 1, 15, 8, 3];

checkDogs(arr1, arr2);
console.log(
  "-------------------------------Second Data-----------------------------"
);
arr1 = [9, 16, 6, 8, 3];
arr2 = [10, 5, 6, 1, 4];
checkDogs(arr1, arr2);
