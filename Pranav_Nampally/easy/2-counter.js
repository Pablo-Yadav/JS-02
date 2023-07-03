let counter = 1;
const count = () => {
    console.log(counter++);
    setTimeout(count,1000);
}
setTimeout(count,1000);