(function(){
    let btnAddFolder = document.querySelector("#btn1");
    let divContainer = document.querySelector("#container");
    let pageTemplates = document.querySelector("#myTemplates");
    let folders = [];
    let fid = -1;

    btnAddFolder.addEventListener("click", addFolder);

    function addFolder(){
        let fname = prompt("Enter folder's name");
        if(!!fname){
            let fidx = folders.findIndex(f=> f.name == fname);
            if(fidx == -1){
                fid++;
                
                //RAM
                folders.push({
                    id: fid,
                    name: fname
                })
                //HTML
                addFolderHTML(fname, fid);
                //Storage
                saveToStorage();
            } else{
                alert(fname+" already exists");
            }
        }else{
            alert("Please enter something.")
        }
    }

    function editFolder(){
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose='name']")
        let ofname = divName.innerHTML;

        let nfname = prompt("Enter new name for " + ofname);
        if(!!nfname){
            if(nfname != ofname){
                let exists = folders.some(f => f.name == nfname);
                if(exists == false){
                    // ram (folders array)
                    let folder = folders.find(f => f.name == ofname);
                    folder.name = nfname;

                    // HTML
                    divName.innerHTML = nfname;

                    // storage
                    saveToStorage();
                } else{
                    alert(nfname + " already exists.");
                }
            } else{
                alert("Please enter a name.");
            }
        }
    }

    function deleteFolder(){
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose='name']")

        let flag = confirm("Are you sure you want to delete "+ divName.innerHTML+"?");
        if(flag== true){
            //RAM
            let idx = folders.findIndex(f => f.id == parseInt(divFolder.getAttribute("fid")));

            folders.splice(idx, 1);

            //HTML
            divContainer.removeChild(divFolder);

            // storage
            saveToStorage();
        }
    }

    function addFolderHTML(fname, fid){
        let divFolderTemplate = pageTemplates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true);

        let divName = divFolder.querySelector("[purpose='name']");
        let spanEdit = divFolder.querySelector("[action = 'edit']");
        let spanDelete = divFolder.querySelector("[action = 'delete']");

        divFolder.setAttribute("fid", fid);
        divName.innerHTML = fname;
        spanEdit.addEventListener("click", editFolder);
        spanDelete.addEventListener("click", deleteFolder);

        divContainer.appendChild(divFolder);
    }

    function saveToStorage(){
        let fjson = JSON.stringify(folders);
        localStorage.setItem("data", fjson)
    }

    function loadFromStorage(){
        let fjson = localStorage.getItem("data");
        if(!!fjson){
            folders = JSON.parse(fjson);
            folders.forEach(f =>{ 
                if(f.id > fid){
                    fid = f.id;
                }
                addFolderHTML(f.name, f.id) });
        }
    }

    loadFromStorage();
})();