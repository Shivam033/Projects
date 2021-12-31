// fn definition
function fn(param){
    console.log("I am function definition", param);
    // execute chotaFn
    param();
}
// string
// fn("Hello")
// // boolean
// fn(true)
// // object
// let obj ={name: "Shivam"} 
// fn(obj)
// // array
// let arr = [12, 2,3, 34] 
// fn(arr)

// function are also variables --> functions are first class citizens in javascript
function chotaFn(){
    console.log("Hello I am chhota function");
}
//  a function can also be passed as an argument in a function
fn(chotaFn);