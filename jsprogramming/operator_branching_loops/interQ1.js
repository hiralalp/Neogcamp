

function FizzBuzz(){
    var s = "";
    
    for(let i=1;i<=100;i++){
        if(i%3==0 && i%5==0){
            s += "FizzBuzz" + ", ";
            
        }
        else if(i%3==0){
            s += "Fizz" + ", ";
            
        }
        else if(i%5==0){
            s += "Buzz" + ", ";
            
        }else{
            s += i + ", ";
        }
    }

    return s;
}

console.log(FizzBuzz())

