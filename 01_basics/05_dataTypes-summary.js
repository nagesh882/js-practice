// Primitive Data Type

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 78.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)

const bigNumber = 54465464651564n
// console.log(typeof bigNumber)



// Reference(Non Primitive) Data Type

// Array, Objects, Functions


const fruits = ["apple","banana","chery","mango"]

const myObj = {
    name: "Nagesh",
    age: 21
}

const myFunction = function(){
    console.log("Hello JavaScript!");
}


// console.log(typeof score) // number
// console.log(typeof scoreValue) // number
// console.log(typeof isLoggedIn) // boolean
// console.log(typeof outsideTemp) // object
// console.log(typeof userEmail) // undefined
// console.log(typeof id) // symbol
// console.log(typeof bigNumber) // bigint
// console.log(typeof fruits) // object
// console.log(typeof myObj) // object
// console.log(typeof myFunction) // function/function object




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Type of memory in javascript: Stack (Primitive) and Heap (Non-Primitive)

// stack memory used in primitive data types (stack provide copy of varible value) and heap used in non-primitive data types (heap provide the reference of memory(location) of variables orignal value)

let myName = "Nagesh"

let anotherName = myName
anotherName = "Yash"

console.log(myName);
console.log(anotherName);


let userOne = {
    email: "user@google.com",
    upiId: "user@ybl"
}

let userTwo = userOne

userTwo.email = "yash@google.com"

console.log(userOne.email)
console.log(userTwo.email)