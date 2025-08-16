'use strict'
//findindex() works the same as indexof() but there is a difference 
//findIndex can be used as a function which filters a value from an array according to a given condition and then returns the index of it

const array=[1,2,3,4,5,6,7,8,9,10];
const index=array.findIndex(value=>value*2===10); 
//here the findIndex searches the array for a value which on multiplying with 2 gives 10 which is should be 5

console.log(index);