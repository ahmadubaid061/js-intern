alert("plxz go to console!");
const Mycountry={
    country: 'Pakistan',
    population: 247,
    capital: 'Islamabad',
    language: 'urdu',
    neghbours: ["India","Afghanistan","China","Iran"],

    describe: function(){
       return (`${this.country} has ${this.population}million ${this.language} Speaking people and ${this.neghbours.length} neghbour countries and it's capital is ${this.capital}`);
    },

    CheckIsland: function(){
        return `the country is ${(this.neghbours.length===0)? "an":"not an"} Island`;
    }
    //  CheckIsland: function(){
    //     const Island=(this.neghbours.length===0)? true:false;
    //     return Island;
    // }

};

console.log(Mycountry.describe());
// console.log("the country is",(Mycountry.CheckIsland())? "an":"not an","Island");
console.log(Mycountry.CheckIsland());
