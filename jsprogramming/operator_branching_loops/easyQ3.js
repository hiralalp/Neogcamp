var readlineSync = require('readline-sync');
var num1 = readlineSync.question('Enter a 1st number: ');
var num2 = readlineSync.question('Enter a 2nd number: ');


function minMax(a, b) {
    if(a < b)
        return `${b} is greater than ${a}`
    else if(a > b)
        return `${a} is greater than ${b}`
    else if(a ===b)
        return "both are equal"
    else
        return "please enter correct number"
}

console.log(minMax(num1,num2));