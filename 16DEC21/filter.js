let array = [1,3,5,6,7,8]
function oddTest(number){
    return number % 2 == 1;
}
function evenTest(number){
    return number % 2 == 0;
}
// pass -> new Array allow
//  fail -> new Array me not allowed
let oddArray = array.filter(oddTest) 
//passing a function in filter to literally filter the array according to the need and save it in new one
let evenArray = array.filter(evenTest)
console.log(evenArray);
console.log(oddArray);
console.log(array);