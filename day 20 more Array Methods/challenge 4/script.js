"use strict";
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
//1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)

dogs.forEach((dog) => (dog.recommendedFood = dog.weight ** 0.75 * 28));
// console.log(dogs);

//===========================function to be used to find the dog's eating status===========================

const finddogsStatuses = function (obj) {
  if (
    obj.curFood > obj.recommendedFood * 0.9 &&
    obj.curFood < obj.recommendedFood * 1.1
  ) {
    return "Normal";
  } else if (obj.curFood > obj.recommendedFood) {
    return "TooMuch";
  } else if (obj.curFood < obj.recommendedFood) {
    return "TooLittle";
  }
};
//========================================Sarah Dog's Status===================
const sarahDog = dogs.find((obj) => obj.owners.includes("Sarah"));
console.log(`Sara Dog eat ${finddogsStatuses(sarahDog)} food`);
//========================================Array containing owners of dogs which eats too much
const ownersEatTooMuch = function (array) {
  const DogsTooMuch = array.filter(
    (dog) => finddogsStatuses(dog) === "TooMuch"
  );
  return DogsTooMuch.flatMap((dog) => dog.owners);
};

console.log(`${ownersEatTooMuch(dogs).join(" and ")}'s dogs eat Too much food`);
//=========================================Array containing owners of dogs which eat Too little
const ownersEatTooLittle = function (array) {
  const DogsToolittle = array.filter(
    (dog) => finddogsStatuses(dog) === "TooLittle"
  );
  return DogsToolittle.flatMap((dog) => dog.owners);
};

console.log(
  `${ownersEatTooLittle(dogs).join(" and ")}'s dogs eat Too Little food`
);

//=====================================if any dogs is eating exact amount of recommended food
const perfectDog = dogs.some((dog) => dog.curFood === dog.recommendedFood);
console.log(
  `${perfectDog}` === "true"
    ? "there is a dog eating exactly the recommended amount of food"
    : "There is no dog eating exactly the recommended amount of food"
);

//====================================dogs eating okay amount of food==========================================\

const okayDogs = dogs.some((dog) => finddogsStatuses(dog) === "Normal");
console.log(
  `${okayDogs}` === "true"
    ? "there is a dog eating okay amount of food"
    : "There is no dog eating okay amount of food"
);

const okayDogsArray = function (array) {
  const okDogs = array.filter((dog) => finddogsStatuses(dog) === "Normal");
  return okDogs;
};

console.log("Dogs eating okay food are: ", okayDogsArray(dogs));

//=======================================Sorting dogs based on the recommended food portion===========
// 8. Create a shallow copy of dogs and sort by recommendedFood in ascending order
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log("Dogs sorted by recommended food (ascending):");
console.log(dogsSorted);
