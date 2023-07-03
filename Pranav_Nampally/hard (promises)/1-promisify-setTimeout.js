/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const p = new Promise((resolve,reject)=>{
        console.log(`Waiting for ${n} seconds`);
        setTimeout(resolve,n*1000);       
    });
    return p;
}

// console.log(wait(2).then);
wait(5).then(()=>console.log('Resolved - Success')).catch(()=>console.log("Rejected - Fail"));

// wait(5).then(console.log("Success"));