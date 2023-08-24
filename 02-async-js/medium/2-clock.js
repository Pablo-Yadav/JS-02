function CurrentTime() {

    let dateTime= new Date();

    let time = dateTime.toLocaleTimeString();
    console.log(time)

     setTimeout(CurrentTime, 1000);
}

CurrentTime();