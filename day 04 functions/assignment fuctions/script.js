alert('plz go to console for result!');
function describeCountry(country,population,capitalCity){
    return `${country} has ${population} million people and it's capital is ${capitalCity}`;
}

const Pakistan=describeCountry('Pakistan',247,'Islamabad');
console.log(Pakistan);

const India=describeCountry('India',1464,"Dehli");
console.log(India);

const Bangladesh=describeCountry('Bangladesh',175,'Dhaka');
console.log(Bangladesh);
