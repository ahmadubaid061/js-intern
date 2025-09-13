const populations = [247, 1462, 175];
let percentages = [];

const worldpopulation = 7100;

percentageofCountry = function (population) {
  let percent = (population * 100) / worldpopulation;
  return percent;
};

let i = 0;
while (i !== populations.length) {
  let x = percentageofCountry(populations[i]);
  percentages.push(x);
  i++;
}

console.log(percentages);
