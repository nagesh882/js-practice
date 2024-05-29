// Dates // type of date is an object

let myDate = new Date()
// console.log(myDate); // => 2024-05-29T10:22:07.721Z
// console.log(myDate.toString()); // => Wed May 29 2024 15:52:07 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // => Wed May 29 2024
// console.log(myDate.toLocaleString()); // => 29/5/2024, 3:52:07 pm
// console.log(myDate.toISOString()); // => 2024-05-29T10:22:07.721Z
// console.log(myDate.toJSON()); // => 2024-05-29T10:22:07.721Z
// console.log(myDate.toLocaleDateString()); // => 29/5/2024

// console.log(typeof myDate); // => object

// let myCreatedDate = new Date(2024, 0, 23) // date format
// let myCreatedDate = new Date(2024, 0, 23, 5, 3) // date and time format
// let myCreatedDate = new Date("2023-01-05") // yy-mm-dd
let myCreatedDate = new Date("01-14-2023") // mm-dd-yy

// console.log(myCreatedDate.toDateString()); // =>Tue Jan 23 2024
// console.log(myCreatedDate.toLocaleString()); // =>14/1/2023, 12:00:00 am



let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()  + 1);
console.log(newDate.getDay());
console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday:"long"
})