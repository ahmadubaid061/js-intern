const temprature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
//finding maximum value
maximum = function (arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "error") {                           //if content === 'error' then ignore it and move on
      continue;
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};


//finding minimum value
minimum = function (arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "error") {                        //if content === 'error' then ignore it and move on
      continue;
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

// finding amplitude
amplitude = function () {
  return maximum(temprature) - minimum(temprature);
};

console.log("minimum value of temprature is: ", minimum(temprature));
console.log("maximum value of temprature is: ", maximum(temprature));
console.log("the amplitude of temprature is: ", amplitude());
