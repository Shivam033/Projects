let array =[1,2,3,4,5]

function squarer(x){
    return x*x;
}
// map implement --> library implementation

// function as an argument, array
// return a new function

function myMap(arr, cb){
    let newArray=[]
    for(let i=0; i<arr.length; i++){
        let ans = cb(arr[i]);
        newArray.push(ans);
    }
    return newArray
}
let newArr = myMap(array, squarer)

console.log(newArr);
console.log(array);