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

let players1 = [...game.players[0]];
let players2 = [...game.players[1]];
//instead also can do like this
// let [players1,players2]=game.players;
let [gk, ...otherplayers] = players1;
let allPlayers = [...players1, ...players2];

let players1Final = [...players1, "Thiago", "Countinho", "Perisic"];
///////////////////////////////creating the odds variables/////////////////////////////////////////////////
const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;
console.log(
  "the odds are",
  team1,
  draw,
  team2,
  "for team1 ,draw and team2 respectively"
);
///////////////////////////////////function to print the Goals/////////////////////////////////////////////
function printGoals() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(`player number#${i + 1}: ${arguments[i]}`);
  }
  console.log(`In total ${arguments.length} Goals scored.`);
}

//other way of writing the print function
// function printGOals(...rest) {
//   console.log(...rest);
//   console.log(`In total ${rest.length} Goals scored.`);
// }

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Lewandowski", "Gnarby", "Lewandowski", "Hummels");

//////////////////////////////finding the winner without if/else or ternary oprator/////////////////////
// here we can use logical operator
team1 < team2 && console.log("team1 is more likely to win the game!"); //if team1 is less than team2 then it will check the right side and on the right side as a string is always true so it will print the string then
team2 < team1 && console.log("team2 is more likely to win the game!");
