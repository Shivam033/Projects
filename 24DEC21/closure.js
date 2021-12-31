// function powerFunctionCreator(exp){
//     console.log('typeof exp');
//     if(typeof exp !== 'number'){
//         console.log("exp must be a number.");
//     }

//     // inner function makes a closure on the variables from the outer functions, to be used into it.
//     let powerFn = function(base){
//         let rv = Math.pow(base, exp);
//         return rv;
//     }
//     return powerFn;
// }

// let squarer = powerFunctionCreator(2);
// let sqo8 = squarer(8);
// console.log(sqo8);

function powerCreator(obj){

    let fun = function(base){
        let rv = Math.pow(base, obj.exp);
        return rv;
    }
    return fun
}

let o1  = {
    exp: 2
}

let squarer = powerCreator(o1)

let val = squarer(8)
console.log(val);

o1.exp = 3
let val2 = squarer(7)
console.log(val2);
// change power creator to make it a producer of such functions whose exponents we can change on a later date
