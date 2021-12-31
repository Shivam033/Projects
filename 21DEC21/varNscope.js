function fn(){
    console.log("Before declaration", a);
    var a;
    console.log("After declaration", a);
    a = 20;
    // console.log(a);
    if(true){
        let a = 30;
        console.log("line", a);
    }
    console.log("After initialisation", a);
}
fn()