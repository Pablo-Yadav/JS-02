var filesys = require('fs');

filesys.writeFile('1-counter.js',"console.log(counter)",(err) => {
    if(err)console.log(err);
    else
    console.log("written successfully!");
});

for(let i=0;i<1000000;i++)
console.log(i);