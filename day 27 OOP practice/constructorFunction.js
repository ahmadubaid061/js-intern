"use strict";
//constructor function is used to create new objects
//it is called using "new " keyword
//it works as a blueprints form which we can  create  a lot of objects

const Person = function (name, marks) {
  //the function name always start with capital
  //arrow function cannot be used

  this.Name = name;
  this.percentage = marks / 100;
  //properties are added using this keyword
};

//creating an object using the above function

const person1 = new Person("Ubaid", 60);
console.log("person-1 is: ", person1);

const person2 = new Person("Ahmad", 80);
console.log("person-2 is: ", person2);


