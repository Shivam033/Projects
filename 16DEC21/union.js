// you are given 2 arrays
// arrays are unique element arrays 
// create union of these two arrays
// without using extra space
let array1 = [1, 4, 3, 6, 5];
let array2 = [1, 3, 100, 200];

for(let i=0; i<array2.length; i++){
    let element = array2[i]
    let isPresent = array1.includes(element)
    // includes
    // indexOf -> idx/-1
    if(isPresent == false){
        array1.push(element)
    }
}
console.log(array1);