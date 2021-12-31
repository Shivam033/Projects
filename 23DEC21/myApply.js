Function.prototype.myApply = function(){
    let ogFun = this;
    let args = Array.from(arguments)
    
    let thisForCall = args[0]
    let params = args[1]

    thisForCall.fan = ogFun;
    thisForCall.fan(...params);
    delete thisForCall.fan;
}


let obj = {
    fun1 : function(frnd1, frnd2){
        console.log("This is "+this.fullName+". Having age of "+this.age+".");
        console.log(this.fullName +" say hello to "+frnd1+".");
        console.log(this.fullName+" say hello to "+frnd2+".");
        console.log(arguments);
    },
    fullName :"Shivam Shar",
    age: 24
};

let o2 = {
    fullName : "Dobi",
    age : 22
}

obj.fun1.apply(o2, ["8085", "dobi", "khiladi"])
obj.fun1.myApply(o2, ["8085", "dobi", "khiladi"])
// thisForCall.fun smjh ni aaya dhangse