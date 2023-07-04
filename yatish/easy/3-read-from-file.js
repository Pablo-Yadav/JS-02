var fs=require('fs');

fs.readFile('randomText.txt',(err,data)=>{
   if(err){
    console.log(err);
   }else{
    console.log(data.toString());
   }
    
});

for(let i=0;i<10000;i++){
    console.log(i);
}