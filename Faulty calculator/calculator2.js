let a, b, c;
let random = Math.random() * 100 + 1;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

calculate = function (a, b, c) {
  if (random > 10) {
    if (c === "+") {
      return Number(a) + Number(b);
    } else if (c === "-") {
      return a - b;
    } else if (c === "*") {
      return a * b;
    } else if (c === "/") {
      return a / b;
    } else {
      return -1;
    }
  } else {
    if (c === "+") {
      return a - b;
    } else if (c === "-") {
      return a / b;
    } else if (c === "*") {
      return Number(a) + Number(b);
    } else if (c === "/") {
      return a ** b;
    } else {
      return -1;
    }
  }
};
readline.question("Enter first number: ", (a) => {
  readline.question("Enter second number: ", (b) => {
    readline.question("Enter operation: ", (c) => {
      let result = calculate(a, b, c);
      console.log(`the random number is :${random}`);
      console.log(`${a} ${c} ${b} = `, result);
      readline.close();
    });
  });
});
