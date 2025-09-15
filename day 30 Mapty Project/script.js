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
let map,mapEvent;
//--------------------------------------------------------------------------------------------function for clearing and closing form when needed---------------------------
const clearForm=function() {
  input_cadence.value = "";
  input_distance.value = "";
  input_duration.value = "";
  input_elevation.value = "";
  input_type.value = "running";
  form.classList.add("hidden");
}

//-----------------------------------------------------------------------------------------finding current position coordinates using geoLocation API------------------------
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
      //--------------------------------------------------------------------------------------------------using Leaflet library to display map based on current position-----
      //now to display the map based on these coordinates we need leaflet library --------copying code from there website
      //changing var to const
      //the L.map(here the string should be the id name of the div containing map)
      //const map = L.map("map").setView([51.505, -0.09], 13);
      //inside setview the [51.505, -0.09] are latitude and longitue so by modifying that
      //the last value set to 13 is the zoom level of the map
      const coordinates = [latitude, longitude];
      map = L.map("map").setView(coordinates, 13);
      //------------------------------------------------------------------------------------------------------the map layout design can be changed by L.tileLayer below,,,
      //L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" ---just another layout
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      //replacing [51.5, -0.09] with coordinates array for placing marker on the current location
      // L.marker(coordinates) //takes coordinates array [latitude,longitude]
      //   .addTo(map)
      //   .bindPopup("A pretty CSS popup.<br> Easily customizable.")
      //   .openPopup();

      //-------------------------------------------------------------------------------------------------------------------- diplaying a form on clicking the map------------
      map.on("click", function (Event) {
        mapEvent=Event;   //this is needed in form submition function
         //-------------------------------------------------------------------------------------------------------------------now displaying form
        form.classList.remove("hidden");
        input_distance.focus();//curser is focused on distance field
      });
    },
    function () {
      alert('we couldn"t get your current location');
    }
  );
}

////-------------------------------------------------------------------------------------------------------------- diplaying marker on form submission----------------------
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //the Event(when we click on map ) has a prototype peoperty "latlng" which contaains latitude and longitude
  const { lat, lng } = mapEvent.latlng; //gives us latitude and longitude by destructuring
  L.marker([lat, lng]) //it takes coordinates in the form of an array
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: true,
        closeOnClick: false,
        className: "running-popup",
        // openOnHover: true,
      })
    )
    .setPopupContent("workout")
    .openPopup(); //calls the popup to deisplay a message
  
  clearForm();
});
//-----------------------------------------------------------------------------------changing input type changes input fields(elevation <->cadence)----------------------
input_type.addEventListener("change", function () {
  input_elevation.closest(".form__row").classList.toggle("form__row--hidden");
  input_cadence.closest(".form__row").classList.toggle("form__row--hidden");
});





