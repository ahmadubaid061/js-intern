const populations=[247,1462,175,60];
console.log(populations.length===4 ? true:false);
let worldpoplation=7900;

function worldpercentage1(population){
     let percentage=population*100/worldpoplation;
     return percentage;
  
}

let percentages=[worldpercentage1(populations[0]),worldpercentage1(populations[1]),worldpercentage1(populations[2]),worldpercentage1(populations[3]),];

console.log("percentage of country 1",percentages[0]);
console.log("percentage of country 2",percentages[1]);
console.log("percentage of country 3",percentages[2]);
console.log("percentage of country 4",percentages[3]);
