alert('plz go to console!');
let worldpopulation=7900;
function percentageofWorld(population){
    percentage=population*100/worldpopulation;
    return percentage;
}

function describecountry(country,population){
    let countrypercentage=percentageofWorld(population);
    return `${country} has ${population} million people and it's percentage is ${percentage}`;
}

const PakistanDescription=describecountry("Pakistan",247);
const IndiaDescription=describecountry("India",1462);
const BangaladeshDescription=describecountry("Bangladesh",175);

console.log(`${PakistanDescription},
${IndiaDescription},
${BangaladeshDescription}`);