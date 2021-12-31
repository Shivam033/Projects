// console.log("before declaration", a);
// //  a = undefined
var a;
// console.log("after declaration",a);
// // a = undefined
a=10;
// console.log("after initialization", a);
// a = 10

function fn(){
    console.log("before declaration", a);
    var a;
    console.log("after declaration",a);
    a=20;
    console.log("after initialization", a);
}
fn()