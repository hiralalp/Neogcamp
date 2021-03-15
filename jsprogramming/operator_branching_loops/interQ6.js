let readlineSync = require('readline-sync');
let no = readlineSync.question('Enter no of elements: ');


const primeOrNot=(no)=>{

    for(let i=2; i<no;i++)
    {
        if(no%i===0)
            return false
    }

    return true
        
}

console.log(primeOrNot(no)?"it is a prime no":"it is a not a prime no")