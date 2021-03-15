let readlineSync = require('readline-sync');
let no = readlineSync.question('Enter no: ');



const printTables =(no)=>{

    for(i=1; i<=12; i++)
    {
        console.log(`
            ${no} x ${i} = ${i*no}
        `)
    }
};

printTables(no); 