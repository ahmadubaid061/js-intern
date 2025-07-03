alert('Go to console for result!');

let dolphinScore=96 + 108 +89;
let koalascores=88 + 91 + 110;

let dolphinAverage=dolphinScore/3;
let koalaAverage=koalascores/3;

if(dolphinAverage===koalaAverage)
{
    console.log('match ended in a draw');
}
else if(dolphinAverage<koalaAverage)
{
    console.log('koalas win the match');
}
else{
    console.log('dolphins win the match');
}

console.log('BONUS 1 Result');
let minScore=100;
dolphinScore=97 + 112 +101;
koalascores=109 + 95 + 123;
dolphinAverage=dolphinScore/3;
koalaAverage=koalascores/3;

if(dolphinAverage<koalaAverage && koalaAverage>=minScore)
{
    console.log('koalas win the match');
}
else if(dolphinAverage>koalaAverage && dolphinAverage>=minScore)
{
    console.log('dolphins win the match');
}
else{
    console.log('match ended in a draw');
}

console.log('BONUS 2 Result');
if(dolphinAverage===koalaAverage && dolphinAverage>= minScore){
    console.log("match ended in a draw");
}
else if(dolphinAverage>koalaAverage && dolphinAverage>= minScore)
{
    console.log('dolphins win the match');
}
else if(koalaAverage>dolphinAverage && koalaAverage>=minScore)
{
    console.log('koalas win the match');
}
else{
    console.log('Neither one of the teams win the Match');
}