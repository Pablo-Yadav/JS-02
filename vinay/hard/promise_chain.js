function waitOneSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log("wait first");
         resolve();
        },1000);
    });
 }
 
 function waitTwoSecond() {
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             console.log("wait second");
             resolve();
         },2000);
     });
 }
 
 function waitThreeSecond() {
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             console.log("wait three");
             resolve();
         },3000);
     });
 }

function calculateTime() {
    let date1=new Date();
    waitOneSecond().then(()=>waitTwoSecond().then(()=>waitThreeSecond().then(()=>{
        let date2=new Date();
        console.log("time taken for all 3 promises to resolve is ", date2-date1);
    })));
}

calculateTime();