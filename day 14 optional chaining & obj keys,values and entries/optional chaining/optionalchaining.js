"use strict ";

const arr = ["apple", "banana"];
console.log(arr?.[0]); // "apple"
console.log(arr?.[2]); // undefined

////////////////////////////////////objects
const obj = {
  name: "Ubaid",
  age: 23,
  height: 5.8,
  marks: {
    DSA: 89,
    Coal: 79,
    physics: 65,
  },
};

const bioMarks = obj.biomarks?.marks.DSA;
//here before continuing first the ? operator checks if the biomarks property is nullish if so it doesn't continue and returns undefinded immediatly
console.log(bioMarks);

///////////////////////Using nullish coalescing operator to print something instead of undefined

const algebra =
  obj.algebramarks?.marks.physics ?? "Algebra marks not available";
console.log(algebra);

// now it will retunr 'algebra marks not available' instead of undefined

////////////////////////////using for object methods/////////////////////
const obj2 = {
  name: "ahmad",
  age: 11,
  current: 2025,
  birthdate() {
    return this.current - this.age;
  },
};

const AhmadBirthdate = obj2.birthdate?.(); //checks if obj.birthdate is available or not then continues if available
console.log(AhmadBirthdate);

const students={
    name:'ahmad',
    age:{
        student1:23
    }
}
const Age=students?.age?.student2??20;
console.log(Age);