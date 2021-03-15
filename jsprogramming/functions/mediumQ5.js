let readlineSync = require('readline-sync');
let str = readlineSync.question(`Enter a string: `);
let idx = parseInt(readlineSync.question(`Enter a index: `));

const charAt=(str,idx)=>{
    if(idx<0 || idx>str.length || !idx)
        return "enter correct index"
    else
        return str[idx]
}

console.log(charAt(str,idx))
















