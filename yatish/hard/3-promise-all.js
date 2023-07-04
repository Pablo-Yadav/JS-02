/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
 return new Promise((resolve,reject)=>{
   setTimeout(()=>{
    let time1=new Date();
    resolve(time1)},1000);
 });
}

function waitTwoSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let time2=new Date();
        resolve(time2);
        },2000);
      });
}

function waitThreeSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let time3=new Date();
            resolve(time3);
            },3000);
          });
}

function calculateTime() {
  let startTime=new Date();
  let promise =Promise.all([
    waitOneSecond(),waitTwoSecond(),waitThreeSecond()
  ]);
  promise.then((value)=>{
    let endTime=new Date();
    console.log("It Took "+ (endTime-startTime) + " milliseconds to resolve all Promises");
});
  
}