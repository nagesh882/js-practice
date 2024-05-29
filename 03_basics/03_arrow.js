const user = {
    username: "nagesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    } 
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);



// function chai(){
//     let username = "yash"
//     console.log(this.username);
// }

// chai()


// const chai = function () {
//     let username = "nagesh"
//     console.log(this.username)
// }


const chai = () => {
    let username = "nagesh"
    console.log(this)
}

// chai()


// +++++++++++++++++++++++++++++++++++


// arrow functions


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )


const addTwo = (num1, num2) => ( {username: "nagesh"} )


console.log(addTwo(99,1))



const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(function () {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())