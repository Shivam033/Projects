//to prevent namespace pollution we write functions in iife
// when multiple js files will be used iife becomes mendatory 
// querySelector is more powerful than getElementById, getElementByClass etc
(function(){
    let btn = document.querySelector("#btn1") //# is used when id is provided
    let divContainer = document.querySelector('#container');
    let pageTemplates = document.querySelector("#myTemplates");
    let fid = 0;
    let folders = []; //for local storage

    
    btn.addEventListener("click", addFolder);
    
    function addFolder(){
        let fname = prompt("Enter the name of the folder");
        if(!fname){
            return;
        }
        fid++;
        addFolderInPage(fname, fid);

        folders.push({
            id: fid,
            name: fname
        });
        persistFoldersToStorage();
    }
    
    function deleteFolder(){
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose='name']");

        let flag = confirm("Do you want to delete this folder"+ divName.innerHTML);
        if(flag == true){
            divContainer.removeChild(divFolder);

            let idx = folders.findIndex(f => f.id == parseInt(divFolder.getAttribute("fid")));
            folders.splice(idx, 1);
            persistFoldersToStorage();
        }
    }
    function editFolder(){
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose='name']");

        let fname = prompt("Enter the new folder name");
        if(!fname){
            return;
        }
        divName.innerHTML = fname;

        let folder = folders.find(f => f.id == parseInt(divFolder.getAttribute("fid")));
        folder.name = fname;
        persistFoldersToStorage();
    }

    function addFolderInPage(fname, fid){
        let divFolderTemplate = pageTemplates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true);

        let divName = divFolder.querySelector("[purpose='name']");
        divName.innerHTML = fname;
        divFolder.setAttribute("fid", fid);

        let spanDelete = divFolder.querySelector("span[action='delete']");
        spanDelete.addEventListener("click", deleteFolder);

        let spanEdit = divFolder.querySelector("span[action='edit']");
        spanEdit.addEventListener("click", editFolder);

        divContainer.appendChild(divFolder);
    }

    function persistFoldersToStorage(){
        console.log(folders);
        let fjson = JSON.stringify(folders);
        localStorage.setItem("data", fjson)
    }

    function loadFoldersFromStorage(){
        let fjson = localStorage.getItem("data");
        if(!!fjson){ // to check if string if not empty
            folders = JSON.parse(fjson); // String to JS object

            folders.forEach(function(f){
                addFolderInPage(f.name, f.id);
            })
        }
    }
    loadFoldersFromStorage();
})();