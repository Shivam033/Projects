Array.prototype.myMap = function(cb){
    let newArr = []
    for(let i=0; i<this.length; i++){
        let ans = cb(this[i])
        newArr.push(ans)
    }
    return newArr;
}

let array =[1,2,3,4,5]

function squarer(x){
    return x*x;
}

let newArr = array.myMap(squarer)

console.log(newArr);
console.log(array);