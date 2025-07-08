alert("go to console!");
const neighbours=["Iran","afghanistan","china","india"];

//adding new country utopia to the end of the neighbours array
neighbours.push("utopia");

// removing the new neigbour country
neighbours.pop();

if(!neighbours.includes("Germany"))
{
    console.log('Probably not a central European country :D' );
}

let position=neighbours.indexOf("Iran");
neighbours[position]="Oman";

console.log('neigbour contries are ',neighbours[0],",",neighbours[1],",",neighbours[2],",",neighbours[3]);
