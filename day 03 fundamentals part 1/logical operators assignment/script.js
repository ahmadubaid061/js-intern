alert('plz go to console for tacking result!');
let country='portugal';
let population =247000000;
let language="portuguese";
let isIsland=false;

if(population<50000000 && language==='english' && !isIsland)
{
    console.log(`you should live in ${country}`);
}
else{
    console.log(`${country} does not meet your criteria `);
}

//changing country to canada

country='canada';
language='english';
population=20000000;
if(population<50000000 && language==='english' && !isIsland)
{
    console.log(`you should live in ${country}`);
}
else{
    console.log(`${country} does not meet your criteria `);
}
