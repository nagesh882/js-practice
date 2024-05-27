const name = "Nagesh"
const repoCount = 27

// console.log(name + repoCount + " Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String('Nagesh-bc')

// console.log(gameName[0]);
// console.log(__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('g'))

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);


const newStringOne = "     Nagesh        "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "http://nagesh.com/nagesh%20chavan"

console.log(url.replace('%20', '-'));


console.log(url.includes('nagesh'))
console.log(url.includes('raj'))


console.log(gameName.split('-'))