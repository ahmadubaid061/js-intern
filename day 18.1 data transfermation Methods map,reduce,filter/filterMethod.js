"use strict ";
//filter method creates a new array with out mutating the original one and copies some elements from the original array that meet a specific defined condition

const array = [11, 23, -23, 45, 91, -12, -13, -50, 33, 12, -14];

const deposits = array.filter(function (element) {
  return element > 0;
});
console.log(deposits);

//------------now withdrawals using arrow function-------------

const withdrawals = array
  .filter((element) => element < 0)
  .map((element) => Math.abs(element)); //map is used to remove minus sign from negative numbers
console.log(withdrawals);
