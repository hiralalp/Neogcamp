let readlineSync = require('readline-sync');
let a = readlineSync.question('Enter a: ');
let b = readlineSync.question('Enter b: ');


const power=(a,b)=>{
        let ans=1
        for(let i=0;i<b;i++){
            ans=ans*a
        }
        return ans
}


console.log(`${a} raise to ${b} = `+power(a,b));