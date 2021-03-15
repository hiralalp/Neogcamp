let readlineSync = require('readline-sync');
let no = readlineSync.question('Enter no of elements: ');

const factorial=(no)=>{
    let fact=1
    for(let i=1; i<=no; i++)
        fact*=i
    return fact
}

console.log(factorial(no));