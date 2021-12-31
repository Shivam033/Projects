let arr = [5, 7, 19, 12, 13, 14]
function isPrime(n){
    let ifPrime = true;
    for(let i=2; i*i<=n; i++){
        if(n % i == 0){
            ifPrime = false;
            break;
        }
    }
    return ifPrime;
}
// let len = arr.length;
for(var i=arr.length-1; i>=0; i--){
    let result = isPrime(arr[i])
    if(result == true){
        arr.splice(i, 1)
    }
}
console.log(arr);