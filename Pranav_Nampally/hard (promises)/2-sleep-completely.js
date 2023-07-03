/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    // wait(seconds);
    var waitingTime = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= waitingTime) {
        continue;
    }
}
console.log("Started")
console.log("Halting")
sleep(5);
console.log("Done")