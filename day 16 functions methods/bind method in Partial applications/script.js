'use strict'
//partial applications are those in which some of the arguments are predefined and just the rest are required during calling the function

function CalculateAge(current,birth){
  return current-birth;
}

//if i want to use current as default parameter i can simply pass that in the funtion but
//sometimes we need to not to define the default value inside parameters
//then bind method is used

const AgeCalculator=CalculateAge.bind(null,2025);
//1- here the null is used for the this keyword for the case when the function is from an object
//since there is no object so we set it to null

//2- the 2025 means that the current parameter is set to 2025 and it will not be passed by user now 

let age=AgeCalculator(2002);
//just one argument as the first one is already defined using bind method()
console.log('the age is: ',age);