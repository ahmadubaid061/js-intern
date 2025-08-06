"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
///////////////////////////////////TAsk 1/////////////////////////////////////////////////////////
//. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

// for (let key in game.scored) {
//   console.log(`Goal ${Number(key) + 1}: ${game.scored[key]}`);
// }

Object.keys(game.scored).forEach((key) => {
  console.log(`Goal ${Number(key) + 1}: ${game.scored[key]}`);
});
//////////////////////////////////////Task 2/////////////////////////////////////////////////////////////
// Use a loop to calculate the average odd and log it to the console
let sum = 0;
function average() {
  let oddvalues = Object.values(game.odds);
  oddvalues.forEach((values) => {
    sum += values;
  });
  return sum / oddvalues.length;
}

const averge = average();
console.log("average is: ", averge);

// //task 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

Object.entries(game.odds).forEach(([key, values]) => {
  const teamstr = key === "x" ? "draw" : `victory ${game[key]}`; //ternary operator
  console.log(`odd of  ${teamstr}: ${values}`);
});

//////////////task 4////////////////////////////////////////////////////////////////////////

// Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// }
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2

let scores = {};
for (let player of game.scored) {
  scores[player] = (scores[player] || 0) + 1;
}
console.log(scores);
