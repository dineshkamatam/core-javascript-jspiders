// types of functions

// anonymous function
// function expression
// function declaration
// IIFE function
// arrow function
// callback function

//anonymous function syntax
//for anonymous function Identifier expected.

// function() {

// }

//convert anonyous into function expression

var x = function () {
  console.log("succesfully converted anonymouse into expression");
}; //called part

x();

//function expression
var username = function () {
  console.log("I am Funtion Expression");
};

username();

//IIFE(immediate invoke function expression) or self executing function

(function () {
  console.log("this is the IIFE");
})();

(function () {
  var $ = "Jquery";
  console.log($);
})(); //jquery library

(function () {
  var $ = "React js";
  console.log($);
})(); //react library

(function () {
  var $ = "moment js";
  console.log($);
})(); //moment library

(function () {
  var $ = "angulaar";
  console.log($);
})(); //angular library

//function declaration (or) named function
function jspiders() {
  console.log("i am funtion delaration");
}

//
jspiders();
