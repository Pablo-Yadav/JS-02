/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
        }, 5000);
      });
      return p3;
}

function calculateTime() {
    let tick= Date.now()
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then((time) => {
        //const total= time.p1+time.p2+time.p3 ;
        let tock= Date.now()
        console.log ("tme difference is", (tock-tick)/1000)
        console.log("result is" ,time);
       // console.log (total);
      });
     
}
calculateTime()