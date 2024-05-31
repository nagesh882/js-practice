// if (condition) {statement}
// if (condition) {statement} else {statement}
// if (condition) {statement} else if (condition) {statement} else {statement}

const isUserLOggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("execute");
// <, >, <=, >=, ==, !=, ===, !==


// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);



// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("less than");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }



const userLoggedIn = true
const debitCart = true
const loggedInFromGoole = false
const loggedInfromEmail = true

if (userLoggedIn && debitCart && 2==3) {
    console.log("Allow to buy courses");
}


if (loggedInFromGoole || loggedInfromEmail) {
    console.log("User logged in");
}