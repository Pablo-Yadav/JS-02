var filesys = require('fs');

filesys.readFile('1-counter.js',(err,data) => {
    if(err)
    console.log(err);
    else
    console.log(data.toString());
});

for(let i=1;i<1000000;i++)
console.log(i);