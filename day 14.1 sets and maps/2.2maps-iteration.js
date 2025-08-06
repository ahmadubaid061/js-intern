'use strict'
const theMap = new Map([
  ["lastname", "ahmad"],
  [1, "studen"],
  [2, "employ"],
  [true, "yes I am a student"],
  [false, "No I am not a student"],
]);

for(const [keys,values] of theMap){
    if(typeof(keys)==='number'){
        console.log(`the key is ${keys} with value ${values}`);
    }
}