// functions are available on arrays
let array =[1,2,3,4,5]

function squarer(x){
    return x*x;
}
function cubed(x){
    return x*x*x;
}
// let ans = squarer(array[0])
// console.log(ans);
// ans = squarer(array[2])
// console.log(ans);
// ans = squarer(array[3])
// console.log(ans);

let squaredArray = array.map(squarer)
let cubedArray = array.map(cubed)
// pass a function in .map(fn) to do the desired operation on each and every element of the array and save it in new one
console.log(squaredArray);
console.log(cubedArray);
console.log(array);