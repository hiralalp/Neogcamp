let readlineSync = require('readline-sync');
let noOfEl = readlineSync.question(`Enter number of elements in array: `);

let nums=[];
for(let i=0;i<noOfEl;i++) {
    let number = readlineSync.question(`Enter a number: `);
    nums.push(parseInt(number))
}

console.log(nums);

const sortArray = (nums)=>{
    let n=nums.length;
    let temp=0;
    for(let i=0; i<n;i++) {
        for(let j=0; j<n-i-1;j++){
            if(nums[j] > nums[j+1]) 
            {
                temp=nums[j];
                nums[j]=nums[j+1];
                nums[j+1]=temp;
            }
        }
    }
    return nums
}

console.log(sortArray(nums));