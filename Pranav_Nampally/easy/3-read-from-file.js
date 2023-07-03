const fs = require('fs');

fs.readFile('./3-file.txt','utf8',(err,res)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(res);
});

// console.log(fileContent)
// for(let i=0;i<=100000;i++){
//     // console.log(i);
// }
console.log("Starting!\n-------------------------------------------------")