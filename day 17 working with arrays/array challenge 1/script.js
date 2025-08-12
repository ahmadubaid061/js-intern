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
  array.sort();
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
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 6, 7, 8, 9];

checkDogs(arr1, arr2);
