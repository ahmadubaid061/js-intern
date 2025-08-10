"use strict";

//sets and maps use the same syntax as array

const map = new Map([
  ["name", "Ubaid"],
  ["Degree", "BSCS"],
  ["ROll No", 11],
]);

map.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

////////////////now for sets/////////////////////////////////////////////
//NOTE: sets do not have key or index but following syntex of forEach loop we will set the key parameter to a '_"

const set = new Set([12, 13, 14, 15, 12, 15]);
set.forEach(function (value, _, set) {
  console.log(`${value} : ${value}`);
});
