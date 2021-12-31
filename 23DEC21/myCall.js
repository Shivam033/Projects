Function.prototype.myCall = function(){
    let ogFun = this;
    let args = Array.from(arguments)

    let thisForCall = args[0];
    let params = args.slice(1)

    thisForCall.funny = ogFun;
    thisForCall.funny(...params);
    delete thisForCall.funny;

    // let callFunc = function(){
    //     let thisForOgFun = args[0]
    //     let argsForOgFun = args.slice(1);
    //     let argsFromInvocation = Array.from(arguments)
    //     argsForOgFun = argsForOgFun.concat(argsFromInvocation);

    //     ogFun.apply(thisForOgFun, argsForOgFun)
    // }
    // return callFunc();
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
obj.fun1.call(o2, "shivam", "Shiv")
obj.fun1.myCall(o2, "shivam", "Shiv")
