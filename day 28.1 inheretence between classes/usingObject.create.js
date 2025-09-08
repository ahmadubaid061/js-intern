"use strict";
//-----------------------------------creating parent Object
const Person = {
  calcAge() {
    return 2025 - this.birthYear;
  },

  //now initializing the parameters
  init(firs_name, birth) {
    this.firs_name = firs_name;
    this.birthYear = birth;
  },
};

//---------------------------------creating child Object using object.create
const Student = Object.create(Person);
//now setting the properties

Student.init = function (firs_name, birth, marks) {
  //inhereting properties from parent class
  Person.init.call(this, firs_name, birth);
  this.marks = marks;
};
//-------------------------------creating a new student
const student1 = Object.create(Student);
student1.init("Ubaid", 2002, 89);
console.log(student1);
//now calling the calcAge method on student1 which is inhereted from the Person class
const age = student1.calcAge();
console.log(age);
