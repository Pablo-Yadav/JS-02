/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const promise = new Promise((resolve, reject) => {
        console.log ("resolving")
        setTimeout(()=>resolve("Thank you"),n) 
           
          });
          return promise;
}
wait(3000).then((res)=>console.log (res)).catch ((e)=>console.log(error))

    
