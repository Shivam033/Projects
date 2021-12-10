// console.log("Hello from browser");
// VARIABLE DECLARATION (let var const)

// var a; //var is initialised with undefined
// console.log(a);
// a = 30;
// console.log(a);
// // JS is a Synchronous Language and a single threaded language
// a = "Hello";
// console.log(a);
// // Dynamic behavior
// // Problems with var
// // 1- Redeclaration
// /*
// let a = 34;
// let a = "wht are you?";
// */

// // LOOPS AND IF-ELSE
// let flag = true;

// var num = 9;

// for (let i = 2; i * i <= num; i++) {
//   if (num % i == 0) {
//     flag = false;
//     break;
//   }
// }
// if (flag) {
//   console.log(num, "is prime");
// } else {
//   console.log(num, "is not prime");
// }
// num = 5;
// console.log(num);
/*
// 2-Problem with var - SCOPING
if (10 % 2 == 0) {
  let c = 5;
  console.log(c);
}
console.log(c);
*/
// let can be redefined but cannot be redeclared
//const - cannot be redefined as well
// const a = 45;
// console.log(a);
// a = 34;
// console.log(a);
// --xx-- Environment, variables(var, let, const), loops, if else, issues with var --xx-- //

/*
let str = "coders_life";
console.log(str);

// String Methods
// .length
console.log(str.length);

// Extracting part of string
// -slice(start, end)
// start inclusive // end exclusive

let slicedStr = str.slice(1, 4);
console.log(slicedStr);
// -substr(start, length)
//
let subString = str.substr(3, 4);
console.log(subString);

// replace(first, last) method
// first - to be replaced 
//  last - to be replaced with
let hello = " Hello dobi";
console.log(hello);

let bye = hello.replace("Hello", "Bye");
console.log(bye);


// toUpperCase
// toLowerCase

// let test = "HelloWorld";
// console.log(test.toUpperCase());
// console.log(test.toLowerCase());

let fStr = "Hello";
let lStr = "World";

let combo = fStr.concat(" ", lStr);
console.log(fStr);
console.log(lStr);
console.log(combo);
let text = "           Hello World            ";
console.log(text);
let cutTxt = text.trim();
console.log(cutTxt);
*/
