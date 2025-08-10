"use strict";

////////////////////////array.slicez(start,end)////////////////////////////////////
//it creates a copy of the array with defined indices and doesnot change the original array

const array = [1, 2, 3, 4, 5];
console.log("the slice 1 of array is: ", array.slice(1, 3)); //begin=1 and ends before 3
console.log("the slice 2 of array is: ", array.slice(3, 5)); //takes 3,4 not 5
console.log("the original array after slice is: ", array); //to check if changed or not

////////////////////////array.splice(begin,count)/////////////////////////////////////
//it takes elements from the array starting at the begin index and upto the defined count value and deletes them from the array
//it mutates the original array
//is useful when we need to get red of some elements of the array

console.log("the first splice is: ", array.splice(0, 1)); //it will just take the first index as count is 1
console.log("the array after first splice: ", array); //the first elements is gone
console.log("the second splice is: ", array.splice(2, 2)); //starts from index 2 and deletes two elements
console.log("array after second splice is: ", array);

//////////////////////////////array.reverse//////////////////////////////////////////////
//it reverses the array elements \
//it also changes the original array

let arr = [10, 11, 12, 13, 14, 15];
console.log("the reversed array is: ", arr.reverse());
console.log("the original array after reversed is: ", arr); //it will be same as the reversed

////////////////////////////arr.concat(arr2)/////////////////////////////////////////////
//it adds the arr2 to the end of arr1
//also it can be done using spread operator[...arr1,arr2];
//it creates a shallow copy and doesnot mutate the original array

console.log("the array and arr combined are: ", array.concat(arr));
console.log("the original array after concate is: ", array);
console.log("the original arr after concat is: ", arr);

///also using spread operator
console.log("the joined array and arr using spread operator are: ", [
  ...array,
  ...arr,
]);

///////////////////////////////////////arr.join('defined charactor')///////////////////////
//it joins the elements of array and creats a string

const joined = arr.join(",");
console.log("the string is: ", joined, " and the type is: ", typeof joined);

////////////////////////////////////arr.at('index defined)////////////////////////////////

console.log("the element at index 2 is: ", arr.at(2));
//also
console.log("the element at index 2 is: ", arr[2]);
// both the methods will return the same element
