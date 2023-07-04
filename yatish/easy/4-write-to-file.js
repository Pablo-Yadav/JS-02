var fs=require('fs');
fs.writeFile('writeFile.txt',"Hola Amigos!",(err)=>{
  if(err)console.log(err);
  else{
    console.log("written successfully!");
  }
});

for(let i=0;i<10000;i++){
    console.log(i);
}