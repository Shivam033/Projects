// it takes a function and return a new filtered array that returns true or false
// filter function calls --> the given function on every element of that array
// if that function returns --> 
// true then you will add that element to the new array
// false then you will not add that element to new array
let array =[1,3,5,6,7,8]

function oddTest(x){
    return x % 2 == 1;
    // return x*x;
}
function evenTest(x){
    return x % 2 == 0;
}

function myFilter(arr, cb){
    let newArray=[]
    for(let i=0; i<arr.length; i++){
        if(cb(arr[i])){
            newArray.push(arr[i]);
        }
    }
    return newArray
}
let newArr2 = myFilter(array, evenTest)
let newArr1 = myFilter(array, oddTest)

console.log(newArr2);
console.log(newArr1);
console.log(array);