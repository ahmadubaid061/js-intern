
let CalculateTip=function(bill){
    let tip=(bill>50 && bill<300)? 15*100/bill:20*100/bill;
    return tip;
}

const bills=[125, 555 , 44 ];

const tips=[CalculateTip(bills[0]),CalculateTip(bills[1]),CalculateTip(bills[1])];

const total=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log('bills are:',bills);
console.log("tips are:",tips);
console.log('totals are:',total);