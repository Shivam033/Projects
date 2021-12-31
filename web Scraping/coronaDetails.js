const request = require("request")
const cheerio = require('cheerio')

console.log('Before');

request('https://www.worldometers.info/coronavirus/', cb)

function cb(error, response, html) {
    if(error){
        console.error(error);
    }else{
        handleHtml(html)
    }
}
function handleHtml(html){
    // in selector tool we are getting the whole html of a page
    let selTool = cheerio.load(html)

    let contentArr = selTool('#maincounter-wrap span')

    // for(let i=0; i<contentArr.length; i++){
    //     let data = selTool(contentArr[i]).text()

    //     console.log('data' , data);
    // }

    let totalCases = selTool(contentArr[0]).text()
    let totalDeaths = selTool(contentArr[1]).text()
    let totalRecoveries = selTool(contentArr[2]).text()

    console.log('cases', totalCases);
    console.log("deaths", totalDeaths);
    console.log('recovery', totalRecoveries);

}
  console.log('After');