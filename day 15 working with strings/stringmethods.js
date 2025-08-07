"use strict";
/////////////////////////strings/////////////////////////////////////////////
//strings are not structures just premitives but when we call a method upon a string it is automatically converted to an object

const string = "my name is Ubaid";
const newStr = new String(string.slice(-5));
console.log("the new string is: ", newStr, " and it is a ", typeof newStr);
//it will return type as object

///////////////////////////////.length && .indexof()//////////////////////////////
console.log("the length of the string is: ", string.length);
console.log('the index "b" is: ', string.indexOf("b"));
console.log('the last occurence of "a" is: ', string.lastIndexOf("a"));

///////////////////////////////include(), startwith()///////////////////////////////
//returns true or false
console.log('the string includes "ubaid": ', string.includes("Ubaid"));
console.log('the stirng starts with "m": ', string.startsWith("m"));
console.log('the string ends with "d": ', string.endsWith("d"));

///////////////////////////////.slice////////////////////////////////////////////
console.log("the name is: ", string.slice(10));
console.log("the word first two letters are", string.slice(0, 2));
console.log("the name is: ", string.slice(-5)); //start from  5th index from backward

/////////////////////////////////uppercase && Lowercase///////////////////////////
console.log("the string into uppercase is: ", string.toUpperCase());
console.log("the string back to lower case is: ", string.toLowerCase());

////////////////////////////////trim()////////////////////////////////////////////
const university = "      sscaseit        ";
console.log(university.trim()); // ignores the spaces before and after a stirng

////////////////////////////////replace()////////////////////////////////////////
console.log(
  'the string after replaceing "A" with "B" is: ',
  string.replace("a", "b")
); // only replace the first occurrence

//////////////////////////////replaceALL() and Replace global/////////////////////
//both works the same
console.log(
  'the string after replaceing  all occurence of "A" with "B" is: ',
  string.replaceAll("a", "b")
);
console.log(
  'the string after replaceing "A" with "B" is: ',
  string.replace(/a/g, "b")
);
