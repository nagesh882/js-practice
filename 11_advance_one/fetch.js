
async function getAllUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}

getAllUsers()







fetch('https://api.github.com/users/nagesh882')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))