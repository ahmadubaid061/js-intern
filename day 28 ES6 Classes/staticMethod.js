"use strict";

//A static method is a function associated with a class rather than an object instance, meaning it can be called directly on the class itself without creating an object. These methods are ideal for utility functions, such as mathematical operations or other general-purpose tasks, that don't rely on the state or specific data of any particular object.
//Purpose:
//Static methods are used for utility functions, helper methods, or any operation that is general to the class but doesn't depend on the data of any single instance.
class Person {
  constructor(f_name, l_name, birth, grade) {
    this.first_name = f_name;
    this.last_name = l_name;
    this.birthYear = birth;
    this.CGPA = grade;
  }
  //lets define a static method here
  static hello() {
    console.log(`hello ${this.first_name}`);
  }
}
const Ubaid = new Person("Ubaid", "Ahmad", 2002, 3.5);
//i can only call the static method for the general class only
Person.hello(); //it returns Hello undefined as the this keyword is not specific to an object

//now see if i call the same static method on the Ubaid object
//Ubaid.hello(); //Error! hello is not defined for Ubaid

//-----------------------------------------------------Why do we need Static Methods If cannot use on an Object-------------
// Assume a class named MathUtils

class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

// Call the static method
let sum = MathUtils.add(5, 3); // sum will be 8
console.log(sum);
//this how we need static methods
