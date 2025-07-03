alert("PLZ GO to console for Result!");
let bill;
let tip;
console.log('Test : 1');
bill=275;
//using ternary operation as if/else not allowed
(bill>=50 && bill<=300)?tip=bill*15/100 : tip=bill*20/100;
console.log('the bill is: ',bill,"and tip is: ",tip);

console.log('Test : 2');
bill=40;
(bill>=50 && bill<=300)?tip=bill*15/100 : tip=bill*20/100;
console.log('the bill is: ',bill,"and tip is: ",tip);

console.log('Test : 3');
bill=430;
(bill>=50 && bill<=300)?tip=bill*15/100 : tip=bill*20/100;
console.log('the bill is: ',bill,"and tip is: ",tip);

