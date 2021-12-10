// // FUNCTION EXPECT ARGUMENTS
// function add(a, b) {
//   return a + b;
// } //function declaration

// let sum = add(4, 6); // function call
// console.log(sum);

// // functions are known as first class citizens
// // Functions can be treated as variables
// // function with no name -- anonymous functions

// let sayHi = function (a) {
//   console.log("ola", a, "amigo");
// }; // anonymous function

// sayHi(4);

// IIFE
let add = (function (a, b) {
  return console.log(a + b);
})(10, 20);
