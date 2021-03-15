let readlineSync = require('readline-sync');
let noOfNoInFirstArray = readlineSync.question(`Enter number of elements in 1st array: `);

let firstArray=[];
for(let i=0;i<noOfNoInFirstArray;i++) {
    let number = readlineSync.question(`Enter a number: `);
    firstArray.push(parseInt(number))
}

console.log(firstArray);

let noOfNoInSecondArray = readlineSync.question(`Enter number of elements in 1st array: `);

let secondArray=[];
for(let i=0;i<noOfNoInSecondArray;i++) {
    let number = readlineSync.question(`Enter a number: `);
    secondArray.push(parseInt(number))
}

console.log(secondArray);


const mergeArray =(firstArray,secondArray)=>{
    let mergeArray=[];
    for(let i of firstArray){
        mergeArray.push(i)
    }
    for(let i of secondArray){
        mergeArray.push(i)
    }
    return mergeArray;
}

console.log(mergeArray(firstArray,secondArray));