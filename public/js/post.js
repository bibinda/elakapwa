document.addEventListener('DOMContentLoaded', init, false);

let messages
let message
let requestURL = '../js/messages.json';
let request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()


async function init() {
    request.onload =  function () {
        messages = request.response
        console.log(messages)
        post()
    }
}

async function getRandom(length) {
    let randomIndex = Math.floor(Math.random() * length)
    message = messages[randomIndex]
}

function getPost(id, intervention, genAud, tarAud, promote) {

}

function post() {
    if (message == undefined) {
        getRandom(messages.length)
    }
    const idElem = document.querySelector('.message_id')
    const intervElem = document.querySelector('.intervention')
    const genElem = document.querySelector('.general_audience')
    const tarElem = document.querySelector('.target_audience')
    const promElem = document.querySelector('.promote')
    const msgElem = document.querySelector('.message')
    idElem.innerHTML = message.id
    intervElem.innerHTML = message.intervention
    genElem.innerHTML = message.general_audience
    tarElem.innerHTML = message.target_audience
    promElem.innerHTML = message.promoted_behavior
    msgElem.innerHTML = message.message.English
}