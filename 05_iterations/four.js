const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}


for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]
// arrays key start from 0 to -1


for (const key in programming) {
    // console.log(programming[key]);
}



// Maps

const map = new Map() // map is not iterable
map.set("IN", "India")
map.set("USA", "United State of America")
map.set("Fr", "France")


for (const key in map) {
    // console.log(key);
}