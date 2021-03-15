let readlineSync = require('readline-sync');
let angle1 = parseInt(readlineSync.question(`Enter number of angle1: `));
let angle2 = parseInt(readlineSync.question(`Enter number of angle2: `));
let angle3 = parseInt(readlineSync.question(`Enter number of angle3: `));




const typeOfTriangle=(ang1,ang2,ang3)=>{

    if(ang1+ang2+ang3===180)
    {

    if(((ang1===ang2)?ang1:0)===ang3 || ((ang3===ang2)?ang3:0)===ang1 || ((ang1===ang3)?ang1:0)===ang2)
        console.log("Equilateral Triangle")
    else if((ang1===ang2) || (ang3===ang2) || (ang1===ang3))
        console.log("isosceles Triangle")
    else if(ang1!==ang2!==ang3)
        console.log("scalen Triangle")
    else
        console.log("Enter correct value")

    }else
    console.log("Enter correct value")

}

typeOfTriangle(angle1,angle2,angle3)