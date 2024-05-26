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
// console.log(stringNumber);
// console.log(typeof stringNumber);



// ************************* Operations *******************************


let value = 3
let negValue = -value
// console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "hello"
let str2 = " nagesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); // vlaue => 122
// console.log(1 + 2 + "2"); // vlaue => 32 // Not prefer in production avoid this

// console.log(true); // value => true // Not prefer in production avoid this
// console.log(+true); // vlaue => 1 // Not prefer in production avoid this
// console.log(+""); // vlaue => 0 // Not prefer in production avoid this


let num1, num2, num3;

num1 = num2 = num3 = 2 + 2 

// let gameCounter = 100
// gameCounter++;
// console.log(gameCounter);

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);


// ****************** Prefix ******************

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing

let prefixFirstNumber = 101

let prefixSecondNumber;
prefixSecondNumber = ++prefixFirstNumber
// console.log(`prefix second number: ${prefixSecondNumber} | prefix first number: ${prefixFirstNumber}`);

// ****************** Postfix ******************

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing

let postfixFirstNumber = 201

let postfixSecondNumber;
postfixSecondNumber = postfixFirstNumber++
// console.log(`postfix second number: ${postfixSecondNumber} | postfix first number: ${postfixFirstNumber}`);



// console.log(null); // value => null
// console.log(undefined); // value => undefined




/*

//link for self study

// 01: https://tc39.es/ecma262/2023/multipage/

// 02: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

*/