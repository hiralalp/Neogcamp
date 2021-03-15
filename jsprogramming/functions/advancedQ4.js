let readlineSync = require('readline-sync');
let str = readlineSync.question(`Enter string: `);


let stack=[]
const reverseCharactersOfWord=(str)=>{
    let ans='';
    for(let i=0; i<str.length;i++)
    {   
        if(str[i]==' ')
        {   ans+=" ";
            while(stack.length!==0)
            {
                ans+=stack.pop();
            }
        }
        else{
            stack.push(str[i]);
        }
    }
    ans+=" "
    while(stack.length!==0)
            {
                ans+=stack.pop();
            }
    return ans;
}


console.log(reverseCharactersOfWord(str));