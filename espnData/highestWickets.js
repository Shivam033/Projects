const request = require('request');
const cheerio = require('cheerio')

console.log('Before');

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard"

request(url, cb)
function cb(error, response, html) {
    if(error){
        console.error(error);
    }else{
        handleHtml(html)
    }
}

function handleHtml(html){
    let $ = cheerio.load(html) //full html loaded in cheerio //cheerio is defined using $(naming convention)
    
    // full page search
    let teamsArr = $('.match-info.match-info-MATCH .team')
    // console.log($(teamsArr).text());

    let wTeamName;
    for(let i=0; i<teamsArr.length; i++){
        let hasClass = $(teamsArr[i]).hasClass("team-gray");
        if(hasClass==false){
            let teamNameElem = $(teamsArr[i]).find('.name')
            wTeamName = teamNameElem.text().trim()
        }
    }
    // console.log(wTeamName);

    let inningsArr = $(".card.content-block.match-scorecard-table>.Collapsible")

    let htmlStr = ""
    for(let i=0; i<inningsArr.length; i++){
        // let chtml = $(inningsArr[i]).html()
        // htmlStr += chtml
        let teamNameElem = $(inningsArr[i]).find('.header-title.label')
        let teamName = teamNameElem.text();
        // console.log(teamName);
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();

        // console.log(teamName);
        let hwtName = ""
        let hwt = 0;
        if(wTeamName != teamName){
            console.log(wTeamName);

            let tableElem = $(inningsArr[i]).find('.table.bowler')
            let allBowlers = $(tableElem).find('tr')

            for(let j=0; j<allBowlers.length; j++){
                let allColsPlayer = $(allBowlers[j]).find('td')
                let playerName = $(allColsPlayer[0]).text();
                let wickets = $(allColsPlayer[4]).text();       
                if(wickets >= hwt){
                    hwt = wickets;
                    hwtName = playerName
                } 
            }
            console.log(`Winning team ${wTeamName} Highest wicket taking bowler is ${hwtName} with ${hwt} wickets`);
        }
    }
    // console.log(htmlStr);
}
console.log("After");
