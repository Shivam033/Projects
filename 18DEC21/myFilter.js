Array.prototype.myFilter = function(cb){
    let newArr = []
    for(let i=0; i<this.length; i++){
        if(cb(this[i])){
            newArr.push(this[i])
        }
    }
    return newArr;
}

let array =[1,3,5,6,7,8]

function oddTest(x){
    return x % 2 == 1;
    // return x*x;
}

let newArr2 = array.myFilter(oddTest)

console.log(newArr2);