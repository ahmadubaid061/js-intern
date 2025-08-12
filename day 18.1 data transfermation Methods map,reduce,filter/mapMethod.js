"use strict";
// map method works the same as forEach Looping but it's more accourate and has no side effects like forEach

const marks = [50, 23, 12, 56, 70, 23, 54, 33, 66, 78];

//multiplying each by 2 using forEach Looping
const marksDoubled = [];
marks.forEach(function (m) {
  return marksDoubled.push(m * 2);
});
console.log("marks doubled using forEach Looping: ", marksDoubled);

//-----------------------------using map method-------------
//no need to create an empty array
const doubleOfMarks = marks.map(function (m) {
  return m * 2;
});
console.log("marks doubled using map method  : ", doubleOfMarks);

//----------------------now using arrow funtion--------------------------
//just in one line
const doubleUsingArrow=marks.map((m=>m*2));
console.log('marks doubled using Arrow function : ',doubleUsingArrow);

//----------checking pass fail using arrow method--------------------------

const result=marks.map((m=>m>40?`you are passed with ${m-40} margin`:`you have failed with ${40-m} marks`));
console.log('the result is: ',result);

//-----------printing the result ina nice format--------------------------
//now cannot be done using single line
const feedback=marks.map((m,i)=>{
   return m>40 ? `student number ${i+1} with marks ${m} has passed with ${m-40} margin`:`student number ${i+1} with marks ${m} has failed with ${40-m} margin`;
})
console.log('the complete feedback is : ',feedback);