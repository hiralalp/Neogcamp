let readlineSync = require('readline-sync');
let str = readlineSync.question(`Enter string: `);



const toSentenceCase=(str)=>{
    let str2 =str[0].toUpperCase();
    for(let i=1;i<str.length;i++)  
        if(str[i-1]===' ')
            str2 += str[i].toUpperCase();
        else
        str2 += str[i];
    return str2; 
}


console.log(toSentenceCase(str));