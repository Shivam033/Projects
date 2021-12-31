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
        // team name
        let teamNameElem = $(inningsArr[i]).find('.header-title.label')
        let teamName = teamNameElem.text();
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();

        // console.log(teamName);

        let tableElem = $(inningsArr[i]).find('.table.batsman')
        let allBowlers = $(tableElem).find('tr')

        for(let j=0; j<allBowlers.length; j++){
            let allColsPlayer = $(allBowlers[j]).find('td')
            let isBatsmanCol = $(allColsPlayer[0]).hasClass("batsman-cell")
            ;
            if(isBatsmanCol == true){
                let href = $(allColsPlayer[0]).find("a").attr("href");
                let name = $(allColsPlayer[0]).text();
                let fullLink = "https://www.espncricinfo.com"+href;
                // console.log(fullLink)
                getBirthdayPage(fullLink, name, teamName);
            }
        }
    }
}
function getBirthdayPage(url, name, teamName){
    request(url, cb);
    function cb(err, response, html){
        if(err){

        }else{
            extractBirthDay(html, name, teamName);
        }
    }
}

function extractBirthDay(html, name, teamName){
    let $ = cheerio.load(html);
    let detailsArr = $(".player-card-description")

    let birthday = $(detailsArr[1]).text();
    console.log(`${name} plays for ${teamName} was born on ${birthday}`);
}

console.log("After");
