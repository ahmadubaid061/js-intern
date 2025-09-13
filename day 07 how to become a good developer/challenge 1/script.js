let forcast = "";
printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    forcast += `${arr[i]}ºC in ${i + 1} day, `;
  }
  return forcast;
};

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

let forcast1 = printForecast(arr1);
// restting forcast value to null
forcast = "";
let forcast2 = printForecast(arr2);

console.log("temprature forcast first data is: ", forcast1);
console.log("temprature forcast for data 2 is: ", forcast2);
