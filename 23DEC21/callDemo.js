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
// obj.fun1("Dobi", "Neha")

// Call is a function, it is available to all functions. It can be used to call the functions.
// The use case is, if you want to override the default this
// obj.fun1.call({
//     fullName :"Neha",
//     age:25
// }, "Shivam", "shiv")
let o2 = {
    fullName : "Dobi",
    age : 22
}
obj.fun1.call(o2, "shivam", "Shiv")

// obj.fun1.apply(o2, ["8085", "dobi", "khiladi"])

// let boundFunc = obj.fun1.bind(o2, "8085", "dobi", "khiladi")
// boundFunc("Shivam")