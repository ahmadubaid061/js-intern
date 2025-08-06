"use strict";
//all the keys in an object must be strings /////////////////////////////////////////////////
const object = {
  name: "ubaid",
  rollno: 11,
  degree: "BSCS",
};
//in maps keys may be strings,integers,floats,boolean etc//////////////////////////////////////
const theMap = new Map([
  ["lastname", "ahmad"],
  [1, "studen"],
  [2, "employ"],
  [true, "yes I am a student"],
  [false, "No I am not a student"],
]);
//////////////////////////////////map methods,keys(),values(),entries()///////////////////////////
console.log("the map elements are: ", theMap);
console.log('map keys are: ',theMap.keys(),'map values are: ',theMap.values());
console.log('the map properties are : ',theMap.entries());
theMap.forEach((values, keys) => {
  console.log(
    `the map key ${keys} is ${typeof keys} type and it's corresponding value is ${values}`
  );
});

///////////////////////the .set() method//////////////////////////////////////////////
const newmap=new Map();
newmap.set('name','ali');
newmap.set(1,'ali is a student');

console.log(newmap);
////////////////////////////size of the maps
console.log('the size of the map is: ',newmap.size);
////////////////////////the .get() method///////////////////////////////////////////
console.log('the name is: ',newmap.get('name'));
/////////////////////.delet() and .has() methods///////////////////////////////////
console.log(newmap.delete(1));
console.log('after deletion map has 1:',newmap.has(1));