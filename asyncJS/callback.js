// function printFirstName(cb, fname){
//     console.log(fname);
//     cb("Gaud")
// }
// // cb() function is passed as an argument
// function printLastName(lastName){
//     console.log(lastName);
// }

// printFirstName(printLastName, "Dobi")

// Any func that is passed as an argument to another function
// any function that is called after a function has finished execution
const fs = require('fs')

// console.log('Before');
// let data = fs.readFileSync("f1.txt")
// console.log(" "+data);

// console.log("after");


// -------Asynchronous way of reading file-------//
// console.log('Before');
// fs.readFile("f1.txt", cb)
// function cb(err, data){
//     if(err){
//         console.log(err);
//     }
//     console.log(""+data);
// }
// console.log("after");
