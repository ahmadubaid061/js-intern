"use stirct";
//////////////////////////////////////////////////using an object inside another/////////////////
let person2 = {
  name: "ubaid",
  age: 23,
};

let players = {
  person1: {
    name: "ahmad",
    age: 22,
  },
  person2, // no need to to anything else just put the name of the object
};

console.log("the players are: ", players);

/////////////////////////////////////////////declaringfunction inside object////////////////////
let obj = {
  name: "ubaid",
  // printThestring: function () {
  //   console.log(`${this.name} is a good person`);
  // },
  //instead just do
  printThestring() {
    console.log(`${this.name} is a good person`);
  },
};
obj.printThestring();
///////////////////////////////////////////accessing variables by names////////////////////////
let Name = "ubaid";
let age = 23;
let numbers = [1, 2, 3, 4];

let obj2 = {
  Name,
  age,
  numbers,
};
console.log('the object2 is: ',obj2);
