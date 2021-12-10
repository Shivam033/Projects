#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { getSystemErrorMap } = require('util');

let inputArr = process.argv.slice(2)
// console.log(inputArr[0]);
let optionArr = []
let filesArr = []

for(let i=0; i<inputArr.length; i++){
    let firstChar = inputArr[i].charAt(0);

    if(firstChar == "-"){
        optionArr.push(inputArr[i])
    }else{
        filesArr.push(inputArr[i])
    }
}
// options check
if(optionArr.includes("-n") && optionArr.includes("-b")){
    console.log("Error: 000 Invalid combination of commands");
    return;
}

// existance of file
for(let i=0; i<filesArr.length; i++){
    // let bufferContent = fs.existsSync(filesArr[i])
    if(!fs.existsSync(filesArr[i])){
        console.log(`File ${filesArr[i]} does not exist.`);
        return;
    }
}

let content = ""
for(let i=0; i<filesArr.length; i++){
    let bufferContent = fs.readFileSync(filesArr[i])
    content += bufferContent+"\r\n";
    // \r entered by vs code to reach the end of line
}
// console.log(content);
let contentArr = content.split("\r\n");
// console.log(contentArr);

// ````````````````-s`````````````````
// console.log("``````````````````````````````");
// let isS = optionArr.includes("-s");
if(optionArr.includes("-s")){
    for(let i=1; i<contentArr.length; i++){
        if(contentArr[i] == "" && contentArr[i-1]==""){
            contentArr[i] = null;
        }else if(contentArr[i] == "" && contentArr[i-1] == null){
            contentArr[i] = null;
        }
    }
    let tempArr = []
    for(let i=0; i<contentArr.length; i++){
        if(contentArr[i]!= null){
            tempArr.push(contentArr[i])
        }
    }
    contentArr = tempArr;
}
// console.log(contentArr.join("\n"));

if(optionArr.includes("-n")){
    // console.log("this is -n command");
    let val = [];
    for(let i=0; i<contentArr.length;i++){
        val[i] = (i+1)+". "+contentArr[i]
    }
    contentArr = val
}

if(optionArr.includes("-b")){
    // let val = [];
    let counter = 1;
    for(let i=0; i<contentArr.length;i++){
        if(contentArr[i] != ""){
            // val[i] = (counter)+". "+contentArr[i];
            contentArr[i] = `${counter}`+`. `+ `${contentArr[i]}`
            counter++;
        }
    }
    // contentArr = val
}
console.log(contentArr.join("\n"));
