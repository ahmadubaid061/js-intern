"use strict";
//--------------------------------------------------Parent Class
class CarCl {
  constructor(make, speed) {
    this.brand = make;
    this.speed = speed;
  }
  //method for brake
  brake() {
    this.speed = this.speed - 20;
    return this;
  }
}

//-----------------------------------------------------Child Class
class EVCl extends CarCl {
  #charge; //making charge field private
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed = this.speed + 20;
    this.#charge--;

    console.log(
      `${this.brand} going with ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const car1 = new EVCl("Rivian", 120, 23);
// console.log(car1);
// car1.brake();
// car1.chargeBattery(50);
// console.log(car1);
// car1.accelerate();
// console.log(car1);

//------------------------------------trying chaining method
car1.brake().chargeBattery(50).accelerate().accelerate();
//car1.brake() reduce speed to 100km/h
//then chargebattery() updates charge to 50 %
//then accelarate increases speed back to 120 km/h and charge reduce to 49%
//then again accelarate increases speed to 140 km/h and charge reduce to 48%

console.log(car1); //result should be speed: 140 km/h , chare: 48%,
