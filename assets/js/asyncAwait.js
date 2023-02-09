let cl = console.log;

// Async Await >> synthetical sugar coting of promise
// Await use in front of the function which returns promise


let promise = new Promise((resolve, reject) => {
    // api call
    setTimeout(() => {
        let error = Math.random() >= .5 ? true : false;
        cl(error)
        if (error) {
            resolve(`Successfully login !!!`);
        } else {
            reject(`Invalid Username or Password`)
        }
    }, 1000);
})
async function init() {
    try {
        let data = await promise
        cl(data)
    } catch (err) {
        cl(err)
    }
}
init();

