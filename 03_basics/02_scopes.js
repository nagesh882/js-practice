// var c = 300
let a = 300 // gobal scope

if (true) {

    let a = 10 // local scope
    const b = 20
    var c = 30
    console.log("Inner:",a);
}


console.log(a);
// console.log(b);
// console.log(c);