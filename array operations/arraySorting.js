"use strict ";
//for array of strings there is pre defined sort method

const names = ["Ubaid", "Ahmad", "Ali", "Bakhti"];
console.log(names.sort());

///=====================but for arrays of integers ===============================

const marks = [12, 15, 3, 78, 34, 1, 2, 79, 93, 23, 13];
//we have to use a manual method

//ascending sort
marks.sort((a, b) => {
  if (a > b) return 1; //it will keep the order of the elements
  if (b > a) return -1; //it will change the order
});
console.log(marks);

//descending Order
marks.sort((a, b) => {
  if (a > b) return -1; //it will change the order
  if (b > a) return 1; //it will keep the order of the elements
});
console.log(marks);

//================================simplifing the above function===================
//ascending sort
marks.sort((a, b) => a - b); //if a is greater it keeps the order but if a is smaller then it changes the order
console.log(marks);
