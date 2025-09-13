alert('Plz go to console!');
const Mycountry={
    country: 'Pakistan',
    population: 247,
    capital: 'Islamabad',
    language: 'urdu',
    neghbours: ["India","Afghanistan","China","Iran"]
    
}

console.log(`${Mycountry.country} has ${Mycountry.population}million ${Mycountry.language} Speaking people and ${Mycountry.neghbours.length} neghbour countries and it's capital is ${Mycountry.capital}`);

//increasing population 
console.log("increased population using Dot method");
Mycountry.population+=2;
console.log(Mycountry.population,'million');

//Decreasing population using bracket method

console.log("decreasing population using Bracket method");
Mycountry['population']-=2;
console.log(Mycountry["population"],"millions");
