"use strict";
//some time we don't need to pass some properties as arguments rather just set them to a default cvalue inside the class and then can change them outside manually

class Account {
  constructor(owner, pin) {
    this.owner = owner;
    this.pin = pin;
    //now for movements like deposits and withdrawals
    this.movements = []; //by default it si  null array but can be modiufied later
  }

  //method for deposit
  deposit(val) {
    this.movements.push(val);
    console.log(`${val} deposited successfully`);
  }

  //method for withdrwal
  withdrawal(val) {
    this.movements.push(-val);
    console.log(`${val} withrawn successfully`);
  }
}

//--------------------------creating new object

const acc1 = new Account("Ubaid", 1111);
console.log(acc1);

//depositing money

acc1.deposit(2000);
console.log(acc1); //now the movements array contains 2000 at index 0

//making a withdrawal

acc1.withdrawal(1000);
console.log(acc1); //movements array now contains two movwements
