"use strict";

////////////////////////////////string.split()//////////////////////////////////
//used for taking first and last name
const name = "ubaid ahmad";
console.log("the first and last names are: ", name.split(" "));

////////////////////////////////array methodjoin ////////////////////////////

const array = name.split(" ");
const Name = array.join("--");
console.log("the Name is: ", Name);

/////////////////////capitalization all the first letters of the names in a string
const capitalizeName = (string) => {
  const newArray = string.split(" ");
  let newStr = [];
  for (let name of newArray) {
    newStr.push(name[0].toUpperCase() + name.slice(1));
  }
  return newStr.join(" ");
};

let myName = "ubaid ahmad bakhtak";

console.log("my name is: ", capitalizeName(myName));

///////////////////////////////////padding////////////////////////////////////////

console.log(myName.padEnd(35, "*")); // extends the string length to 35 by adding * at the end
console.log(myName.padStart(35, "*")); // extends the stringlength to 35 by adding * to the start
////////////////used in credit card masking

const maskCard = (number) => {
  let masked=String(number);
  return masked.slice(-4).padStart(masked.length,'*');
};

let credit = 12345678912;
console.log("the masked credit card number is: ", maskCard(credit));

/////////////////////////////////.repeat()/////////////////////////////////////////////////
//used to repeat a string for certain defined times

const lastname='ahmad';
const lastnameRepeated=lastname.repeat(7);
console.log(lastnameRepeated);
