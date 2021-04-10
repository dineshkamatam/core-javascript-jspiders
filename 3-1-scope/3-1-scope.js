// var user = "shashi"; //global scope
// {
//   var user1 = "dinesh";
// } //global scope
// {
//   let user2 = "ramesh";
// } //block scope
// console.log(user);
// console.log(user1);
// console.log(user2);

//if "var" keyword that is global scope
//if "let" or "const" keyword that is block scope

// var x = "dinesh";
// {
//   let x = "manu";
//   console.log("block scope", x); //manu block scope
// }

// console.log("global scope", x); //dinesh

// function test() {
//   var x = "shishira"; //local scope =>within a funtion that is local scope
//   console.log("local scope", x);
// }

// test();

// var stockIsAvailable = true; //global scope
// if (stockIsAvailable) {
//   var x = 10;
//   console.log("stock is available");
// } else {
//   console.log("stock is not available");
// }
// console.log(x);

// if (stockIsAvailable === true) {
//   let x = 20;
//   let y = 30;
//   console.log("stock is avilable");
//   console.log(x);
//   console.log(x + y);
// } else {
//   console.log("stock is not available");
// }

// function test() {
//   var x = 40;
//   var z = 30;
//   console.log(x + z);
// }

// test();

// console.log(x);
// console.log(x);
// console.log(z);
// console.log(y);

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
//   let name1 = "shishira"; //block scope
//   console.log(name1);
// }

// console.log(name1); //Uncaught ReferenceError: name1 is not defined
// console.log(i); //Uncaught ReferenceError: name1 is not defined

//variable hoisting

// console.log(x);
// var x;

// //valiable hoisting is working are
// //
// //

// console.log(y);
// let y;

var i = 10;
i = 20;
console.log(i); //20 //working

let y = 20;
y = 30;
console.log(y); //30 //working

//var way
var x = 10;
var x = 20;
console.log(x); //20 //working

//let way
let z = 40;
let z = 50;
console.log(z); // Uncaught SyntaxError: Identifier 'z' has already been declared
