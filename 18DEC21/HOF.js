// Higher order Functions
// ------------------>>>>>>>>>>forEach<<<<<<<<<<-----------------------//
// for each --> 
//----------------------------polyfill--------------------//
Array.prototype.myforEach = function(cb){
    let newArr = []
    for(let i=0; i<this.length; i++){
        let ans = cb(this[i])
        newArr.push(ans)
    }
    return newArr;
}
// ------------------------polyfill ends-------------------//
const arr1 = ['a', 'b', 'c']
function printElem(elem){
    console.log(elem);
}
arr1.forEach(printElem)
arr1.myforEach(printElem)


// ------------------>>>>>>>>>>every<<<<<<<<<<<<-----------------------//

// every --> if every element satisfies the condition given by the function
// ------------------polyfill----------------------//
Array.prototype.myEvery = function(cb){
    let newArr = []
    for(let i=0; i<this.length; i++){
        let ans = cb(this[i])
        newArr.push(ans)
    }
    for(let i=0; i<newArr.length;i++){
        if(!newArr[i]){
            return false;
        }
    }
    return true;
}
// ------------------polyfill ends----------------------//
let arr2 = [1, 2, 34, 45, 5, 66 ,7]

function isBelowTH(currVal){
    return currVal<400;
}
console.log(arr2.every(isBelowTH));
console.log(arr2.myEvery(isBelowTH));



// ------------------>>>>>>>>>>some<<<<<<<<<<<<-----------------------//
// some --> if only one element satisfies the condition
//----------------------------polyfill--------------------//
Array.prototype.mySome = function(cb){
    let newArr = []
    for(let i=0; i<this.length; i++){
        if(cb(this[i]) == true){
            return true;
        }
    }
    return false;
}
// ------------------------polyfill ends-------------------//
const arr3 = [1, 2, 3, 4, 5]
function even(elem){
    return elem%2 === 0
}
console.log(arr3.some(even));
console.log(arr3.mySome(even));




// ------------------>>>>>>>>>>findIndex<<<<<<<<<<---------------------//

// find Idx
//----------------------------polyfill--------------------//
Array.prototype.myfindIndex = function(cb){
    let newArr = []
    for(let i=0; i<this.length; i++){
        if(cb(this[i]) == true){
            return i;
        }
    }
    return -1;
}
// ------------------------polyfill ends-------------------//
const arr4 = [1, 2, 3, 12, 45]
function isLarge(ele){
    return ele > 13
}
console.log(arr4.findIndex(isLarge));
console.log(arr4.myfindIndex(isLarge));