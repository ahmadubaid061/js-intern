"use strict";
const obj = {
  name: "Ubaid",
  roll_no: 11,
  marks: 50,
  calculateGrade: () => {
    if (this.marks > 40) {
      // 'this' refers to the main obj
      return "pass";
    } else {
      return "fail";
    }
  },
  printFullname: () => {
    const lastname = "Ahmad";
    return `${this.name} ${this.lastname}`; //"this " with last name is undefined
    //last name cannot be accessed through 'this' keyword as it is inside arrow function
  },
};
let result = obj.calculateGrade();
console.log("result is:", result);
let fullName = obj.printFullname();
console.log("fullname is: ", fullName);
