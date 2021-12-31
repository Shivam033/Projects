let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr);
// console.log("````````````arrays````````````");
// console.log(arr.length);
// // add first
// arr.push(12)
// // add last
// arr.unshift(34)
// console.log(arr);
// // remove last
// arr.pop()
// // remove first
// arr.shift()
// console.log(arr);
console.log("------------");
let copyArr = arr.slice(4, 8)
console.log('sliced Array', copyArr);

// splice is a generic delete
// first param is -> starting idx
//  second param is -> delete count

console.log("------------");
let splicedArr = arr.splice(2, 5)
// splice is used to trim out the part of an array--it makes the changes is original array also
console.log("spliced array", splicedArr);
console.log("------------");
console.log(arr);
console.log(arr.indexOf(7));