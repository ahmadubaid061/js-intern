"use strict";
let PIA = {
  airline: "pia",
  planes: 300,
  buyplane() {
    this.planes++;
    console.log(this.planes);
  },
};

document
  .querySelector("button")
  .addEventListener("click", PIA.buyplane.bind(PIA));
//cannot just use the above function without bind method because then the 'this keyword' is scoped to the the selected element of html on which eventlistener is called
