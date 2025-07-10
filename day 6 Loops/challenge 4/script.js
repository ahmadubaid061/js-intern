const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

calculateTip = function (bill) {
  let tip;
  if (bill >= 50 && bill <= 300) {
    tip = 0.15 * bill;
  } else {
    tip = 0.2 * bill;
  }
  return tip;
};

for (let i = 0; i < bills.length; i++) {
  let x = calculateTip(bills[i]);
  tips.push(x);
  let total = x + bills[i];
  totals.push(total);
}

let i = 0;
while (i != bills.length) {
  console.log(
    `tip for bill ${bills[i]} is: ${tips[i]} and total amount is: ${totals[i]}`
  );
  i++;
}

console.log("BONUS PART CALCULATING AVERAGE OF TOTALS");

let sum = 0;
for (let i = 0; i < totals.length; i++) {
  sum += totals[i];
}
let average = sum / totals.length;
console.log("average of all the amounts is: ", average);
