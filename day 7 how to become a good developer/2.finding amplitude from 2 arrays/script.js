const temprature1 = [3, 5, 1, -1, "error"];
const temprature2 = [4,6,2,9,8];

//merging both arrays into a single array
mergeArrays=function(arr1,arr2)
{
    return arr1.concat(arr2);
}
//finding maximum value
maximum = function (arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "error") {
      //if the value is 'error' then ignore it
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
    if (arr[i] === "error") {
      //if the value is 'error' then ignore it
      continue;
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};
const temprature3=mergeArrays(temprature1,temprature2);
console.log('given tempratures are: ',temprature3);

//finding amplitude;
amplitude = function () {
  return maximum(temprature3) - minimum(temprature3);
};

console.log("minimum value of temprature is: ", minimum(temprature3));
console.log("maximum value of temprature is: ", maximum(temprature3));
console.log("the amplitude of temprature is: ", amplitude());