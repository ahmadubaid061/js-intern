
const Mark={
    Name: 'Mark Miller',
    height: 1.69,
    mass: 78,

    MarkBMI: function(){
        const BMI=this.mass/(this.height**2);
        return BMI;
    }
};
const John={
    Name: 'John Smith',
    height: 1.95,
    mass: 92,
    JohnBMI: function(){
        const BMI=this.mass/(this.height**2);
        return BMI;
    }
};

console.log(Mark.MarkBMI()>John.JohnBMI()? `${Mark.Name}'s BMI( ${Mark.MarkBMI()}) is greater than ${John.Name}'s BMI(${John.JohnBMI()})`:`${John.Name}'s BMI( ${John.JohnBMI()}) is greater than ${Mark.Name}'s BMI(${Mark.MarkBMI()})`);