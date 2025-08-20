"use strict";
const balance = 245723.879;
const options = {
  style: "currency",
  currency: "PKR",
  useGrouping: false, //removes the seperators
};
const local = navigator.language;

console.log(
  "the Balance in a nice format is:",
  new Intl.NumberFormat(local, options).format(balance) //returns PKR 245723.88
);

//=============================for temprature========================================================
const temprature = 40;
const temOptions = {
  style: "unit",
  unit: "celsius",
};

console.log(
  "Temprature nicely formated is: ",
  new Intl.NumberFormat(local, temOptions).format(temprature) //returns 40°C
);

//====================================for distance=====================================================

const distance = 120;
const disOptions = {
  style: "unit",
  unit: "kilometer-per-hour",
  unitDisplay: "short",
};
console.log(
  "Distance nicely formated is: ",
  new Intl.NumberFormat(local, disOptions).format(distance) //returns  120 km/h
);
