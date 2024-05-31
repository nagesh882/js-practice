// const userEmail = "n@nagesh.ai"
// const userEmail = ""
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy values

// true, "0", 'false', " ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("Array is empty")
// }



const emptobj = {}

if (Object.keys(emptobj).length === 0) {
    console.log("object is empty");
}





// nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);



// terniory operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("price less than 80") : console.log("price more than 80")