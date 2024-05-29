// var c = 300
let a = 300 // gobal scope

if (true) {

    let a = 10 // local scope
    const b = 20
    var c = 30
    // console.log("Inner:",a);
}


// console.log(a);
// console.log(b);
// console.log(c);


// +++++++++++++++++++++++++++++++++++++++++


function one(){
    const username = "nagesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()


if (true) {
    const username = "yash"
    if (username === "yash") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username)



// ++++++++++++++++++++ Interesing +++++++++++++++++++++++


// console.log(addOne(5))
function addOne(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
}

// addTwo(5)



// ++++++++++++++++++++++++++++++++++++++++

const valOne = 52

function handleValue(){
    console.log(valOne);
}

handleValue()