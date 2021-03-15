var readlineSync = require('readline-sync');
var num = readlineSync.question('Enter a number: ');

const evenOdd =(num)=>num%2===0?"even":"odd";

console.log(evenOdd(num));