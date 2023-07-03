/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    
    const p = new Promise((resolve,reject)=>{
        console.log(`Waiting for 1 second`);
        setTimeout(()=>resolve("Waited 1 Seconds"),1000);       
    })
    return p;
}

function waitTwoSecond() {
    
    const p = new Promise((resolve,reject)=>{
        console.log(`Waiting for 2 seconds`);
        setTimeout(()=>resolve("Waited 2 Seconds"),2000);       
    })
    return p;
}

function waitThreeSecond(start) {
    
    const p = new Promise((resolve,reject)=>{
        console.log(`Waiting for 3 seconds`);
        setTimeout(()=>{
            const end=performance.now();
            resolve(end-start);
        },3000);       
    })
    return p;
}

function calculateTime() {
    const start = performance.now();
    return waitOneSecond().then(
        ()=>{
            return waitTwoSecond();
        }
        ).then(
        ()=>{
            return waitThreeSecond(start);        
    });
}

calculateTime().then(
    (timeTaken) => {
        console.log(`Time Taken: ${timeTaken}ms`)
    }
    ).catch(
        (err) => {
            console.log(err);
        }
    );