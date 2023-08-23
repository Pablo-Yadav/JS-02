/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('The first promise has resolved');
          resolve(1);
        }, 1000);
      });
      return p1;
}

function waitTwoSecond() {
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('The Second promise has resolved');
          resolve(2);
        }, 2000);
      });
         return p2;
}

function waitThreeSecond() {
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('The third promise has resolved');
          resolve(3);
        }, 3000);
      });
      return p3;
}

function calculateTime() {
    let tick= Date.now()
    waitOneSecond().then((res)=>{
        console.log (res);
        waitTwoSecond().then((res)=>{
            console.log (res);
            waitThreeSecond().then((res)=>{
                console.log(res)
                let tock= Date.now();
                console.log ("difference is" ,(tock-tick)/1000);
            })
        })
    })
     
}
calculateTime()