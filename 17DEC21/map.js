let array = ["shivam sharma", "dobi gaud", "neha gaud", "khiladan hushiyari"]

function giveInitial(fullName){
    let namesArray = fullName[0].split(" ")
    let firstInitial = namesArray[0].charAt(0)
    let secondInitial = namesArray[1].charAt(0)
    console.log(firstInitial+ secondInitial);

    return firstInitial+secondInitial;
}

let initials = array.map(giveInitial)
console.log(initials);
// ///////////////////////////

