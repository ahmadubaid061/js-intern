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
      //const url = `https://www.google.com/maps?q=${latitude},${longitude}`; //this gives us the current location url
      //now to display the map based on these coordinates we need leaflet library --------copying code from there website
      //changing var to const
      //the L.map(here the string should be the id name of the div containing map)
      //const map = L.map("map").setView([51.505, -0.09], 13);
      //inside setview the [51.505, -0.09] are latitude and longitue so by modifying that
      //the last value set to 13 is the zoom level of the map
      const coordinates = [latitude, longitude];
      const map = L.map("map").setView(coordinates, 13);
      //-------------------------------the map layout design can be changed by L.tileLayer below,,,
      //L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" ---just another layout
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      //replacing [51.5, -0.09] with coordinates array for placing marker on the current location
      L.marker(coordinates)
        .addTo(map)
        .bindPopup("A pretty CSS popup.<br> Easily customizable.")
        .openPopup();
    },
    function () {
      alert('we couldn"t get your current location');
    }
  );
}

