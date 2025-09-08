"use strict";

//here the inheretence is used for creating new contructor with from the eisting ones with some additionall properties that are specific to the child constructor

//Parent constructor
const Person = function (first_name, birth) {
  this.first_name = first_name;
  this.birthYear = birth;

  this.age = function () {
    return 2025 - this.birthYear;
  };
};

//child constructor
const Student = function (first_name, birth, marks) {
  //   this.first_name = first_name;
  //   this.birthYear = birth;
  //to avoid duplication the inheretence is used

  Person.call(this, first_name, birth); //this will attach all the properties and methods defined in the parent constructor to the child constructor

  this.marks = marks;
};

//here i didnot define age method inside the student constructor but i can call that on any new student
//to access all the methods of Person Object we need to set the prototype of the student constructor like the prototype of the Person constructor
Student.prototype = Object.create(Person.prototype);
const student1 = new Student("Ubaid", 2002, 80);
console.log(student1);

console.log(student1.age());
