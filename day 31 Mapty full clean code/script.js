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
//---------------------------------------creating a workout class from which then we can create child classes for running and cycling
class Workout {
  date = new Date();
  id = (Date.now() + " ").slice(-10); //+ operator converts numbers to strings
  constructor(coords, distance, duration) {
    this.coords = coords; //[lat,lng]
    this.distance = distance;
    this.duration = duration;
  }
}
//-----------------------------------------------------child class for running
class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }
  //method for pace
  calcPace() {
    this.pace = this.cadence / this.duration;
  }
}
//-----------------------------------------------------child class for Cycling
class Cycling extends Workout {
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevtion_Gain = elevation;
    this.calcSpeed();
  }

  calcSpeed() {
    this.speed = this.elevtion_Gain / (this.duration / 60);
  }
}
//-----------------------------------class app Archetichture
class App {
  #map;
  #mapEvent;
  constructor() {
    this._getPosition();
    input_type.addEventListener("change", this._toggleElevation);
    form.addEventListener("submit", this._newWorkout.bind(this));
  }
  //------------------------------------------------------------class method-1 for get current position

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('we couldn"t get your current location');
        }
      );
    }
  }
  //----------------------------------------------------------------toggle method-2 for elevation vs cadence
  _toggleElevation() {
    input_elevation.closest(".form__row").classList.toggle("form__row--hidden");
    input_cadence.closest(".form__row").classList.toggle("form__row--hidden");
  }
  //------------------------------------------------------------new workout method-3 is added on submitting form
  _newWorkout(e) {
    e.preventDefault();

    const { lat, lng } = this.#mapEvent.latlng;

    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: true,
          closeOnClick: false,
          className: "running-popup",
        })
      )
      .setPopupContent("workout")
      .openPopup();
    this._clearForm();
  }
  //-------------------------------------------------method-4 creating and displaying map using leaflet library
  _loadMap(position) {
    const coords = position.coords;

    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    console.log(url);
    const coordinates = [latitude, longitude];
    //---------------------------------------------------------------constructing map

    this.#map = L.map("map").setView(coordinates, 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // diplaying a marker on click
    this.#map.on("click", this._showform.bind(this));
  }
  //---------------------------------------------------------------method-5 show form on clicking on map anywhere
  _showform(e) {
    this.#mapEvent = e;

    form.classList.remove("hidden");
    input_distance.focus();
  }
  //----------------------------------------------------------------method-6 to clear form when it is submitted
  _clearForm() {
    input_cadence.value = "";
    input_distance.value = "";
    input_duration.value = "";
    input_elevation.value = "";
    input_type.value = "running";
    form.classList.add("hidden");
  }
}
//-----------------------------------------------------------------------creating a real object from the App class
const app = new App();
