// async/await

function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`);
      }
      resolve(`from server: ${msg}`);
    }, 3000);
  });
} 


//live ex12: print data on success, print error on failure
(async function () {

  try{
    const serverData = await fakeFetch("Hello",true);
    console.log(serverData);
  }
  catch(err){
    console.log(err);

  }
})();

(async function () {

  try{
    const serverData = await fakeFetch("Mistake",false);
    console.log(serverData);
  }
  catch(err){
    console.log(err);

  }
})();


//live ex13: chaining
function getServerResponseLength(msg){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'undefined')
          resolve(msg.length);
      else
          reject("You made some mistake")
      
        
    }, 1000);
  });
}

(async function () {

  try{
    const serverData = await fakeFetch("Hello",false);
    const strLength = await getServerResponseLength(serverData);
    console.log(strLength)
  }
  catch(err){
    console.log(err);

  }
})();



//............................................
//## live ex14: waterfall data
function syncCallsToServer(msg1,msg2){
  (async function () {

    try{
      const serverData = await fakeFetch(msg1,false);
      console.log(serverData);
      const serverData2 = await fakeFetch(msg2,false);
      console.log(serverData2);
    }
    catch(err){
      console.log(err);
  
    }
  })();
}

syncCallsToServer("msg 1","msg 2")
