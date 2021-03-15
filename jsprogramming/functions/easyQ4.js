let readlineSync = require('readline-sync');
let noOfNo = readlineSync.question(`Enter number of elements: `);

let listOfNo=[];
for(let i=0;i<noOfNo;i++) {
    let number = readlineSync.question(`Enter a number: `);
    listOfNo.push(parseInt(number))
}
console.log(listOfNo);

const findMin=([...nums])=>{

    let mini=nums[0]
    for(let i of nums) {
        if(i<mini) {
            mini=i
        }
        
    }

    return mini
}

console.log(findMin(listOfNo))
