let readlineSync = require('readline-sync');
let str = readlineSync.question(`Enter string: `);
let no = parseInt(readlineSync.question(`Enter by how much you want to shift string: `));


const encodeString=(str,no)=>{
    let str2 =""
    for(let i=0;i<str.length;i++)  
        str2 +=String.fromCharCode(str.charCodeAt(i)+no)
        
    return str2; 
}


console.log(encodeString(str,no));