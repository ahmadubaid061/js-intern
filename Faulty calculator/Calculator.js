let genrateRandom;
claculateSum = function (a, b) {
  if (genrateRandom > 10) {
    return a + b;
  } else {
    return a - b;
  }
};

DoSubtraction = function (a, b) {
  if (genrateRandom > 10) {
    return a - b;
  } else {
    return a / b;
  }
};

findProduct = function (a, b) {
  if (genrateRandom > 10) {
    return a * b;
  } else {
    return a + b;
  }
};

Divide = function (a, b) {
  if (genrateRandom > 10) {
    return a / b;
  } else {
    return a ** b;
  }
};

const c = 5;
const d = 2;

for (let i = 0; i < 10; i++) {
  genrateRandom = Math.random() * 100 + 1;
  console.log(genrateRandom);
  console.log(`sum is of ${c} and ${d} is:${claculateSum(c, d)} `);
  console.log(`product of ${c} and ${d} is: ${findProduct(c, d)}`);
  console.log(`Difference of ${c} and ${d} is: ${DoSubtraction(c, d)}`);
  console.log(`Dividing ${c} over ${d} is:${Divide(c, d)}`);
}
