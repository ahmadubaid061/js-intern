"use strict";

const str = "my name is ubaid ahmad";

const convert = (s) => {
  let stringArray = s.split(" ");
  let output = "";
  for (let i of stringArray) {
    output += `${i.replace(i[0], i[0].toUpperCase())} `;
  }
  return output;
};
/////////////////////high Order Function////////////////////////////
function changeTHestring(string, fn) {
  //this function will call another function  when called
  console.log(fn(string));
}
console.log(changeTHestring(str, convert)); //we ask the high class function to call the convert function for us
// NOte: here the convert function is a callback function

///////////////////High order function returning a function//////////////////////////////////////

function calculateAge(year) {
  return function (birth) {
    return year - birth;
  };
}
const currentyear = 2025;
const birthyear = 2002;

let Agecalculator = calculateAge(currentyear); //this will return a function which will need birth year as argument and will calculate the age
console.log(
  "the returned function is: ",
  Agecalculator,
  "and its type is: ",
  typeof Agecalculator
);
//this will return the type of Agecalculator as function
const Age = Agecalculator(birthyear); //Agecalculator is now called with an argument
console.log("the age is: ", Age);
