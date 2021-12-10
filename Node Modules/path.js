const path = require("path");

// extname is a function that will get the extension from the path of a file
let ext = path.extname("D:\\FJP-2 Web Dev\\Node Modules\\f1.txt");
console.log("Extension of the file ->", ext);
// basenamewill get teh actual name of the file or a folder from it's path
let basename = path.basename("D:\\FJP-2 Web Dev\\Node Modules\\f1.txt");
console.log("basename of the file ->", basename);

// console.log(__dirname); //present directory path
// console.log(__filename); //directory path with file name
