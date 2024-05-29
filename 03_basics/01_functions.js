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

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result // after return nothing to be execute
    // console.log("Hitesh")

    return number1 + number2

};

const result = addTwoNumbers(3, 5)

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