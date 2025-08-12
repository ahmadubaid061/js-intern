'use strict'
////////////////////////////adding array elements using rest parameter
const add=function(...array){
    let sum=0;
    for(let i=0;i<array.length;i++)
    {
        sum+=array[i];
    }
    return sum;
}
///////////////////////using reduce method////////////////////////////
const sumUsingReduce = function (arr) {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum;
};
const array=[45,46,76,23,35,57];
console.log('sum using reduce method is: ',sumUsingReduce(array);
///////////////////////////finding average/////////////////////////////
function findAverage(...array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum/array.length;
}


let numbers=[1,2,3,4,5,6,7,8,9];
let sum=add(...numbers);
console.log('the sum is: ',sum);

let average=findAverage(...numbers)

console.log('average is: ',average);
