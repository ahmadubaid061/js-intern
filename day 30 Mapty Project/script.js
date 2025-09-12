"use strict";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const form = document.querySelector(".form");
const container_Workouts = document.querySelector(".workouts");
const input_type = document.querySelector(".form__input--type");
const input_distance = document.querySelector(".form__input--distance");
const input_duration = document.querySelector(".form__input--duration");
const input_cadence = document.querySelector(".form__input--cadence");
const input_elevation = document.querySelector(".form__input--elevation");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const coords = position.coords; // this gives us the coordinates of th current position
      //const latitude = position.coords.latitude; //this gives us the latitude
      //i ma using destructuring
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      //now creating URL from these coords
      const url = `https://www.google.com/maps?q=${latitude},${longitude}`; //this gives us the current location url
      console.log(url);
    },
    function () {
      alert('we couldn"t get your current location');
    }
  );
}
