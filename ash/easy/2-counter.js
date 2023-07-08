let counter = 1;
setTimeout(function repeat() {
    console.log("counter = "+counter++)
    setTimeout(repeat,1000);
}, 1000);