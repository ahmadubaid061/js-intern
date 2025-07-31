"use strict";
///////////////////function finding maximum frequency of a number//////////

// function findMaxFrequency(...rest) {
//   let frequencies = new Array(rest.length).fill(1); //set default frequenies to 1

//   for (let i = 0; i < rest.length; i++) {
//     for (let j = i + 1; j < rest.length; j++) {
//       if (rest[i] == rest[j]) {
//         frequencies[i]++;
//       }
//     }
//   }
//   console.log("array is: ", frequencies);
//   let maxFrequency = frequencies[0];
//   for (let i = 0; i < frequencies.length; i++) {
//     if (frequencies[i] > maxFrequency) {
//       maxFrequency = frequencies[i];
//     }
//   }

//   return maxFrequency;
// }

function findMaxFrequency(...rest) {
  let frequencies = [];

  for (let i = 0; i < rest.length; i++) {
    if (rest[i] === null) continue; // Skip already counted elements

    let count = 1;
    for (let j = i + 1; j < rest.length; j++) {
      if (rest[i] === rest[j]) {
        count++;
        rest[j] = null; // Mark as counted
      }
    }
    frequencies.push(count); // Store frequency only once
  }

  console.log("Frequencies array:", frequencies);

  return Math.max(...frequencies);
}

const numbers = [1, 5, 2, 3, 3, 5, 5, 5, 4, 6, 7, 1, 2, 8, 9, 5];
let maxFrequency = findMaxFrequency(...numbers);
console.log("Maximum frequency of the array is:", maxFrequency);
