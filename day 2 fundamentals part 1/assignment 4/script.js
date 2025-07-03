alert('go to console for result!');
let country='Pakistan';
let population=247000000;
let halfpopulation=population/2;

console.log('half population is: ',halfpopulation);
population++;
console.log("Updated population is: ",population);

let finlandPopulation=6000000;
console.log(population > finlandPopulation);
//saving result in a new variable
let boolean=population > finlandPopulation;
if(boolean===true) console.log('yes my country has more population than finland');

let averagePopulation=33000000;
if(population<averagePopulation)
{
    console.log('yes my country has less population than average country');

}
else{
    console.log('no My country has more population than the average country');
}

let description='Portugal is in Europe, and its 11 million people speak portuguese';
console.log(description);