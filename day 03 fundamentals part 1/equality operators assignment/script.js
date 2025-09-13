alert('plz go to console for result!');
let numneighbers=prompt('How many neighbour countries does your country have?');
console.log('number of neghber countries: ',numneighbers);

if(numneighbers==0)
{
    console.log('No borders!');
}
else if(numneighbers==1)
{
    console.log('Only 1 border!');
}
else if(numneighbers>1)
{
    console.log('More than 1 border');
}
else{
    console.log("Error! please input a valid value");
}

// changing operator to ===
if(numneighbers===0)
{
    console.log('No borders!');
}
else if(numneighbers===1)          // === restrict type coersion so '1' is not equals 1 then
{
    console.log('Only 1 border!');
}
else if(numneighbers>1)
{
    console.log('More than 1 border');
}
else{
    console.log("Error! please input a valid value");
}

//changing string to nunmber

numneighbers=Number(numneighbers);
if(numneighbers===0)
{
    console.log('No borders!');
}
else if(numneighbers===1)
{
    console.log('Only 1 border!');
}
else if(numneighbers>1)
{
    console.log('More than 1 border');
}
else{
    console.log("Error! please input a valid value");
}