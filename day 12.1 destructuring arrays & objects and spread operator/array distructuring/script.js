"use strict";

const arr = [1, 2, 3, [4, 5]];
/////////////////////////////////////////////// distructuring
const [a, b, c, d] = arr;
console.log(a, b, c, d);
// outpput        1 2 3 [ 4, 5 ]
/////////////////////////////////////////////////nested arrays
const [e, f, g, [h, i]] = arr;
console.log(e, f, g, h, i);
//output           1 2 3 4 5

///////////////////////////////////////////////...rest perimeter
let aRR = [1, 2, 3, 4, 5];
const [first, ...rest] = aRR;
console.log("first is: ", first);
console.log("rest is:  ", rest); // returns rest of the array values other than first

///////////////////////////////////////////////////swaping values
let q = 5;
let p = 3;
[q, p] = [p, q];
console.log("q now is: ", q);
console.log("p now is: ", p);


const array = [
  ["GLi", "XLi", "BMW", "ferrari"],
  ["salad", "Biryani", "noodles", "chicken"],
  ["brown", "black", "purple", "grey"],
  ["football", "jodu", "taicondo"],
];
///////////////////////////////distructuring into cars,foods,colors and hobbies
const [cars, food, colors, hobby] = array;
console.log('cars are:',cars);
console.log('foods are:',food);
console.log('colors are:',colors);
console.log('hobbies are:',hobby);
////////////////////////////// function returning more than one values
function favouriteCollection() {
  const random = Math.trunc(Math.random() * 4);
  return [cars[random], food[random], colors[random], hobby[random]];
}

let person = favouriteCollection();
console.log(person);
