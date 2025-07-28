"use strict";

//////////////////////////////destructuring simple objects///////////////////
const user = {
  name: "Ubaid",
  age: 23,
  roll_no: 11,
};

const { name, age, roll_no } = user;
//////no need of using user.name, user,age and user.roll_no etc
console.log(`name is: ${name} \nage is: ${age} \nroll_no is: ${roll_no}`);

//////////////////////////////Renaming variables/////////////////////////////

const { name: firstname, age: yearsOld } = user;
console.log("first name is: ", firstname);
console.log("age is: ", yearsOld);
//it will print the name=Ubaid and age=23

//////////////////////////////////default values/////////////////////////////

const student = {
  student_name: "Ubaid Ahmad",
  Student_Roll: 11,
  student_degree: "BSCS",
};

//destructing with default values
const { Name = "ahmad", S_age = "20", language = "pashto" } = student;
//if the value is present in student(object) it should be assigned otherwise the default value is used which is assigned using "=" operator
console.log("Student name is: ", Name);
console.log("Student age  is: ", S_age);
console.log("Student language is: ", language);
// as language is not present in the student object it will print the deault value which is pashto

/////////////////////////////////Rest property///////////////////////////////
//the ... rest propertiy works the same as in arrays

const object = {
  x: 10,
  y: 20,
  z: 30,
  q: 40,
};
//destructing
const { x, ...otherDetails } = object;
console.log("the first value is: ", x);
console.log("other values are:  ", otherDetails);
