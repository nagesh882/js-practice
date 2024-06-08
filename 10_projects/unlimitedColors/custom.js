// Async based Project
// setInterval and setTimeout



const randomColor = function(){
    const hexValue = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6 ; i++) {
        color += hexValue[Math.floor(Math.random() * 16)]
    }
    // console.log(color);
    return color
}

// randomColor()

// console.log(Math.floor(Math.random() * 16));

let intervalId;

const startChangingColor = function(){

    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
}


const stopChangingColor = function(){

    clearInterval(intervalId)
    intervalId = null;

}



document.querySelector("#start").addEventListener("click", startChangingColor)


document.querySelector("#stop").addEventListener("click", stopChangingColor)