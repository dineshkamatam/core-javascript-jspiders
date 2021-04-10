// Array.prototype.filter()

// let ages = [10, 20, 40, 33, 50, 80, 70];
// let filteredContent = ages.filter((age) => age > 50);

// console.log(filteredContent);

///

let languages = [
  "java",
  "java",
  "java",
  "java",
  "java",
  "JavaScript",
  "c++",
  "c++",
  "nodejs",
  "nodejs",
];
// let filteredContent2 = languages.filter((lang) => lang === "java");
// console.log(filteredContent2);

//filter  with IF
// let filteredContent3 = languages.filter((lang) => {
//   if (lang === "nodejs") return lang;
// });

// console.log(filteredContent3);

//remove duplicate from array

//traditional way
// let removeDuplicates1 = [];
// for (let i = 0; i < languages.length; i++) {
//   if (removeDuplicates1.indexOf(languages[i]) === -1) {
//     console.log(languages[i]);
//     removeDuplicates1.push(languages[i]);
//   }
// }

//ES6 way

// let removeDuplicateWithSet = new Set(languages);
// console.log([...removeDuplicateWithSet]);

//filter way
let filterWay = languages.filter(function (value, index, array) {
  if (array.indexOf(value) === index) {
    console.log(value)
    console.log(array.indexOf(value));
    console.log(index);
  }
});

;

// let removeDuplicate = languages.filter((c, index) => {
//   return languages.indexOf(c) === index;
// });

// console.log(removeDuplicate);

//Array.prototype.find()
// let x = [10, 20, 100, 52, 51, 400];
// let filterdContent = x.filter((y) => y > 50);
// console.log(filterdContent);

// let findContent = x.find((y) => y > 50);
// console.log(findContent);

// let langs = ["javac", "JavaScript", "java", "java", "c++"];
// let filterJava = langs.filter((x) => x === "java");
// let findJava = langs.find((x) => x === "java");
// let findJavaindex = langs.findIndex((x) => x === "java");

// console.log(filterJava);
// console.log(findJava);
// console.log(findJavaindex);
