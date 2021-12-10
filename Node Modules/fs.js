// Node Modules are used to perform diff tasks as required

// File System modules -
// 1. Read, Wrte, Update, Delete files from our script

const fs = require("fs");
const path = require("path");
// READ
// let content = fs.readFileSync("f1.txt");

// console.log("this is f1 content -> " + content);

// // WRITE
// // writeFileSync method is used to put data(write) to a file, if a file doesn't exist it creates a new file and writes to it
// fs.writeFileSync("f2.txt", "Hello from F2");

// // UPDATE or APPEND to a file
// // (add to the previously written data)

// fs.appendFileSync("f2.txt", " this is f2 data, appending");

// // DELETE
// fs.unlinkSync("f2.txt");
// console.log("File Removed");

// CREATE
// fs.mkdirSync("myDir");

// DELETE DIRECTORY
// fs.rmdirSync("myDir");

// PATH
// to check whether a directory exists or not -> existsSync

// let doesExist = fs.existsSync("myDir");
// console.log(doesExist);

// stats of path
let stats = fs.lstatSync("myDir");

// console.log(stats);

// console.log("isFile?", stats.isFile());
// check if whether a passed path is file or not
// console.log("isDirectory?", stats.isDirectory());
// check if whether a passed path is directoy or not

// readdirSync method is used to check the content of a particular directory

// let folderPath = "D:\\FJP-2 Web Dev\\Node Modules\\myDir";
// let folderContent = fs.readdirSync(folderPath);

// console.log("directory content " + folderContent);

// COPY FILES

// src folder, destFolder

let srcFilePath = "D:\\FJP-2 Web Dev\\Node Modules\\myDir\\t1.txt";

let destFolder = "D:\\FJP-2 Web Dev\\Node Modules\\myDir2\\";

let tobeCopiedFileName = path.basename(srcFilePath);
console.log(tobeCopiedFileName);
// basename method gets the actual name of the file or directory

let dstPath = path.join(destFolder, tobeCopiedFileName);
console.log(dstPath);

fs.copyFileSync(srcFilePath, dstPath);
console.log("file Copied");
