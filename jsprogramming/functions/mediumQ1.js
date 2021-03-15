let readlineSync = require('readline-sync');
let noOfNo = readlineSync.question(`Enter number of elements: `);

let listOfNo=[];
for(let i=0;i<noOfNo;i++) {
    let number = readlineSync.question(`Enter a number: `);
    listOfNo.push(parseInt(number))
}

console.log(listOfNo);



const arrayLength=(listOfNo)=>{
    let count=0;
    for(let i of listOfNo){
        count++;
    }
    return count;
}

console.log(arrayLength(listOfNo));




