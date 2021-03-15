const months={
    "January":31,
    "February":"28/29",
    "March":31,
    "April":30,
    "May":31,
    "June":30,
    "July":31,
    "August":31,
    "September":30,
    "Octumber":31,
    "November":30,
    "December":31,
}


var readlineSync = require('readline-sync');
var month = readlineSync.question('Enter month: ');

const findNoOfDays =(month) => {
    return months[month]
}

console.log(findNoOfDays(month));