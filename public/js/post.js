document.addEventListener('DOMContentLoaded', init, false);
let requestURL = '../js/messages.json';
let request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()
request.onload = function() {
    const messages = request.response
    let randomIndex = Math.floor(Math.random()*messages.length)
    let message = messages[randomIndex]
    //console.log(message)
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

function init() {
}