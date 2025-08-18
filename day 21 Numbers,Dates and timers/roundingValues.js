"use strict";
const gpa = 3.78;
///////////=============================================================Math.round
console.log(Math.round(gpa)); //returns an integer value with out the fraction part roundd to nearest value

//////////==============================================================Math.ceil and Math.floor
console.log(Math.ceil(gpa)); //rounds up to 4
console.log(Math.floor(gpa)); //rounds down to 3

////////==================================================================Math.trunc

//just removes the fractional part without rounding the integer part

console.log(Math.trunc(3.678)); //returns 3

////////======================================================================toFixed Method
//this a Method called  on a Number to round it upto a certain number digits

console.log((4.56789).toFixed(3)); //returns 4.567
console.log((4.56789).toFixed(2)); //returns 4.56
console.log((4.56789).toFixed(1)); //returns 4.5
console.log((4.56789).toFixed()); //returns 4
