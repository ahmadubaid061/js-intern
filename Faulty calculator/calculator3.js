let a, b, c;
let random = Math.random() * 100 + 1;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};
calculate = function (a, b, c) {
  if (random > 10) {
    let result = eval(`${a} ${c} ${b}`);
    return result;
  } else {
    c = obj[c];
    let result = eval(`${a} ${c} ${b}`);
    return result;
  }
};
readline.question("Enter first number: ", (a) => {
  readline.question("Enter second number: ", (b) => {
    readline.question("Enter operation: ", (c) => {
      let output = calculate(a, b, c);
      console.log(`the random number is :${random}`);
      console.log(`${a} ${c} ${b} = `, output);
      readline.close();
    });
  });
});
