const populations = [247, 1462, 175];
let percentages = [];

const worldpopulation = 7100;

percentageoFcountry = function (population) {
  let percentage = (population * 100) / worldpopulation;
  return percentage;
};

for (let i = 0; i < 3; i++) {
  percentages[i] = percentageoFcountry(populations[i]);
}

console.log(`percentages are: ${percentages}`);
let country;
for (let i = 0; i < 3; i++) {
  if (i === 0) {
    country = "pakistan";
  } else if (i === 1) {
    country = "India";
  } else if (i === 2) {
    country = "bangladesh";
  }
  console.log(`Percentage of ${country} is: ${percentages[i]}`);
}
