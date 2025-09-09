"use strict";

//there are four types of privacy in classes
//1-public fields... (instances)
//2-private fields
//3-public methods
//4-private methods

class Account {
  //to make intances private they must be declared before constructor with a leading'#'
  #pin; //now pin cannot but accessed outside the class but inside instead
  constructor(owner, pin, birth) {
    this.owner = owner;
    this.#pin = pin;
    this.birthyear = birth;
  }
  //now methods
  //a private method
  #age() {
    return 2025 - this.birthyear;
  }

  //now a public method
  licenceELigibility() {
    const age = this.#age(); //the age() method is accessable here but cannot access it outside
    age > 18
      ? console.log(
          `hello ${this.owner}! you are eligible for Driving Licence.`
        )
      : console.log(
          `hello! ${this.owner}! you are not yet Eligible for driving Licence`
        );
  }
}

//-----------------------------------------------------creating two objects with ages 18 + and below
const Ubaid = new Account("Ubaid", 1111, 2002);
const Ali = new Account("Ali", 2222, 2010);
console.log(Ubaid); //this wouldn't show pin because it is private
console.log(Ali);
//-----------------------------------------------------lets try to access the private fields and methods
//console.log(Ubaid.#pin);  //error private field
//console.log(Ali.#age());  //error private method

//-----------------------------------------------------accessing public methods
Ubaid.licenceELigibility(); //eligible
Ali.licenceELigibility(); //Not eligible
