"use strict";
//i ma using the console in chrome browser now because in vs code terminal the the __proto__ property was not logged into console since terminal has not full access to all properties of the script
const Person = function (name, birthyear, marks) {
  this.name = name;
  this.age = 2025 - birthyear;
  this.percentage = marks / 100;
};

//new object

const person1 = new Person("ubaid", 2002, 80);
console.log(person1);

//now creating a prototype

Person.prototype.welcome = function () {
  this.percentage > 0.4
    ? console.log(" you have passed")
    : console.log(" We are sorry to inform that you have failed");
};
//calling prototype on person1
person1.welcome();

//now if i log person1 to console it must contain the __proto__ property

console.log(person1);
console.log(person1.__proto__); //it will simply return the function (welsome)
console.log(person1.__proto__.__proto__); //here the chain stops
console.log(person1.__proto__.__proto__.__proto__); //it will return null as the chain has already reached its peak

//------------------------------------------------protypechain in Arrays---------------------------------
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.__proto__); //it will return an object with all array methods as properties
console.log(arr.__proto__.__proto__); //thid will also reruen an objct containing further methods that can be applied on arrays also the constructor which is (Array) in this case
