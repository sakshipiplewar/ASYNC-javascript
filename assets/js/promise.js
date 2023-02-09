let cl = console.log;

// Promise >> is a jaascript object which give some value in future
// It is used to handel Async oprations in javascript

// Stage of Promise
// Pending >> waiting for result
// fullfilled >> the action related to the promise is success
// reject >> the action related to the promise is fail
// settled >> promise id either  fullfillrd or rejected

// Benifits of Promise 
// 1. Improme readbility of the code
// 2. Better handeling Async operations
// 3. Better erreor handlings
// 4. Better flow of control definitions

let promise = new Promise((resolve, reject) => {
    // api call
    setTimeout(() => {
        let error = Math.random() >= .5 ? false : true;
        cl(error)
        if (error) {
            resolve(`Successfully login !!!`);
        } else {
            reject(`Invalid Username or Password`)
        }
    }, 3000);
})

promise
    .then((res) => {
        cl(res)
    })
    .catch((err) => {
        cl(err)
    })