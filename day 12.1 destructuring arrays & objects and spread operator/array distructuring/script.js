"use strict";

const arr = [1, 2, 3, [4, 5]];
// distructuring
const [a, b, c, d] = arr;
console.log(a, b, c, d);
// outpput        1 2 3 [ 4, 5 ]
const [e, f, g, [h, i]] = arr;
console.log(e, f, g, h, i);
//output           1 2 3 4 5

// function returning more than one values
const array = [
  ["GLi", "XLi", "BMW", "ferrari"],
  ["salad", "Biryani", "noodles", "chicken"],
  ["brown", "black", "purple", "grey"],
  ["football", "jodu", "taicondo"],
];

const [cars, food, colors, hobby] = array;
function favouriteCollection() {
  const random = Math.trunc(Math.random() * 4);
  return [cars[random], food[random], colors[random], hobby[random]];
}

let person = favouriteCollection();
console.log(person);
