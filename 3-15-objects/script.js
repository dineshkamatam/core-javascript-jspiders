//------objects----
let x = {
  name: "dinesh",
  // key : value
  password: "sdfasdfa",
}; // object literal

console.log(x);
console.log(typeof x);

//

let Employee = {
  emp_id: "typ1",
  emp_name: "Manu",
  emp_sal: 200000,
  emp_designation: "java developer",
  emp_city: "mysore",
};

console.log(Employee["emp_city"]); //bracket notation
console.log(Employee.emp_city); //dot notarion

console.log(
  `Mr. ${Employee.emp_name} your id is ${Employee.emp_id} and you are geeting ${Employee.emp_sal}  and ur from ${Employee["emp_city"]}`
);

// JavaScript objects can strore reserved

let y = {
  for: "for",
  while: "while",
  if: "if",
  function: "function",
};

console.log(y);

let z = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
};

// console.log(z.1);
//Uncaught SyntaxError: missing ) after argument list
//dont use dot notation while accessing number as a key use bracket notation
console.log(z[1]);

// if it is "-" in two words use double quouts to solve the encoding issue
let a = {
  "content-type": "application/json",
};
console.log(a);

let styles = {
  "font-size": "100px",
  color: "red",
};

let users = {};
console.log(users);

//add new property to empty object
users.userName = "anu";
users.age = 39;
users.id = "sdfs111";
users.company = "google";
users.job = "react developer";

console.log(users);

//how to merge or combaine two objects  (interview quation)

// using Object.assign(target,source)
let b = { userName: "dieshadfasdf" };
let c = { age: "20" };

let combine = Object.assign(b, c);
console.log(combine);

// other way of combine using spread operator

let combineWithSpread = { ...b, ...c };
console.log(combineWithSpread);

let forOF = ["java", "c++", "html", "JavaScript"];
let forIN = {
  emp_id: "typ1",
  emp_name: "Manu",
  emp_sal: 200000,
  emp_designation: "java developer",
  emp_city: "mysore",
};

for (let i of forOF) {
  console.log(i);
} //for arrays

for (let i in Employee) {
  console.log("keys:", i);
  console.log("values: ", Employee[i]);
} // for objects

let languages = ["java", "c++", "html", "JavaScript"];
for (let lang of languages) {
  console.log(lang);
}
