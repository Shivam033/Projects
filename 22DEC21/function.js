// function are variable
// function outer(){

// }
// function chhotafn(){
//     console.log("Hello! I am a chhota function");
// }

// 1. function can be passed as a parameter to anather function --> Higher Order Function
// outer(chhotafn)

//2.  function's reference can be stored in another variable
// let a = [1, 2, 3, 4, 5]
// let b = a

// let anotherName = function(){
//     console.log("I am a function expression");
// }
// anotherName();
// //  3. function return from another function
// function fn(){
//     return "Hello"
// }
// let rVal = fn()
// console.log(rVal);

function outer(){
    console.log("Hello, I am outer and I am returning Inner");
    return function inner(){
        console.log("I am inner");
    }
}
let rVal = outer();
console.log(rVal);