// function with parameter

// function User(parameter) {
// return parameter;
// }

// User(arguments);

// let Employee = function (
//   emp_id,
//   emp_name,
//   emp_sal,
//   emp_designation,
//   emp_education
// ) {
//   return [emp_id, emp_name, emp_sal, emp_designation, emp_education];
// };

// console.log(Employee("JSP-1", "shashi", 30000, "web developer,B.E"));

// function addNumber(a, b) {
//   return a + b;
// }

// let result = addNumber(100, 50);
// console.log(result);

// function multiplication(a, b) {
//   return a * b;
// }

// let result2 = multiplication(100, 50);
// console.log(result2);

//function with argument built-in function

// function test() {
//   return arguments;
// }
// console.log(test("dinsh", 2, 3, "ramesh", true, false, 4, 5, 6, 3434));

function Jspiders() {
  return arguments;
}

let courses = Jspiders(
  "java",
  "sql",
  "html",
  "css",
  "javascript",
  "python",
  "c++",
  "nodejs",
  "recatjs"
);

console.log(courses[4]); //JavaScript
console.log(courses[6]); //c++
console.log(courses[8]); //reactjs

// arrow function

// let x = function () {
//   return arguments;
// };

// let result = x(30, 40, 50);
// console.log(result);

//convert normal function expression into arrow function
// let y = () => {
//   return arguments; //error: arguments is not defined
// };

// let result1 = y(30, 40, 50);
// console.log(result1);

//rest parameter ...name
// let z = (...rest) => {
//   return rest; //this is a original array
// };

// let result2 = z(30, 40, 50);
// console.log(result2);

let trainers = function (traner_name, duration, ...skills) {
  return { traner_name, duration, skills };
};

var shashi = trainers(
  "shashi",
  "30days",
  "java",
  "JavaScript",
  "HTML",
  "CSS",
  "Nodejs"
);

console.log(shashi);
