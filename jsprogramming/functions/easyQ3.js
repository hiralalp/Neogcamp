let readlineSync = require('readline-sync');
let sentence = readlineSync.question('Enter a sentence: ');


const noOfWords=(sen)=>{
    let count = 0;
    for (const element of sen) {
        if(element===" ")
            count++;
      }
    return count+1;
}

console.log(noOfWords(sentence))