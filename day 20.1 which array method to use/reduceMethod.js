"use strict";
// using reduce method to return an object not just a single value
const obj1 = {
  name: "Ubaid",
  pin: 1111,
  movements: [120, -234, 6000, -4900, 500, 400, -620, 790],
};
const obj2 = {
  name: "Ahmad",
  pin: 2222,
  movements: [783, -8923, 730, 89, 209, -3283, 324, 890, -357],
};
const obj3 = {
  name: "Ali",
  pin: 3333,
  movements: [234, 1466, -7453, 790, 4000, -6500, 3400, 2360, -450],
};
const accuonts = [obj1, obj2, obj3];

const totals = accuonts
  .flatMap((acc) => acc.movements)
  .reduce(
    (acc, curr) => {
      curr > 0 ? (acc.deposit += curr) : (acc.withdrawal += Math.abs(curr));
      return acc;
    },
    { deposit: 0, withdrawal: 0 } //initial values
  );
console.log(totals);

//counting the deposits and withdrAwals

const depositCount = accuonts
  .flatMap((acc) => acc.movements)
  .reduce((count, curr) => (curr > 0 ? ++count : count), 0);
console.log("Total Deposits are: ", depositCount);

const withdrawalCount = accuonts
  .flatMap((acc) => acc.movements)
  .reduce((count, curr) => (curr < 0 ? ++count : count), 0);
console.log("Total withdrawal are: ", withdrawalCount);
