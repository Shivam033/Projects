// function fn(para1, para2){
//     console.log("Inside fn", para1, para2);
// }

// fn("Hello", "Hi")
// // if there is something missing --> default --> undefined
// fn("Hello")
// // 
// fn()
// fn("Hello", "Hi", "Bye")

// arguments
function fn(/*para1, para2*/){
    console.log(arguments);
}

// if there is something missing --> default --> undefined
fn("Hello", "Hi")
// 
fn()
fn("Hello", "Hi", "Bye")