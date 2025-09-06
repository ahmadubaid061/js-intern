"use strict";

//Getters and setters in JavaScript are special methods that allow control over how object properties are accessed and modified. They are defined using the get and set keywords, respectively, and provide a way to encapsulate property access, offering advantages over direct property manipulation or regular methods in certain scenarios.

//----------------------------------------------------------------------------------------In Objets

const object = {
  first_name: "Ubiad",
  last_name: "Ahmad",
  marks: [45, 56, 36, 78],
  //Now getter method

  get fullname() {
    return this.first_name + " " + this.last_name;
  },
  //now setter  method
  set Latest_marks(m) {
    return this.marks.push(m);
  },
};

const Name = object.fullname; //no need of calling like regular functions using ()
console.log(Name); //returns Ubaid Ahmad
object.Latest_marks = 80;
console.log(object.marks); //Now the array contains 80 as well
//--------------------------------------------------------------------------------------------In classes

class Person {
  constructor(f_name, l_name, birth, grade) {
    this.first_name = f_name;
    this.last_name = l_name;
    this.birthYear = birth;
    this.CGPA = grade;
  }
  //setter method to set gpa to 3.5 if less
  set grade(gpa) {
    if (gpa > 3.5) {
      this.CGPA = gpa;
    } else {
      return;
    }
  }

  //now using getter method to get the full name
  get fullName() {
    const new_name = this.first_name + " " + this.last_name;
    return new_name
      .split(" ") //split the full name into two parts
      .map((half) => half[0].toUpperCase() + half.slice(1)) //converts both parts to CamelCase
      .join(" "); //rejoins both parts to a single name
  }
}

const Ubaid = new Person("ubaid", "ahmad", 2002, 3.0);
console.log(Ubaid);
//now setting the gpa
Ubaid.grade = 3.6;
console.log("after modifying CGPA", Ubaid);
console.log(Ubaid.fullName);
