"use strict";

const movements = [1100, 1200, -400, -500, 300, -200, 300, -1100, 800];

///loopinf using forOfloop()///////////
for (const mov of movements) {
  if (mov >= 0) {
    console.log(`you deposited Rs ${mov} amount`);
  } else {
    console.log(`you withdrew Rs ${Math.abs(mov)} amount`);
  }
}

////////////now using forEach Method/////////////////////////////////////////////////
console.log("-----------------using forEach() Method-----------------------");
movements.forEach(function (mov) {
  if (mov >= 0) {
    console.log(`you deposited Rs ${mov} amount`);
  } else {
    console.log(`you withdrew Rs ${Math.abs(mov)} amount`);
  }
});

/////////////////////////// counter using for Of Loop/////////////////////////
console.log("--------counting movements using forOF looping----------");
for (const [index, value] of movements.entries()) {
  if (value >= 0) {
    console.log(`mov ${index + 1}: you deposited Rs ${value} amount`);
  } else {
    console.log(`mov ${index + 1}: you withdrew Rs ${Math.abs(value)} amount`);
  }
}

//////////////////////////movements counter using forEach()///////////////////////
console.log("--------counting movements using forEach looping----------");
movements.forEach(function (value, index) {
  if (value >= 0) {
    console.log(`mov ${index + 1}: you deposited Rs ${value} amount`);
  } else {
    console.log(`mov ${index + 1}: you withdrew Rs ${Math.abs(value)} amount`);
  }
});

/////////////////////////Total Balance using for Of loop/////////////////////////////
console.log("--------counting Total balance using for Of looping----------");
let balance = 0;
function countTOtalusingforOf() {
  for (const value of movements) {
    if (value >= 0) {
      balance += Number(value);
    } else {
      balance -= Math.abs(value);
    }
  }
  console.log("Currently the total balance is: ", balance);
}
countTOtalusingforOf();

//////////////////////////Total balnace using forEach looping /////////////////////////
console.log("--------counting Total balance using forEach looping----------");
//first of all reseting the balnce to 0
balance = 0;
console.log(balance);
function countTotalUsingforEach() {
  movements.forEach(function (value) {
    if (value >= 0) {
      balance += Number(value);
    } else {
      balance -= Math.abs(value);
    }
  });
  console.log("Currently the total balance is: ", balance);
}
countTotalUsingforEach();
