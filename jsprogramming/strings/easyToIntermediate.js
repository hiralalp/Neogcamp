
function toUpper(str){
    let res = str.toUpperCase()
    console.log(res)
}


toUpper("hello")

function appendTwoString(str1, str2){
    console.log(str2+str1)
}

appendTwoString("hello", "world")


const countChars =(str)=>str.length;

console.log(countChars('hello')) 

const strToNumber =(str)=>parseInt(str)
console.log(strToNumber("123"))

const deleteVowels =(str)=>{
    let finalString ='';
    for(let i=0; i<str.length; i++){
        if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u')
        continue;
        else
        finalString+=str[i];

    }
    return finalString;
}

console.log(deleteVowels("hello"))



function PwdHasNo(pwd) {
    
    if(/\d/.test(pwd))
        return true;
    else
        return false;
}
let pwd1="pass1"
console.log(PwdHasNo(pwd1))


function lenOfStr(listOfString) {

    strObj={}

    listOfString.forEach((str) => {
        strObj[str] =str.length
    })

    let mini=Math.min(...Object.values(strObj))
    let maxi=Math.max(...Object.values(strObj))

    
    for (let [key, value] of Object.entries(strObj)) {
        if(value === mini)
        console.log(`string with minimum length: ${key} (${value})`);
        else if(value === maxi)
        console.log(`string with maximum length: ${key} (${value})`);
      }
    
    
}

listOfString=['hello','world','aaaaaaaa','qs']

lenOfStr(listOfString)


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


const lenGreaterThan7=(str)=>str.length>7?true:false;
console.log(lenGreaterThan7("neogcamp")) 


function copiesSmallerIntoBigger(str1, str2){

    console.log("string 1 :",str1)
    console.log("string 2 :",str2)

    str2=str1


    console.log("string 1 :",str1)
    console.log("string 2 :",str2)
}

copiesSmallerIntoBigger("Hello","world");



const palindrome =(str)=>{

    let start=0
    let end=str.length-1
    let flag=true
    while(start<end){

        if(str[start]!==str[end]){
            flag=false
            break
        }
        start++
        end--
    }
    return flag
}

console.log(palindrome("qaaaaaaa"))



function subString(str){

    for(let len=1;len<=str.length;len++){

        for(let i=0;i<str.length-len+1;i++){

            let j=i+len-1
            let ans=''
            for(let k=i;k<j+1;k++){
                ans+=str.charAt(k)
            }
            console.log(ans)
        }
    }
}

subString("abcd")

const removeTime =(str)=>str.split(",")[0]
console.log(removeTime("Wed April 15, 7pm"))



const maskString =(str)=>str.slice(0,str.length-4)+"####"
console.log(maskString("5565534276455423"))


function capitalize(str){
    let finalString='';
    let count=0;
    for(let i=0;i<str.length;i++){

        if(count<6 && str.charAt(i)!==" ")
        {
            finalString+=str[i].toUpperCase()
            count++
        }  
        else
            finalString+=str[i] 

    }

    return finalString
}

console.log(capitalize("tic tac toe is a fun game"))

