//filter,map,reduce

Array.prototype.filter1 = function(callback,arr) {

    let newArray = [];
    for(let i = 0;i<arr.length;i++) {
        if(callback(arr[i],i,arr))
            newArray.push(arr[i]);
    }
    return newArray;
}

let arr1=[1,11,1,12,13,14,3,4,5,6,7]

console.log(arr1.filter1((e)=>e<10,arr1))

//Q1
obj1={
    motherName: 'mother',
    age:24
}
const sibling=(obj,diff)=>{
    return {...obj,age:obj.age-diff}
}
console.log(sibling(obj1,3))

//Q2
colors=['red','green','blue']
newcolors=['white','yellow']
const addColors=(firstarray,secondarray)=>{
    return [...firstarray,...secondarray]
}

console.log(addColors(colors,newcolors))

//Q3
person={
    name: 'name',
    age:24
}
const birthday=(obj)=>({...obj,age:obj.age+1})

console.log(birthday(person))

//Q4

const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
const newArr=arr.filter((e)=>e<10)
console.log(newArr)

//Q5
const arr3=[1,2,3,4]
const newArr3=arr3.map((ele) => ({ [ele]: ele }))
console.log(newArr3)

//Q6
const arr2=[1,2,3,4]
const newArr2=arr2.reduce((acc,curr)=>acc+curr,0)
console.log(newArr2)

//Q7a
const arr4=[1,2,3]
const sumOfArr =(callback,arr) =>{

    let sum=0;
    for(let i = 0;i<arr.length;i++) {
        if(callback(arr[i],i,arr))
            sum+=arr[i]
    }
    return sum;
}
console.log(sumOfArr((e)=>e%2!==0,arr4))

//Q7b
const arr5=[1,2,3,4,10,15,20,25,30]

console.log(sumOfArr((e,idx)=>idx%2!==0,arr5))


//Q7c
const findBiggest =(arr)=>{
    let maxval=0;
    for(let i = 0;i<arr.length;i++) {
        if(arr[i]>maxval)
            maxval=arr[i]
    }
    return maxval;
}

console.log(findBiggest(arr5))

//Q7d
console.log(arr5.filter((e)=>e%10===0)) 

//Q7e
console.log(arr5.map((e)=>{
    if(e%2===0)
        return e-1
    return e+1
})) 

//Q7f
const sumOfOddEven=(arr)=>{
    return {sumOfOdd:sumOfArr((e)=>e%2!==0,arr),sumOfEven:sumOfArr((e)=>e%2===0,arr),}
}

console.log(sumOfOddEven(arr4))

//Q8

//Q9b
const strArr=['hello','how','are','you','xz','po','ll']
const isVowel =strArr.filter((ele)=>{
    for(let i of ele) {
        if(['a', 'e', 'i', 'o', 'u'].indexOf(i.toLowerCase()) !== -1)
        return true
    }
    return false
})
console.log(isVowel)

//Q9c

const chrLen =strArr.map((ele)=>{return {[ele]: ele.length}})
console.log(chrLen)

//Q10
function giveName(name){
    return (msg) => `${name} ${msg}`
} ;

console.log(giveName('rohan')('is awesome'))


//Q11 (composition)
const giveYourName=(name)=>(name)
const personId=(id,giveYourName)=>(giveYourName+" has a id no:"+id)
console.log(personId("123456",giveYourName("Hira")))













