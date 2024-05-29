function sayMyName(){

    console.log("N")
    console.log("A")
    console.log("G")
    console.log("E")
    console.log("S")
    console.log("H")

};

// sayMyName()


// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2)

// };

// Parameters are the variables listed inside the parentheses in the function definition. They act as placeholders for the values that will be passed to the function when it is called.

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result // after return nothing to be execute
    // console.log("Hitesh")

    return number1 + number2

};

const result = addTwoNumbers(3, 5)

// Arguments are the actual values that are passed to the function when it is called.

// console.log("Result:", result)


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username")

        return
    };

    return `${username} just logged in`
};

// console.log(loginUserMessage("nagesh"))
// console.log(loginUserMessage("Yash"))



// (...num1) // rest operator
// function calculateCartPrice(...num1){
//     return num1
// };

function calculateCartPrice(val1, val2, ...num1){
    return num1
};

// console.log(calculateCartPrice(200,400,500,600,5000))


const user = {
    username: "yash",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
};

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]))