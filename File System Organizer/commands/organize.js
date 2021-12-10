
const fs = require('fs')
const path = require('path')

let types = {
    media: ["mp4", "mkv","mp3", 'jpg', 'jpeg', 'png'],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function organizeFn(dirpath){
    // console.log('Organize function implemented');
    // input of a directory path

    let destPath
    if(dirpath==undefined){
        console.log('Please enter a Directory path');
        return;
    }
    else{
        let doesExist = fs.existsSync(dirpath)
        // console.log(doesExist);

        if(doesExist){ //Checking if true
            // 1. Create an Organized files directory
            
            destPath = path.join(dirpath, 'Organized files')
            // destpath ->//D:\FJP-2 Web Dev\test folder\Organized files
            if(!fs.existsSync(destPath)){ //Checking for false
                fs.mkdirSync(destPath)
                //we wll only create a directory if it doesn't exist
            }
            else{
                console.log("This Folder arleady exists");
            }
        }
        else{
            console.log('Please enter a valid path');
        }
    }
    organizeHelper(dirpath, destPath)
}
// organizeHelper to categorize the files
function organizeHelper(src, dest){ 
// src - (from where we have to pick files)
// dest - (where we have to dump the organized files) 
    let childNames = fs.readdirSync(src) //get all the files & folders in that directory

    for(let i=0; i<childNames.length; i++){
        let childAdd = path.join(src, childNames[i]) //path is identified

        let isFile = fs.lstatSync(childAdd).isFile() //check here to identify files
        if(isFile == true){
            let fileCategory = getCategory(childNames[i])
        console.log(childNames[i]+' belongs to '+ fileCategory);

        sendFiles(childAdd, dest, fileCategory)
        }
    }
}

function getCategory(name){
    let ext = path.extname(name) //take out the extension of the file here
    // console.log(ext);
    ext = ext.slice(1) //removed the dot(.) from file name
    for(let type in types){
        let cTypeArr = types[type]
        // console.log(cTypeArr);

        for(let i=0; i<cTypeArr.length; i++){
            if(ext == cTypeArr[i]){ //matching the file extension
                return type; //returned types of file 
            }
        }
    }
    return "others"
    // if file extension is unknown i.e. not present in the ext array
}

function sendFiles(srcFilePath, dst, fileCat){
    let catPath = path.join(dst, fileCat)
    //D:\FJP-2 Web Dev\test folder\Organized files\media
    //D:\FJP-2 Web Dev\test folder\Organized files\documents
    //D:\FJP-2 Web Dev\test folder\Organized files\app
    //D:\FJP-2 Web Dev\test folder\Organized files\archives

    if(fs.existsSync(catPath)==false){
        fs.mkdirSync(catPath)
    }

    let fileName = path.basename(srcFilePath)
    let destFilePath = path.join(catPath, fileName)
    //D:\FJP-2 Web Dev\test folder\Organized files\media\test.mp4

    fs.copyFileSync(srcFilePath, destFilePath) //copy files from src to dstn

    fs.unlinkSync(srcFilePath) //deleting copied file from source folder
    
    console.log(fileName + " copied to "+ fileCat);
}

module.exports={
    organizeKey : organizeFn
}