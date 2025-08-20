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

//==============================================Calculating Time Passed================
//we can calculate no of days passed and hours and minutes and also seconds by deleting the previous date from a new date

const calculateTImePassed = function (date1, date2) {
  const MilliSecPassed = date2 - date1; //by default it gives milliseconds
  console.log("Milli Seconds passed are: ", MilliSecPassed);
  console.log("Seconds passed are: ", MilliSecPassed / 1000);
  console.log("Minutes Passed are: ", MilliSecPassed / (1000 * 60));
  console.log("Hours Passed are: ", MilliSecPassed / (1000 * 60 * 60));
  console.log("Days Passed are: ", MilliSecPassed / (1000 * 60 * 60 * 24));
  console.log("Weeks Passed are: ", MilliSecPassed / (1000 * 60 * 60 * 24 * 7));
  console.log(
    "Months Passed are: ",
    MilliSecPassed / (1000 * 60 * 60 * 24 * 30)
  );
  console.log(
    "years Passed are: ",
    MilliSecPassed / (1000 * 60 * 60 * 24 * 365)
  );
};
const initialDate = new Date("2024-07-15T04:27:47.660Z");
const rightNow = new Date();
console.log(calculateTImePassed(initialDate, rightNow));
