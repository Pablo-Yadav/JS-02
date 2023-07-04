var fs=require('fs');
fs.readFile('ExtraSpace.txt',(err,data)=>{
    if(err){
        console.log(err);
    }else{
           let str=data.toString();
           let arr=str.split('\n');
           let newStr="";
           for(let i=0;i<arr.length;i++){
            newStr+=arr[i].replace(/\s+/g,' ');
            if(i===arr.length-1){
                break;
            }
            newStr+='\n';
           }
           fs.writeFile('ExtraSpace.txt',newStr,(err)=>{
            if(err)console.log(err);
            else{
                console.log("Modified Spaces Successfully!");
            }
           })
        }
});
