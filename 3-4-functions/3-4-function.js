//normal function
// function x() {
//   return "shashi";
// }
// console.log(x());

//convert normal function declaration into ES6 arrow function

// x()=> {
//   return "shashi";
// };

// console.log(x()); //Uncaught SyntaxError: Malformed arrow function parameter list

// IIFE with arrow
// (() => {
//   console.log("IIFE with arrow syntax");
// })();

//function with expression

// let a = function () {
//   return "dinesh";
// };

// console.log(a());

//convert function expression into ES6 arrow function expression

// let y = () => {
//   return "dinesh";
// };

// console.log(y());

//
// let c = function () "dinesh";

//   console.log(c());
//Uncaught SyntaxError: Unexpected string
// let b = () => "bhargav";
// console.log(b());

//if you dont have parameter use _ instead of ()
// let b = (_) => "bhargav";
// console.log(b());

//convert function expression into arrow function expression with one parameter

// let e = (username) => username;
// console.log(e("dinesh"));

// //convert function expression into arrow function expression with two parameters
// let e = (username, password) => ({ username, password });
// console.log(e("dinesh", "123"));

//arrow function with returning object
// let x = (emp_name, emp_id, emp_salary, emp_designation) => ({
//   emp_name,
//   emp_id,
//   emp_salary,
//   emp_designation,
// });

// console.log(x("shashi", "typ1", 3000, "html developer"));

//arrow function with array return values with rest parameter
// let languages = (...skills) => skills;
// //rest parameter is returning array object by default
// console.log(languages("html", "javascript", "css", "reactjs", "nodejs"));

//number parameter use [] array literal syntax
// let languages2 = (java, js, spring) => [java, js, spring];
// console.log(languages2("html", "javascript", "css"));

let userDetails = {
  username: "dinesh",
  company: "Google",
  salary: 2000000,
  about: function () {
    return `My name is ${this.username} and I am working for ${this.company} and I am getting ${this.salary} from this company.`;
  },
};

console.log(userDetails.about());

//
var userDetails2 = {
  username: "ramesh",
  company: "microsoft",
  salary: 1000000,
  about: () => {
    //in arrow function "this" indicate global object so it is shows like undefined
    return `My name is ${userDetails2.username} and I am working for ${userDetails2.company} and I am getting ${userDetails2.salary} from this company.`;
  },
};

console.log(userDetails2.about());
