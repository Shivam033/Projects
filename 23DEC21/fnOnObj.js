let obj = {
    fun1 : function(){
        console.log("This man is called "+ this.fullName+". His age is "+this.age);
    },// this will work
    fun2 : function(){
        console.log("This man is called "+ obj.fullName+". His age is "+obj.age);
    },// this will also work 
    fun3 : function(){
        console.log("This man is called "+ fullName+". His age is "+age);
    }, // this won't work
    fullName : "Shivam Sharma",
    age : 24
};
obj.fun1();
obj.fun2(); // this works in javascript but not in java
obj.fun3(); // this works in java but not in javascript
