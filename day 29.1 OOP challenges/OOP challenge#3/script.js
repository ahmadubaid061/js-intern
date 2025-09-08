"use strict";
//--------------------------------------------------Parent Constructor
const Car = function (make, speed) {
  this.brand = make;
  this.speed = speed;
  //method for brake
  this.brake = function () {
    this.speed = this.speed - 20;
  };
};
//-----------------------------------------------------Child constructor
const EV = function (make, speed, charge) {
  Car.call(this, make, speed); //this will inheret all the properties from the parent (car) constructor
  this.charge = charge;

  //method for charging battery
  this.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
  };
  //now accelarate method

  this.accelerate = function () {
    this.speed = this.speed + 20;
    this.charge--;

    console.log(
      `${this.brand} going with ${this.speed} km/h, with a charge of ${this.charge}%`
    );
  };
};
//-----------------------------------------------------setting prototype
EV.prototype = Object.create(Car.prototype); //for inheretence
//-----------------------------------------------creating a new car
const car1 = new EV("Tesla", 120, 23);
console.log(car1);
//------------------------------------------------calling the accelerate method
car1.accelerate(); //speed 140 and charge 22%
car1.accelerate(); //speed 160 and charge 21%
//------------------------------------------------now calling the charge battery method
car1.chargeBattery(90); //now charge 90%
car1.accelerate(); //speed 180 and charge 89%
//------------------------------------------------calling the brake method
car1.brake(); //speed 160km/h
console.log(car1.speed); //160
