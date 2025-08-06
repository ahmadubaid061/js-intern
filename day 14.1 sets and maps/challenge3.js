"use strict";
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
//no duplicates means that the array is actually a set

const events = new Set(gameEvents.values());
console.log("the events happened in the game are: ", events);

// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.

gameEvents.delete(64);
console.log(gameEvents);

// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
let sum = 0;
let average = 0;
gameEvents.forEach((value, keys) => {
  sum += keys;
});

console.log(sum);
average = sum / 90;
console.log(`An event happened on average, every ${average} minutes `);
//since event at min 64 was deleted so thje average is not 9 now

// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17 ⚽ GOAL:

gameEvents.forEach((values, keys) => {
  keys > 45
    ? console.log(`[SECOND HALF] ${keys}, ${values}`)
    : console.log(`[First HALF] ${keys}, ${values}`);
});
