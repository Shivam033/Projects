// Array.prototype.sayHello = function(elem){
//     console.log("Hello "+elem);
// }
// -------------------->>>>this keyword<<<<<<<<<-------------//
// this--> is a predefined keyword in js
// that refers to the (entity)
Array.prototype.sum = function(){
    console.log(this);
    let sum=0
    for(let i=0; i<this.length; i++){
        sum += this[i];
    }
    console.log(sum);
}

Array.prototype.product = function(){
    console.log(this);
    let pro = 1
    for(let i=0; i<this.length; i++){
        pro *= this[i]
    }
    console.log(pro);
}

let arr1 = [1, 2];
let arr2 = [3, 4];
// arr1.sayHello("this is array 1")

arr1.sum();
arr2.product();