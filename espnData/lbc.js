const request = require('request');
const cheerio = require('cheerio')

console.log('Before');

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary"

request(url, cb)
function cb(error, response, html) {
    if(error){
        console.error(error);
    }else{
        handleHtml(html)
    }
}

function handleHtml(html){
    let $ = cheerio.load(html)

    let contentArr = $('.d-flex.match-comment-padder.align-items-center .match-comment-long-text')

    let lbc = $(contentArr[0]).text()
    let lbcHtml = $(contentArr[0]).html()

    console.log('Commentary -> ', lbc);
    console.log('html of Commentary', lbcHtml);
}

console.log('After');