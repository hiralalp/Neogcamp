let readlineSync = require('readline-sync');



function addTwoNumbers(){
    let no1 = parseInt(readlineSync.question(`Input Number 1: `))
    let no2 = parseInt(readlineSync.question(`Input Number 2: `))
    console.log(`Sum: ${no1+no2}`)
}

function simpleInterest(){
    let P = parseInt(readlineSync.question(`Enter  principal amount (P): `))
    let T = parseInt(readlineSync.question(`Enter Time (T): `))
    let R = parseInt(readlineSync.question(`Enter rate (R): `))
    console.log(`SI: ${(P * T * R) / 100}`)
}

function kineticEnergy(){
    let m = parseInt(readlineSync.question(`Enter mass (m): `))
    let v = parseInt(readlineSync.question(`Enter volume (v): `))
    console.log(`Sum: ${0.5 * m * v * v}`)
}

function FtoC(){
    let F = parseInt(readlineSync.question(`Enter temperature in Fahrenheit : `))
    console.log(`temperature in degree celcius: ${(F - 32) * 5/9}`)
}

function cube(){
    let a = parseInt(readlineSync.question(`Enter side of a cube : `))
    console.log(`
    Area: ${a*a}
    Perimeter: ${4*a}
    Surface Area: ${6*a*a}
    Volume: ${a*a*a}
    `)
}

function profitLoss(){
    let CP = parseInt(readlineSync.question(`Enter cost price: `))
    let SP = parseInt(readlineSync.question(`Enter selling price: `))
    
    if(SP>CP)
        console.log(`${SP-CP} Profit`)
    else if(SP<CP)
        console.log(`${CP-SP} Loss`)
    else if(SP==CP)
        console.log(`No Profit No Loss`)
    else
        console.log(`Please enter correct values`)
}

function sumOfN(){
    let N = parseInt(readlineSync.question(`Enter N : `))
    console.log(`Sum of ${N} natural numbers: ${N*(N+1)/2}`)
}



sumOfN()