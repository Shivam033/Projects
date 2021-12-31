// Polyfill of reduce
Array.prototype.myReduce = function(cb, ele){
    let res;
    
}



let arr = [1,2,3,4,5,6]

function sum(storage, elem){
    return storage +elem
}
function product(storage, elem){
    return storage *elem
}
// Case 1 -->without initial value of storage
let finalPro = arr.reduce(product)
console.log(finalPro);
let finalSum = arr.reduce(sum)
console.log(finalSum);

// Case 2 --> provided initial value of storage
let finalPro2 = arr.reduce(product, 10)
console.log(finalPro2);