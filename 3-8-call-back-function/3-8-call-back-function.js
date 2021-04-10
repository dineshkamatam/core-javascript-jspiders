//callback function

// function child() {
//   console.log("I am Child🧒 waiting for my parent execute...");
// }

// function Parent(callback) {
//   return callback();
// }

// Parent(child);

//without callback
// function calculate(num1, num2, calcType) {
//   if (calcType === "add") {
//     return num1 + num2;
//   } else if (calcType === "multiply") {
//     return num1 * num2;
//   }
// }

// console.log(calculate(30, 50, "add"));
// console.log(calculate(30, 50, "multiply"));

//with callback

// function add(a, b) {
//   return a + b;
// }
// function multiply(a, b) {
//   return a * b;
// }

// function calculator(num1, num2, callback) {
//   return callback(num1, num2);
// }
// console.log(calculator(10, 30, add));
// console.log(calculator(10, 30, multiply));

//callback---> function as argument

// var array = ["java", "html", "JavaScript", "css"];
// array.forEach(function (val) {
//   console.log(val);
// });

//closures
function OuterBlock() {
  var outerText = "i am outer text";
  function InnerBlock() {
    var innerText = "i am inner text";
    function InnerInnerBlock() {
      var innerInnerText = "i am innner inner text";
      console.log(outerText);
      console.log(innerText);
      console.log(innerInnerText);
    }
    InnerInnerBlock();
  }
  InnerBlock();
}

OuterBlock();
