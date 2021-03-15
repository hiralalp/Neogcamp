var readlineSync = require('readline-sync');
var num1 = readlineSync.question('Enter a 1st number: ');
var num2 = readlineSync.question('Enter a 2nd number: ');
var num3 = readlineSync.question('Enter a 3rd number: ');

function minMax(a, b,c) {
    let num=(a>b?a:b)
    let maxi=(num>c?num:c)
    return maxi
}

const maxi=minMax(num1,num2,num3)

console.log(
`
 maximum no: ${maxi}
`)