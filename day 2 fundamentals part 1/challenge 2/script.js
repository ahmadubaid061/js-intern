alert('GO to console for Result!');

let markMass=78;
let markheight=1.69;
let johnMass=92;
let johnheight=1.95;

let markBMI=markMass/markheight**2;
let johnBMI=johnMass/johnheight**2;

console.log('Mark BMI is: ',markBMI,'\nJohn BMI is: ',johnBMI);
let higherBMI=markBMI>johnBMI;
if(higherBMI===true)
{
    console.log("yes Mark's' BMI",markBMI ,"is higher than  Jhon's BMI ",johnBMI);
}
else{
    console.log("No Mark's BMI", markBMI ,"is less than Jhon's' BMI",johnBMI);
}