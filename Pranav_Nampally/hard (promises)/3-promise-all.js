/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    const p = new Promise((resolve,reject)=>{
        console.log(`Waiting for 1 second`);
        setTimeout(()=>{
            resolve("Waited 1 Second");
        },2000);       
    });
    return p;
}

function waitTwoSecond() {
    const p = new Promise((resolve,reject)=>{
        console.log(`Waiting for 2 seconds`);
        setTimeout(()=>{
            resolve("Waited 2 Seconds");
        },2000);      
    });
    return p;
}

function waitThreeSecond() {
    const p = new Promise((resolve,reject)=>{
        console.log(`Waiting for 3 seconds`);
        setTimeout(()=>{ 
            resolve("Waited 3 Seconds");
        },3000);   
    });
    return p;
}

function calculateTime(promises) {
    const start=performance.now();
    return Promise.all(promises).then((values)=>{
        console.log(values);
        const end=performance.now();
        return end-start;
    });
}

calculateTime([waitOneSecond(),waitTwoSecond(),waitThreeSecond()]).then(
    (timeTaken) => {
        console.log(`Time Taken: ${timeTaken}ms`)
    }
    ).catch(
        (err) => {
            console.log(err);
        }
    );