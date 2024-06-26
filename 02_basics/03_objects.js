// singleton (created by object cunstructor)
// Object.create


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "nagesh",
    "full name": "nagesh chavan",
    [mySym]: "mykey1",
    age: 21,
    location: "pune",
    email: "nagesh@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym])


JsUser.email = "yash@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "nagesh@google.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

JsUser.greeting()
JsUser.greetingTwo()

// console.log(JsUser.greeting())
// console.log(JsUser.greetingTwo())


JsUser.myLaptopName = "ASUS TUF GAMING A15"
console.log(JsUser);

console.log(`My Laptop Name:- ${JsUser.myLaptopName}`);