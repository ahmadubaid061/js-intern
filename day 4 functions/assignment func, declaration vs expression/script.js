alert("plz go to console for result!");
let worldpopulation=7900;
function worldPopulation1(country,population){
    let percentage=population*100/worldpopulation;
    console.log(`${country} has ${population} million population and it's percentage is ${percentage}`);
}

worldPopulation1("Pakistan",247);
worldPopulation1('India',1462);
worldPopulation1('Bangladesh',175);

// now using function expressions
console.log('\n');
let worldPopulation2= function (country,population)
{
    let percentage=population*100/worldpopulation;
    console.log(`${country} has ${population} million population and it's percentage is ${percentage}`);
}
worldPopulation2("Pakistan",247);
worldPopulation2('India',1462);
worldPopulation2('Bangladesh',175);

