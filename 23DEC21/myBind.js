Function.prototype.myBind = function(){
    let orgFun = this; //original function fun1 is this
    let args = Array.from(arguments) //arguments is array like[Array.from() to make it array]

    let boundFun = function(){
        let thisForOrgFun = args[0] // first argument
        let argsForOrgFun = args.slice(1); //1 to end array of arguments 
        let argsFromInvocation = Array.from(arguments)
        argsForOrgFun = argsForOrgFun.concat(argsFromInvocation);

        orgFun.apply(thisForOrgFun, argsForOrgFun)
    }
    return boundFun;
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
// let boundFunc = obj.fun1.bind(o2, "8085", "dobi", "khiladi")
// boundFunc("Shivam")
let boundFunc = obj.fun1.myBind(o2, "8085", "dobi", "khiladi")
boundFunc("Shivam")
// homework done