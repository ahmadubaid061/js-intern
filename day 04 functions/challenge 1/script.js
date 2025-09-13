
let calculateaverage=(score1,score2,score3)=>{

    let average=(score1+score2+score3)/3;
    return average;
}

function checkwinner(team1,team2,average1,average2)
{
    
    if(average1*2<average2)
    {
        return `${team2} win the match 🏆`;
    }

    else if(average1>average2*2)
    {
        return `${team1} win the match 🏆`;
    }
    else{
        return  `No team win's the match`;
    }
}

let average1=calculateaverage(44,23,71);
let average2=calculateaverage(65,54,49);
console.log(`Dolphin's average is ${average1}`);
console.log(`Koala's average is ${average2}`);

let winner=checkwinner("Dolphin's","koala's",average1,average2);
console.log(winner);

console.log("\n")
//Data 2
 average1=calculateaverage(85,54,41);
 average2=calculateaverage(23,34,27);
console.log(`Dolphin's average is ${average1}`);
console.log(`Koala's average is ${average2}`);

 winner=checkwinner("Dolphin's","koala's",average1,average2);
console.log(winner);