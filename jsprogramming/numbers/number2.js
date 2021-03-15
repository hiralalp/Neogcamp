let readlineSync = require('readline-sync');

function nOddNumbers(){
    let no = parseInt(readlineSync.question(`Input Number: `))
    n=1
    while (no>0) {
        console.log(n)
        n+=2
        no-=1
    }

}
nOddNumbers();

function sumOfDigitInString(){
    let str = readlineSync.question(`Input string: `)
    let sum=0;
    for (let i = 0; i < str.length; i++) {
        sum+=parseInt(str[i])
      }
    return sum;

}
console.log(sumOfDigitInString());


function reverseNumberString(){
    let str = readlineSync.question(`Input string: `)
    let reverse='';
    for (let i = str.length-1; i >=0 ; i--) {
        reverse+=str[i]
      }
    console.log(reverse);

}
reverseNumberString();


function reverseNumberByXPosition(){
    let str = readlineSync.question(`Input string: `)
    let no =parseInt(readlineSync.question(`Input Number: `)) 
    
    let finalString='';

    finalString+=str.slice(no-1,str.length);
    finalString+=str.slice(0,no);
    console.log(finalString);

}
reverseNumberByXPosition();

function decimalToBinary(){
    let no =parseInt(readlineSync.question(`Input Number: `)) 
    
    const result = no.toString(2);

    console.log('Binary:' + ' ' + result);

}
decimalToBinary();

function octalToDecimal(){
    let octal =readlineSync.question(`Input Number: `) 
    
    console.log(parseInt(octal,8));

}
octalToDecimal();
























