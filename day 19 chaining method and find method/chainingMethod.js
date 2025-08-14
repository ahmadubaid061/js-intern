"use strict";

const calTotalDepositsUSD = function (array) {
  //performing the three operations in a single linbe using chaining method
  return array
    .filter((value) => value > 0) //to check if deposit
    .map((value) => value * 1.1) //to convert euro to USD
    .reduce((acc, curr) => acc + curr); //to add all the movements
};


const movements=[230,140,-324,-894,8632,723,-98732,673,-793,792,729,872,-231];
console.log('the total deposits in USD are: ',calTotalDepositsUSD(movements));
