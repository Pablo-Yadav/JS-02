/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n){
    const prom = new Promise((resolve,reject)=>{
        setTimeout(()=>{
              console.log("Hi")
              resolve();
        },n);
      });
    return prom;
}  

wait(0).then(()=>console.log("Resolved")).catch(()=>console.log("Rejected"));