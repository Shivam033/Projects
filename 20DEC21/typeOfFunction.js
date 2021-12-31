//function definition
function fn(){
    console.log("I am a funciton definition");
}

// fn();
// function expression

// let a = [10, 20, 30]
// let b = a;
// console.log(b);

let secondName = function originalName(){
    console.log("I am expression"); //this is function expression
}

// secondName()
// originalName() //this call will give an error


//------------------------IIFE--> 
// immediately envoked function expression
console.log("before");

(function drawBoard(){
    console.log("Board is immediately drawn");
})();
console.log("After");

//-------------------Anonymous function-------------------//
// // -------------function without a name
(function (){
    console.log("Board is immediately drawn second time");
})();
let secondName2 = function (){
    console.log("I am expression");
}

secondName2()