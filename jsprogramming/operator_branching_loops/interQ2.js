let readlineSync = require('readline-sync');
let no = readlineSync.question('Enter no: ');


function printTriangle(no){
    
    for(let i=0; i<=no; i++){
        let ans='';
        for(let j=0; j<i; j++){
            ans+="*";
        }
        console.log(ans);
    }
}

printTriangle(no)












