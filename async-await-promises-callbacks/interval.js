printInInterval=(msg,time) => {
    setInterval(()=>console.log(msg),time); 
 }
  console.log(printInInterval('hello world',1000))
  
  //...........................
  timerInInterval=(num) => {

    let timesRun = num;
    let interval = setInterval(function(){
    console.log(timesRun);
    timesRun -= 1;
    if(timesRun === 1){
        console.log("bang bang")
        clearInterval(interval);
    }
    }, 1000); 
  }
  
  timerInInterval(5)