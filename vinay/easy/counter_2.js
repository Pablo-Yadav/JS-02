let count=0;
function counter2(){
        setTimeout(()=>{
            count++;
            console.log(count);
            counter2();
        },1000);
}

counter2();