"use strict";
//protected properties are some properties whose declaration start with a leasing '_'
//this doesnot automatically protect the property to be accessed outside the class but it gives the user a reminder that he should not be accessing it outside the class

class Account {
  constructor(owner, pin) {
    this.owner = owner;
    this.pin = pin;
    //now for movements like deposits and withdrawals
    this._movements = []; //by default it si  null array but can be modiufied later
  }

  //method for deposit
  deposit(val) {
    this._movements.push(val);
    console.log(`${val} deposited successfully`);
  }

  //method for withdrwal
  withdrawal(val) {
    this._movements.push(-val);
    console.log(`${val} withrawn successfully`);
  }
}
//here the _movements are protected means we should not access it directly from outside the class but instead we should use the deposit and withdrawal methods for modifying the movements array

const Ubaid = new Account("Ubaid", 1111);
Ubaid._movements.push(25); //i can do it here but it is a bad practice
Ubaid.deposit(25); //i need to do this instead

console.log(Ubaid);
