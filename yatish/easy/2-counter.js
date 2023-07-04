var counter=0;
setTimeout(function recursive(){
    counter++;
    console.log(counter);
    setTimeout(recursive,1000);
},1000);