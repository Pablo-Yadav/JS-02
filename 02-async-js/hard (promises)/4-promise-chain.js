/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    let prom1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log("First wait for one sec");
         resolve(1);
        },1000);
    });
    return prom1;
}

function waitTwoSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log("Second wait for two secs");
         resolve(2);
        },2000);
    });
}

function waitThreeSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log("Third wait for 3 secs");
         resolve(3);
        },3000);
    });
}

function calculateTime() {
    let date1=new Date();
    waitOneSecond().then(()=>waitTwoSecond().then(()=>waitThreeSecond().then(()=>{
        let date2=new Date();
        console.log("Time taken to resolve all the the three promises are ", date2-date1);
    })));
}

calculateTime();