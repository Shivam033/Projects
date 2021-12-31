(function(){
    let timeUnits = prompt("How much to count?")
    let interval = prompt("Log after how much interval?")

    // calls the handleCall function after every interval seconds (passed as millis)
    let iid = setInterval(handleCalls, interval*1000)
    
    handleCalls.orgTU = timeUnits //function can be used as a store of properties (much like objects)
    function handleCalls(){
        console.log(timeUnits + " left");
        timeUnits -= interval;
        
        if(timeUnits <= 0){
            clearInterval(iid);
            alert(handleCalls.orgTU + " has been counted.")
        }
    }
})();