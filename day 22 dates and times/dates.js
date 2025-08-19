"use strict";

//=============================================Creating dates================================
//Note: in javascript months are also ) based which means january is 0th and december is 11th
const now = new Date();
console.log(now);
//this gives a full string as  2025-08-19T03:49:31.757Z

//===============================================Dates Methods===============================

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate()); //returns exact date of the month
console.log(now.getDay()); //returns day of the week 1 means monday     7 means sunday
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

//==============================================Calculating NO of Days Passed================
