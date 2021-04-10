// var array = ["java", "html", "css"];

// //push() used to add new element at last index value
// let newValue = array.push("react");

// console.log(array);
// console.log(newValue);

// //insert at the first index value use unshift()
// array.unshift("angular");
// console.log(array);

// //delete array value
// //delete last value use pop()
// array.pop();
// console.log(array);

// //delete first value shift()
// array.shift();
// console.log(array);

// //splice
// //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// //@param start — The zero-based location in the array from which to start removing elements.

// // @param deleteCount — The number of elements to remove.

// // @returns — An array containing the elements that were deleted.

// array.splice(0, 2);
// console.log(array);

// let trainers = ["shishira", "shambu", "shashi", "shambu"];
// trainers.splice(0, 0, "dinesh");

// console.log(trainers);

// //checking index value by indexOf()
// // Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

// // @param searchElement — The value to locate in the array.

// // @param fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.

// let index = trainers.indexOf("dinesh");
// console.log(index);

// //checking of last index of occurance

// let lastIndex = trainers.lastIndexOf("shambu");
// console.log(lastIndex);

// // foreach
// //itarate over an loop
// trainers.forEach((value, index, array) => {
//   console.log(value);
//   console.log(index);
//   console.log(array);
// });

//forEach return type is undefined and it will not create new instance array
//it will only itarate not chain

//array map()
//Iterating an array values
// let withMap = trainers.map( (value, index, array) => {
//   return value;
// });
// //   .map((x) => x);

// console.log(withMap);

// //
// let x = [1, 2, 3, 4, 5, 6];
// let result = x.forEach((x) => x * 2);
// console.log(x); //same array value
// console.log(result); //undefined

// //==============map=========
// let resultWithMap = x.map((x) => x * 2);
// console.log(x); //same array value
// console.log(resultWithMap);

let num = [1, 2, 3, 4, 5, 6, 7];

let addWith2 = num.map((value) => value + 2);
console.log(num);
console.log(addWith2);
   m  