// function definition
function sayHi(name){
    console.log("My name is ", name);
    // return {fName:"Shivam"}
}
// function invocation
// let rVal = sayHi("Shivam")
// console.log("Rval is", rVal);
let array = [1,2,3,4,5]

let obj = {fName : "Shivam"} 

function chotaFunction(){
    console.log("I am chhota function");
    return "lol"
}
// string
sayHi("Hello")
// number
sayHi(10)
// array-----reference type
sayHi(array)
// object
sayHi(obj)
// function
sayHi(chotaFunction)
let ans = chotaFunction()
console.log(ans);