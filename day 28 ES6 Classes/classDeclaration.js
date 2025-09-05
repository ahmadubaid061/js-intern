"use strict";
//classes in javascript works the same as constructor function but they are more cleaner
//class contains a constructor inside for initialization and declaratio of the properties of objct
//also outside the constructor while still in the class the other methods are defined

class PersonClass {
  //the constructor
  constructor(name, marks) {
    this.name = name;
    this.grades = marks;
  }
  //now the methods
  result() {
    this.grades > 40
      ? console.log(`congrats ${this.name} you have passed the exam`)
      : console.log(
          `hello ${this.name} we are sorry to inform that you have failed `
        );
  }
}

//new objects can be created the same way as we do in constructor ffunction

const person1 = new PersonClass("ubaid", 50);
person1.result();
//the method inside a class are always the prototypeof the newly created objects  such as;
console.log(person1.__proto__ === PersonClass.prototype); //returns true

//----------------------------------------------------------------------------------------------------------
//lets add a method manually to the class
PersonClass.prototype.percentage = function () {
  return this.grades / 100;
};
//the percentage is added manually to the class and now i am calling this on person1
console.log(person1.percentage()); //and yet it works properly

