"use strict";
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = Number(this.speed) + 10;
  console.log(
    `After increasing speed of ${this.make} by 10 new speed is: ${this.speed} km/h`
  );
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(
    `After decreasing speed of ${this.make} by 5 new speed is: ${this.speed} km/h`
  );
};

//---------creating car1 and car2
const car1 = new Car("BMW", 120);
const car2 = new Car("Merceedes", 95);

car1.accelerate(); //increases to 130
car1.brake(); // decrements to 125
car1.brake(); // decrements to 120
car1.brake(); // decrements to 115
car1.brake(); // decrements to 110
car1.accelerate(); //increments to 120
car2.brake(); //decrements to 90
