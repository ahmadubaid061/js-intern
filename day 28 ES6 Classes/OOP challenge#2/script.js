"use strict";

class CarCl {
  constructor(make, speed) {
    this.brand = make;
    this.speed = speed;
  }
  //using getter method to convert speed in km/h to mi/h
  get speedUs() {
    this.speed = parseInt(this.speed) / 1.6;
    return `${this.speed} mi/h`;
  }

  //using setter method to convert speed from mi/h to km/h
  set SpeedUS(carSpeed) {
    this.speed = parseInt(carSpeed) * 1.6;
    return `${this.speed} km/h`;
  }
}

const car1 = new CarCl("Ferrari", "120km/h");
console.log(car1.speedUs);
//now setting the speed to a new value
car1.SpeedUS = "100mi/h";
console.log(car1);
console.log(car1.speed);
