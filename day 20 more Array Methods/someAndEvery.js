"use strict";
//some method searches for a condition and if that is found then it returns true
const array = [1, -2, 3, 45, 5, 5, -76, 7, 7, -3, , 2];
const anyWithdrawals = array.some((val) => val < 0);
console.log("there are some withdrawals in the array: ", anyWithdrawals);

//================================.every()===============================\
//every method returns true if all the elements of the array sataisfies the condition

const arr = [11, 34, 54, 23, 6476, 78, 234, 8778, 45];
const result = arr.every((val) => val > 10);
//returns true if all the the array elements are greater than 10
console.log("all the elements are greater than 10: ", result);
