var createPromise = function(n){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
              console.log("I am here")
              resolve();
        },n);
      });
}  

createPromise(2000).then(()=>console.log("here resolved")).catch(()=>console.log("here rejected"));
 
// let production =()=>{
//    setTimeout(()=>{
//            console.log("first statement");
//         setTimeout(()=>{
//             console.log("second statement");
//         },2000);
//     },1000);

//     console.log("third statement");
//     return true;
// };

// console.log("here ",production());