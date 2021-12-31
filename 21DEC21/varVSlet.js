// -----------var------------
// function scope--redeclare--you can access before declaration
// console.log(a);
// var a;
// a = 10;
// var a;

/////////////////////////////////
// console.log(a); 
// -----------let-----------
//temporal dead zone-->can't access let before declaration--can't redeclare--block scope
let a;
// block scope --> {let a = 10}
console.log(a);
a=23;
console.log(a);