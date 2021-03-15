let readlineSync = require('readline-sync');
let d1 = readlineSync.question(`Enter 1st date: `);
let d2 = readlineSync.question(`Enter 2nd date: `);

const convertToDate=(dt)=>{
    var parts =dt.split('/');
    var mydate = new Date(parts[2], parts[1] - 1, parts[0]); 
    return mydate.toDateString();
}

const minDate=(dat1,dat2)=>{

    let date1=convertToDate(dat1)
    let date2=convertToDate(dat2)

    if(date1<date2)
        return dat1
    else if(date1>date2)
        return dat2
    else if(date1===date2)
        return "both are equal"
    else
       return `Please enter the correct value`

}

console.log(minDate(d1,d2));
















