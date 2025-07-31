"use strict";

/////////////////////////////////////////AND (&& ) Operator////////////////////////////////////////////////
// 🔹 Rule of && (Logical AND) in JavaScript:
// 👉 It also evaluates from left to right
// 👉 It returns the first falsy value it finds
// 👉 If no falsy value is found, it returns the last value
const A = 0 && 1; // the left element is 0(falsy value) so it will return 0 which is the falsy value without checking the right one
console.log("A = ", A);

const B = "ubaid" && null; //it will return null which is falsy value because the both sides must be true to return truthy value
console.log("B = ", B);

const C = "Ubaid" && "Ahmad"; //this will return the right value because both side are truthy values and the right side is the last one it evaluated
console.log("C = ", C);

/////////////////////////////////////OR (||) Operator//////////////////////////////////////////////////////
//🔹 Rule of || (Logical OR) in JavaScript:
// 👉 It evaluates left to right
// 👉 It returns the first truthy value it finds
// 👉 If no truthy value is found, it returns the last value (even if falsy)
const D = 0 || 1; // the left element is 0(falsy value) so it will return the right value  which is the truthy one
console.log("D = ", D);

const E = "ubaid" || null; //it will return the left value  which is truthy without checking the right side
console.log("E = ", E);

const F = "Ubaid" || "Ahmad"; //it will return the left value  which is truthy without checking the right side
console.log("F = ", F);

const G = undefined || NaN; //it will check both values which are falsy then it returns the left one whether it is falsy or truthy
console.log("G = ", G);

const I = NaN || undefined; //it will check both values which are falsy then it returns the left one whether it is falsy or truthy
console.log("I = ", I);

const H = null || undefined; //it will check both values which are falsy then it returns the left one whether it is falsy or truthy
console.log("H = ", H);

//////////////////////////  Nullish Coalescing Operator////////////////////////////////////////////////////
// The ?? operator works left to right, just like || and &&.

// Final Rule for ??:
// 1️⃣ If the left value is null or undefined, it returns the right value.
// 2️⃣ If the left value is anything else (even 0, false, empty string), it returns the left value.
// 3️⃣ It does not evaluate the right side if the left side is not null/undefined (short-circuiting)

console.log(null ?? "default"); // "default"  (because null)
console.log(undefined ?? "default"); // "default"  (because undefined)
console.log(0 ?? 100); // 0          (because 0 is NOT null/undefined)
console.log(false ?? true); // false      (because false is NOT null/undefined)
console.log("" ?? "text"); // ""         (because "" is NOT null/undefined)

/////////////////////////////short brain storming//////////////////////////////////
//think about these before executing
console.log("Ubaid" || undefined || "Ahmad");
console.log("Ubaid" && null && "Ahmad");
console.log("Ubaid" ?? null ?? "Ahmad");


