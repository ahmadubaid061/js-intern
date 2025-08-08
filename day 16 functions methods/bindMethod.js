'use strict'
//the bind method is used to specify the function extracted from an object to be specified for a specific object 

//taking the previous example

const person = {
  name: "Ubaid",
  result: [],
  calculateResult(subject, marks) {
    let output = marks > 40 ? "Pass" : "Fail";
    this.result.push(`${output} in ${subject}`);
  },
};

person.calculateResult("DSA", 50);
person.calculateResult("DLD", 30);
console.log(person.name, person.result);

const person2 = {
  name: "Ahmad",
  result: [],
};
//now if i want to call the function inside person object i previously did that using call() method where i made a general function named Result which can then be called for any other object 
//but now i want to specify the Result function to a specific object like person2
//so

let Result=person.calculateResult;
//now i will use bind method to specify the Result function for person 2////////////
const resultPerson2=Result.bind(person2);
//now i have 'resultPerson2' function person 2 

resultPerson2('Bio',50);
resultPerson2('Che',35);
resultPerson2('Phy',55);
console.log(person2.name,person2.result);
