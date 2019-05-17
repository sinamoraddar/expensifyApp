const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'sina',
            age: 21
        });
        // reject('something went wrong')
    }, 3000);
});

promise.then((data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is from the second promise');
            // reject('something went wrong')
        }, 3000);
    });
}).then((str) => { console.log('does this run ??', str) })

// promise.catch((error) => { console.log(error) })

// promise.then((data) => { console.log(data) },
//     (error) => { console.log(error) }
// ) 