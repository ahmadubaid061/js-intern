"uses strict";
//premitives
let a = 10;
let b = a;
a = 20;

console.log("b is: ", b);
console.log("a is: ", a);

//objects
let obj = {
  x: 10,
};
let obj2 = obj;
obj2.x = 20; //it changes the initial value of x inside object from 10 to 20
console.log("x for obj is: ", obj.x);
console.log("x for obj2 is: ", obj2.x);
