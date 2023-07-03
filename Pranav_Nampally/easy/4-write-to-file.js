const {writeFile} = require('fs');

writeFile('./4-file.txt',"CONTENT TO BE WRITTEN\n",{flag:"a"},(err,res)=>{
    if(err){
        console.log(err);
        return;
    }
    let ret = res ?? "Successful"
    console.log(ret);
})