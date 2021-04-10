function add(a, b) {
  return a + b;
}
console.log(add(5, 7));

let users = ["Anudeep", "Nagaraja", "Chethana"];
let str = "Anudeep , Nagaraja , Chethana"; //string
console.log(typeof users); //objects
console.log(Array.isArray(users)); //true or false

console.log("==========STRING========");
console.log(typeof str); //string
console.log(Array.isArray(str)); //false

if (Array.isArray(str)) {
  console.log("Its an array");
} else {
  console.log("its not an array");
}

let anudeep = ["Anudeep"];
let nagaraja = ["Nagaraja"];
let chethana = ["Chethana"];
let combineArrays = anudeep.concat(nagaraja, chethana);
console.log(combineArrays);

let x = ["Anudeep"];
let y = ["Nagaraja"];
let z = [x, y];
console.log("=======2D WAY=======");
console.log(z); //2 Dimentional Array

let spreadWay = [...x, ...y];
console.log("=====SpreadWay======");
console.log(spreadWay); //spreadWay

let Concat = x.concat(y);
console.log("=======Concat=====");
console.log(Concat);

function user() {
  let a = arguments; //arguments is an array like object not an array
  console.log(typeof a); // object
  console.log(Array.isArray(a)); //false

  //conversion arguments into array

  let d = [...a];
  console.log("======converted into Array using spread operator========");
  console.log(typeof d); //objects
  console.log(Array.isArray(d)); //true
}
user();
// console.log(user("Anudeep","Chethana"));

//coversion string into array
let stri = "Anudeep Nagaraja Chethana Brownie";
console.log(typeof stri);
//=========convert string into array ============/
//=========string split method way ==============/
let conversion = stri.split(" ");
console.log(conversion);
console.log(typeof conversion); //objects

//spread way
let spreadIT = [...stri];
console.log(spreadIT);
console.log(typeof spreadIT); //objects
console.log(Array.isArray(spreadIT)); //true

function ret() {
  let st = arguments;
  let spreadIt = [...st];
  console.log(typeof spreadIt);
  console.log(Array.isArray(spreadIt));
}
console.log(ret("Anudeep"));

//string doesn't have reverse method
//

let trainer = "Anudeep";
console.log(trainer);
let t = trainer.split("").reverse().join("");
console.log(t);

function RtoS(strin) {
  return [...strin].reverse().join("");
}
// console.log(RtoS("Nagaraja"));
let value = prompt("Enter user name");
document.write(RtoS(`${value}`));

//convert string into array
//string split method way
// let str = "shashi";
// console.log(typeof str); //string
// let convertedStrIntoArray = str.split("");
// console.log(convertedStrIntoArray);
// console.log(typeof convertedStrIntoArray); //object

// //spread way
// let spreadIt = [...str];
// console.log(spreadIt);
// console.log(typeof spreadIt); //object
// console.log(Array.isArray(spreadIt)); //true

// function Users() {
//   let str = arguments;
//   let spreadIt = [...str];
//   console.log(spreadIt);
//   console.log(typeof spreadIt); //object
//   console.log(Array.isArray(spreadIt)); //true
// }

// console.log(Users("dinesh"));

//reverse string   (very immp)
let str = prompt("enter data");

let x = [...str].reverse().join("");

document.write(
  `sprevious string <h1> ${str} </h1>and reverse string is<h1>${x} </h1> `
);
console.log(x);
