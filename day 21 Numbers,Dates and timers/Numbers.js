"use strict";
/////////////////////////////////converting values to Numbers////////////////////////
const marks = "20";
const markstoNum = Number(marks);
console.log(marks);
console.log(typeof marks); //this is still string
console.log(typeof markstoNum); //this should be a NUmber

//===============Also we can use + operator instead of NUmber keyword====================================

const marksTONumber = +marks; //+ does type coersion and converts the string to NUmber
console.log(marksTONumber);
console.log(typeof marksTONumber); //this should be Number

//===================================================NUmber Parsing==========================================
//this method is used on the NUmber to extract an integer or float value from the start of string

const mass = "25kg";
const heigth = "6.7Inch";

console.log(Number.parseInt(mass, 10)); //should return 25
//the second argument 10 means it is in base 10
console.log(Number.parseFloat(heigth, 10)); //should return 6.7

//====================================================Number.isNaN============================================
console.log(Number.isNaN("20")); //returns true
console.log(Number.isNaN(20)); //returns false
console.log(Number.isNaN(20 / 0)); //infinity is a number but it returns true that might be bug

//====================================================Number.isfinite=========================================
//to avoid the infinity bug use .finite instead oof isNaN

console.log(Number.isFinite(20)); //true
console.log(Number.isFinite(20 / 0)); //returns false

//================================================= Number.isInt=========================================

console.log(Number.isInteger(20)); //true

console.log(Number.isInteger(2.7)); //false
