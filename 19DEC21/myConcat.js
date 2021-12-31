Array.prototype.myConcat = function(val){
    let newArr = []
    newArr.push(...this)
    newArr.push(...val)
    return newArr;
}
let arr = [1,2,3,4,5,6,7]
let arr2 = [45,67,34,43]
let newArr = arr.concat(arr2);
console.log(newArr);
// let newAr = arr.myConcat(arr2)
// console.log(newAr);