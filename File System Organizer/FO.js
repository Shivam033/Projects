// ///File  system Organizer/// //

// we will be creating a file system organizer
// Neumerous files in a folder that are nto properly arranged
// You can use this tool to arrange them in specific firectory according to their extension
// We will be using built in node modules like fs and path to create this project

// array ke form me input jata hai command line me

// let input = process.argv[0]
// console.log(input);
// Node js treats command line input as an array and that is your process array

const helpObj = require('./commands/help')
const treeObj = require('./commands/tree')
const organizeObj = require('./commands/organize')

const fs = require('fs')
const path = require('path')

let inputArr = process.argv.slice(2)
// console.log(inputArr);

let command = inputArr[0]

// switch case for input commands

switch(command){
    case 'tree':
        treeObj.treeKey(inputArr[1])
        // treeFn(inputArr[1])
        break;
    case 'organize':
        organizeObj.organizeKey(inputArr[1])
        // organizeFn(inputArr[1]) //Passing a directory path
        break;
    case 'help':
        helpObj.helpFnKey()
        // helpFn()
        break;
    default :
    console.log("PLEASE ENTER A VALID COMMAND")
    break;    
}
