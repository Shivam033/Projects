function fun(a, b){
    console.log(a+"+"+b);
    console.log(arguments);
    console.log(arguments[0]+" "+arguments[1]+" "+arguments[2]);
    // arguments is not an array
    let res = Array.from(arguments) //making array of arguments
    let sq = res.map(x => x*x)
    console.log(res);
    console.log(sq);
}

// fun()
// fun(10)
// fun(10, 20)
fun(10, 20, 30)