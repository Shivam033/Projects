function sayHi(name){
    console.log("My name is ", name);
    // console.log("Before name()");
    name();
    // console.log("After name()");
    return 47
}
function chotaFunction(){
    console.log("I am chota function");
    return "Shivam";
}
// console.log(sayHi);
// console.log(chotaFunction)
// sayHi("Shivam")
// I am passing a function definition
sayHi(chotaFunction)
console.log("-------");
console.log(sayHi);
console.log("-------");
console.log(chotaFunction)