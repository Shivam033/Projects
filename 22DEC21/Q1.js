// function outer(){
//     var arr=[];
//     for(var i=0; i<3; i++){
//         arr.push(function(){
//             console.log(i);
//         })
//     }
//     return arr
// }
// OUTPUT 3 \n 3 \n 3
function outer(){
    var arr=[];
    for(var i=0; i<3; i++){
        function inner(){
            // j ke liye har bar alag se variable banate ho 
            var j = i
            return function(){
                console.log(j);
            }
        }
        arr.push(inner())
    }
    return arr
}
// output --> 0 \n 1 \n 2

console.log("Before calling outer");
var arr = outer();
arr[0]()
arr[1]()
arr[2]()
console.log("After calling outer");
