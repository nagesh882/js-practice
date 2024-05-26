// let score = "33" // value => 33
// let score = "33abc" // value => NaN
// let score = null // value => 0
// let score = undefined // value => NaN
// let score = true // value => 1
// let score = false // value => 0
let score = "nagesh" // value => NaN

// console.log(typeof score); // string
// console.log(typeof(score));


let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN


// let isLoggedIn = 1 // vlaue => true
// let isLoggedIn = 0 // value => false
// let isLoggedIn = "" // value => false
let isLoggedIn = "Hello" // value => true

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


let someNumber = 33 // value => 33 // typeof => string

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);