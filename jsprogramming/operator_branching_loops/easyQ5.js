var readlineSync = require('readline-sync');
var num1 = readlineSync.question('Enter a 1st number: ');
var num2 = readlineSync.question('Enter a 2nd number: ');
var num3 = readlineSync.question('Enter a 3rd number: ');

function minMax(a, b,c) {
    let num=(a<b?a:b)
    let mini=(num<c?num:c)
    return mini
}

const mini=minMax(num1,num2,num3)

console.log(
`
 minimum no: ${mini}
`)