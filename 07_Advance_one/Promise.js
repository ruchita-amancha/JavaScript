const promiseOne = new Promise(function (resolve, reject) {
    //To do a async Task
    //DB calls,network ,cryptography

    setTimeout(function () {
        console.log("Async task is completed");
    }, 1000)
    resolve()
})

promiseOne.then(function () {
    console.log("Promise Consumed");
})

new Promise(function () {
    setTimeout(function () {
        console.log("Async task 2");
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function(){
        resolve({username:"Ruchi",email:"Ruchi@example.com"})
    },1000)


})

promiseThree.then(function(user){
    console.log(user);
})