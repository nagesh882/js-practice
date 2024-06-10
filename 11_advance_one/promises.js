// Promise


const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log("Asyn task is complete");
        resolve();
    }, 100)

})

promiseOne.then(function(){
    console.log("Promise consumed");
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task two');
        resolve();
    }, 1000)
}).then(function(){
    console.log('Async two resolve')
})




const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"nagesh882", email:"nageshchavan0802@gmail.com"});
    }, 1000);

})

promiseThree.then(function(user){
    console.log(user);
})





// importang for detabase working
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false // true

        if (!error) {
            resolve({username:"yash0802", password:"Pass@123"})
        } else {
            reject("Error: Somthing went wrong")
        }
    }, 1000)
});

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))





const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true // false
        if (!error) {
            resolve({username:"javascript", password:"Pass@123"});
        } else {
            reject("Error: Javascript went wrong");
        }

    }, 1000);
})

async function consumedPromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumedPromiseFive()






async function getAllUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}

getAllUsers()







fetch('https://api.github.com/users/nagesh882')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))