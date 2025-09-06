"use strict";
//object.create is used to create new object from an existing object constructor and the prototypes are then attached to the new object created

const Object1 = {
  age() {
    return 2025 - this.birhtyear;
  },
  //just like a constructor for declaring properties
  init(name, birth) {
    this.firstName = name;
    this.birhtyear = birth;
  },
};
const newObject = Object.create(Object1); //this will create a new object which will inherit all the prototypes of Object1
console.log(newObject.prototype === Object1.prototype); //it must be true
newObject.init("Ubaid", 2002);
console.log(newObject);
console.log(newObject.age());
