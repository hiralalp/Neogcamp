let readlineSync = require('readline-sync');
let a = readlineSync.question('Enter side of Hexagon: ');

const areaOfHexagon=(a)=>Number.parseFloat((3*Math.sqrt(3)/2)*Math.pow(a,2)).toFixed(2) ;

console.log(`Area of Hexagon with side ${a} unit : ` + areaOfHexagon(a));




