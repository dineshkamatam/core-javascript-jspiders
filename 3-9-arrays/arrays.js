// let users = ["dinesh", "ramesh", "shishira", "anudeep"];

// let str = "dinesh , ramesh , shishira , anudeep"; //string
// console.log(typeof users);

// console.log(Array.isArray(users)); //tru  or false

// console.log(typeof str);
// console.log(Array.isArray(str)); //false

// if (Array.isArray(users)) {
//   console.log("it is array");
// } else {
//   console.log("it is not array");
// }

//combine two more arrays

// let shashi = ["shashi"];
// let shishira = ["shishira"];
// let raghu = ["raghu"];
// let shambu = ["shambu"];

// let combinedArrays = shashi.concat(shishira, raghu, shambu);
// console.log(combinedArrays);

// //-------------------------------
// let x = [1];
// let y = [2];
// let z = [x, y];

// console.log(z);
// //------spreadway--------
// let spreadway = [...x, ...y];
// console.log(spreadway);

// //--------concat way---------

// let concatWay = x.concat(y);
// console.log(concatWay);

function Users() {
  let x = arguments; //arguments is array like object not arbitrary
  console.log(typeof x); //object
  console.log(Array.isArray(x)); //true// let users = ["dinesh", "anudeep", "rashmi", 100]; //array literal
  // console.log(users.length);
  // console.log(users);
  // console.log(typeof users); //type of array object
  // console.log(users[3]);

  // //Array literal way
  // let x = ["dinesh", true, 10, undefined, null, [], {}];

  // //mutate array vaues
  // x[0] = "shishira";
  // x[1] = 300;
  // //loop over an array
  // for (let i = 0; i <= x.length; i++) {
  //   console.log(x[i]);
  // }

  // var y = "dinesh";
  // console.log(typeof y);

  // y[0] = "ramesh";
  // var z = (y = "ramesh");
  // console.log(y);

  //function with constructor

  // function user(username, passsword) {
  //   console.log(this);
  //   this.username = username;
  //   this.passsword = passsword;
  // }

  // let dinesh = new user("dinesh", "sdfad124");
  // let ramesh = new user("ramesh", "dsfaasd23");

  // console.log(dinesh);
  // console.log(ramesh);

  // function employee(empId, empName, empJob, empSalary) {
  //   this.empId = empId;
  //   this.empName = empName;
  //   this.empJob = empJob;
  //   this.empSalary = empSalary;
  // }

  // let shashi = new employee(100, "shashi", "web devoloper", 20000);
  // let shisira = new employee(101, "shisira", "java devoloper", 30000);
  // let abhishek = new employee(102, "abhishek", "web devoloper", 20000);
  // let riza = new employee(103, "riza", "sql devoloper", 20000);
  // let raghu = new employee(104, "raghu", "c devoloper", 20000);

  // console.log(shashi);
  // console.log(shisira);
  // console.log(abhishek);
  // console.log(riza);
  // console.log(raghu);

  // //array constructor way
  // let user = new Array();
  // user[0] = "dinesh";
  // user[1] = "ramesh";
  // user[2] = "suresh";
  // console.log(user);

  // //array literal way
  // let userWithArrayLiteral = ["dinesh", "ramesh", "suresh"];
  // console.log(userWithArrayLiteral);

  // creating custom array constructor

  function Languages(...rest) {
    this.rest = rest;
  }

  let java = new Languages("java", "spring", "hibernet", "j2ee");
  let javascript = new Languages("js", "react", "node", "express");

  console.log(java);
  console.log(javascript);
}
