function wait(n)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Promise resolved after " + n + " seconds"), n*1000);
    });
}

wait(10).then((value) => console.log(value));