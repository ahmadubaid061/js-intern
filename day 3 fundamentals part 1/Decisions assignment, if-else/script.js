alert("plz go to console for result!");
let population=247000000;
let firststring='portugal population is above average:';
let secondstring="Portugal's population is 22 million below average:";

if(population>33000000)
{
    console.log(firststring);
}
else{
    console.log(secondstring);
}

let temp=population;
//changing population to 13 million
population=13000000;
if(population>33000000)
{
    console.log(firststring);
}
else{
    console.log(secondstring);
}

//changing population to 130 million
population=130000000;
if(population>33000000)
{
    console.log(firststring);
}
else{
    console.log(secondstring);
}

//changing population back to original
population=temp;
console.log('population is:',population);