let readlineSync = require('readline-sync');
let noOfNo = readlineSync.question(`Enter number of elements: `);

let listOfNo=[];
for(let i=0;i<noOfNo;i++) {
    let number = readlineSync.question(`Enter a number: `);
    listOfNo.push(parseInt(number))
}

console.log(listOfNo);
let number = parseInt(readlineSync.question(`Enter a number: `));

const indexOf=(listOfNo,number)=>{

    for(let i=0; i<listOfNo.length; i++) {
        if(listOfNo[i]===number)
            return i;
    }
}

console.log(indexOf(listOfNo,number));
