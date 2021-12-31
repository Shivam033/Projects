// memory for the functions are allocated before the code is executed
// functions are created in heap
// and there addresses are stored in stack
// no function overloading in JS

console.log("Script started");

iamReal();
function iamReal(){
    console.log("I am Real");
}

function iamReal(){
    console.log("No, I am real");
}
iamReal();