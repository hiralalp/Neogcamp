let readlineSync = require('readline-sync');
let noOfNo = readlineSync.question(`Enter number of elements: `);

let listOfNo=[];
for(let i=0;i<noOfNo;i++) {
    let number = readlineSync.question(`Enter a number: `);
    listOfNo.push(parseInt(number))
}

console.log(listOfNo);
let number = parseInt(readlineSync.question(`Enter a number to be replace: `));
let newno = parseInt(readlineSync.question(`Enter a new number: `));
const replace=(listOfNo,number,newno)=>{

    for(let i=0; i<listOfNo.length; i++) {
        if(listOfNo[i]===number)
            listOfNo[i]=newno;
    }
    return listOfNo;
}

console.log(replace(listOfNo,number,newno));
