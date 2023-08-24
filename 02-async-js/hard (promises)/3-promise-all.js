/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    let prom1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log("First wait for one sec");
         resolve();
        },1000);
    });
    return prom1;
}

function waitTwoSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log("Second wait for two secs");
         resolve();
        },2000);
    });
}

function waitThreeSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log("Third wait for three secs");
         resolve();
        },3000);
    });
}

function calculateTime() {
    let date1=new Date().getMilliseconds();
     Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()]).then(()=>{
        let date2=new Date().getMilliseconds();
     console.log("Time taken to resolve all the three promises are ", date2-date1);
     });
}

calculateTime();