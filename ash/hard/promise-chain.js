/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond()
{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
       let time1=new Date();
       resolve(time1)},1000);
    });
}
   
function waitTwoSecond()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let time2=new Date();
        resolve(time2);
        },2000);
        });
}
   
function waitThreeSecond()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let time3=new Date();
            resolve(time3);
            },3000);
            });
}

function calculateTime()
{
    let startTime=new Date();
    let endTime1,endTime2,endTime3;
    waitOneSecond().then((val)=>endTime1=new Date());
    waitTwoSecond().then((val)=>endTime2=new Date());
    waitThreeSecond().then((val)=>endTime3=new Date())
    .then((val)=>{
      let Time=(endTime1-startTime)+(endTime2-startTime)+(endTime3-startTime);
      console.log("It Took "+ (Time) + " milliseconds to resolve all Promises");
    })  
}