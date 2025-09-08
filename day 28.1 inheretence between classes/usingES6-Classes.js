"use strict";
//using classes is more simpler and easier than using constructor functions
//two things to keep in mind
//1- extend keyword used for setting the prototypes 
//2- super keyword is used for inhereting properties from parent class

//----------------------------------parent class
class Person {
  constructor(firs_name, birth) {
    this.firs_name = firs_name;
    this.birthYear = birth;
  }
  // method for calculating age
  age() {
    return 2025 - this.birthYear;
  }
}

//--------------------------------child class
//for setting prototypes we use extend keyword
class Student extends Person {
  constructor(firs_name, birth, marks) {
    super(firs_name, birth); //for inhereting properties from parent class
    this.marks = marks;
  }
  //method for calculating percentage outof 200
  calPercentage() {
    const percentage = (this.marks * 100) / 200;
    return percentage;
  }
}

//-----------------------------creating new student
const Ubaid = new Student("Ubaid", 2002, 120);
console.log(Ubaid);
//calling the age method which is inhereted from parent class
const age = Ubaid.age();
console.log(age); //returns 23
//calling the calPercentage method
const percentage = Ubaid.calPercentage();
console.log(percentage);
