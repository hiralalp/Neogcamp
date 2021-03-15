let readlineSync = require('readline-sync');
let day = readlineSync.question('Enter days of the week: ');


days={
    "monday":false,
    "tuesday":false,
    "wednesday":false,
    "thursday":false,
    "friday":false,
    "saturday":true,
    "sunday":true
}

const weekDayOrNot=(day)=>{

    if(days[day.toLowerCase()])
        return true;
    
    return false;
}

console.log(weekDayOrNot(day)?"it is a weekend":"it is a weekday");











