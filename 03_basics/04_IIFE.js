// Immediately Invoked Function Expression (IIFE)

(function one() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // without name IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("Nagesh")