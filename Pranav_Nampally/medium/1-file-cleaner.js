const fs = require('fs');

fs.readFile('./1-file.txt','utf8',(err,res)=>{
    if(err){
        console.log(err);
        return;
    }
    // console.log(res);
    let modifiedResult = res.replace(/\s+/g," ");
    // console.log(modifiedResult);
    fs.writeFile('./1-file.txt',modifiedResult,(err,res)=>{
        if(err){
            console.log(err);
            return;
        }
        let ret = res ?? "Successful"
        console.log(ret);
    });
});