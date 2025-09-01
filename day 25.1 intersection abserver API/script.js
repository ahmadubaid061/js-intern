"use strict";
const section2 = document.getElementById("item2");
//-------instersection abserver API
//is a method used to abserve a specific portion of our html document
//--------------------  1- Creating the function--------------------

const observerCallback = function (entries, observer) {
  //it takes two arguments the first one is entries from the observerOption object and the second one is the observer itself
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
      document.querySelector("body").style.backgroundColor = "gray";
    } else {
      document.querySelector("body").style.backgroundColor = "white";
    }
  });
};

const ObserverOptions = {
  //this is an object where we define properties on  when the above call back functions will be called
  root: null, //this means that when the target element is intersectung the root at any point
  threshold: 0.1, //this means when the intersection is atleast 10% then the cal back is called;
};

const observer = new IntersectionObserver(observerCallback, ObserverOptions);
//it takes two arguments the callback function and the observerOptions and calls the callback function whenever the observer options ARE achieved

//now call the observer on a section to see it practice
observer.observe(section2);
