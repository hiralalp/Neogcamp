
//beginner - intermediate
//1.Find sum of an array and display the output . Example [10,4,5,2,5,6,9].


const sumOfArray=(arr)=>{
    let sum=0;
    for(let i of arr){
        sum+=i
    }
    return sum;
}

console.log(sumOfArray([10,4,5,2,5,6,9]))


//2.Find average of an array and display the output.
const avgOfArray=(arr)=>{
    let sum=0;
    for(let i of arr){
        sum+=i
    }
    return parseFloat((sum/arr.length).toFixed(2));
}

console.log(avgOfArray([10,4,5,2,5,6,9]))

//3.Find maximum and minimum of an arra
const maxMinOfArray=(arr)=>{

    let max=arr[0];
    let min=arr[0];
    for(let i=1; i<arr.length; i++) {
        if(arr[i]<min)
        min=arr[i];
        else if(arr[i]>max)
        max=arr[i];
    }

    console.log(`minimum:${min} , maximum:${max}`);
}
maxMinOfArray([10,4,5,2,5,6,9])

//4.Find Median and Mode of an array.
//Median : (N+1/2)th term.
//Mode : Most repeating term


const mode =(l)=>{
    dic={}

    for(let i=0; i<l.length; i++) {

        if(dic[l[i]]){
            dic[l[i]]+=1
        }
        else{
            dic[l[i]]=1
        }
    }
    let maxi=Math.max(...Object.values(dic))

    
    for (let [key, value] of Object.entries(dic)) {
         if(value === maxi)
        return key
      }

    

}

console.log("mode is : ",mode([10,4,5,2,5,6,9]))

const median =(a1)=>{

    a1.sort(function(a, b){return a - b})
    let n=a1.length
    
    let median=0
    if(n%2===0)
        median =(a1[(n/2)-1]+a1[((n/2)+1)-1])/2      
    else    
        median = a1[((n+1)/2-1)]    
      
    return median
}

console.log("median is : ",median([1,2,3,4,5,6,7,8,9]))
console.log("median is : ",median([1,2,3,4,5,6,8,9]))




//5.Find sum of two arrays

const sumofTwoArray=(arr1,arr2)=>{

    let s1=sumOfArray(arr1);
    let s2=sumOfArray(arr2);
    return s1+s2;
}
console.log(sumofTwoArray([3,5,2,9,4],[6,2,8,1,3]))

//6.Find number of constants and vowels in a string.

function countVowelsConsonents(str){
    const vowels =['a','e','i','o','u']
    let vowelCount = 0
    let consonentsCount = 0
    for(let letter of str.toLowerCase()){
        if(vowels.includes(letter)){
            vowelCount+=1
        }
        else if(!vowels.includes(letter) && letter!==" "){
            consonentsCount+=1
        }

    }
    console.log("vowels are:",vowelCount)
    console.log("consonents are:",consonentsCount)
}

countVowelsConsonents("aeiou w")

//7.Shift an array by X to right

const shiftByX =(arr,n)=>{
    
    for(let i=0;i<n;i++)
        arr.unshift(arr.pop())
    
    return arr;

}
console.log(shiftByX([1,2,3,4,5],3))


