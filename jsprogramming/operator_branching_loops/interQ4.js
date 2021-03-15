let readlineSync = require('readline-sync');
let no = readlineSync.question('Enter no of elements: ');



const fibonacci =(no)=>{

    let n1=0,n2=1,n3,ans='';
    
    ans+=`${n1} ${n2}`

    for(let i=2; i<no; i++)
    {
        n3=n1+n2;
        ans+=" "+n3;
         
        n1=n2
        n2=n3
    }
    console.log(ans)

}

fibonacci(no)