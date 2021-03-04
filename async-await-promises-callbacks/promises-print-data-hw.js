//ex2: write your own function which takes a callback

const strLength = (name,func) =>{
  return `OMG! my name is ${func(name)} char long!`
}

//console.log(strLength("Hiralal",(name)=> {return name.length;}))

//live ex3: function which takes two callbacks

const willThanosKillMe=(name,successF,failureF)=>{
  if(name.length%2===0){
    successF()
  }else{
    failureF()
  }
}

//console.log(willThanosKillMe("Hiralal",()=>console.log("Yay! I am alive!"),()=>console.log("Give my bose speakers and headphones to my sister")))


//## ex4: use setTimeOut()

setTimeOutUse=(msg,delay)=>{
  setTimeout(() => {
    console.log(msg)
  }, delay);
}
setTimeOutUse("hello world",7000)


//h/w ex6: setInterval
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



//fakeFetch API
function fakeFetch(msg, shouldReject) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(`error from server: ${msg}`);
        }
        resolve(`from server: ${msg}`);
      }, 1000);
    });
  }


//live ex12: print data on success, print error on failure
fakeFetch("Hii How are you ?", false).then((msg) => console.log(msg)).catch((msg) => console.error(msg));
fakeFetch("You made a mistake", true).then((msg) => console.log(msg)).catch((msg) => console.error(msg));

//.....................................

//live ex13: chaining

function getServerResponseLength(msg){
  return msg.length;
}
fakeFetch("message", false)
.then((msg) => {
  console.log(msg)
  let len=getServerResponseLength(msg)
  return len
})
.then((msg2) =>console.log(msg2))
.catch((msg) => console.error(msg))


//............................................
//## live ex14: waterfall data
syncCallsToServer=(msg1, msg2)=>{
  fakeFetch(msg1, false).then((msg) => {
    console.log(msg)
    fakeFetch(msg2, false)
    .then((msg) => console.log(msg))
    .catch((msg) => console.error(msg));  
  })
  .catch((msg) => console.error(msg));
}

console.log(syncCallsToServer("first msg","second msg"))
