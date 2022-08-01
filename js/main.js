'use strict'

var gElBalloons = document.querySelectorAll('.balloon')
var gBalloons = [
    { id: 1, bottom: 0, speed: 1 },
    { id: 2, bottom: 0, speed: 1.5 },
    { id: 3, bottom: 0, speed: 1.25 }
]

var gIntervalId

function init() {
    renderBalloons()
    fly()
    // moveBalloons()
}

function fly() {
    gIntervalId = setInterval(moveBalloons, 50)
}

function moveBalloons() {
    // DOM
    var elBalloons = document.querySelectorAll('.balloon')
    for (var i = 0; i < gBalloons.length; i++) {
        // MODEL
        var balloon = gBalloons[i]

        //DOM
        var elBalloon = elBalloons[i]

        balloon.bottom += balloon.speed
        elBalloon.style.bottom = balloon.bottom + 'px'

        if (balloon.bottom > 350) {
            clearInterval(gIntervalId)
        }
    }
}

function popTheBalloon(elBalloon){                 
    var popSound = new Audio("sound/pop.mp3")
    popSound.play()
    elBalloon.style.opacity = 0
}

function renderBalloons() {
    var strHTML = ''
    for (var i = 0; i < gBalloons.length; i++) {
        strHTML +=
            `\n<div class="balloon balloon${i + 1}" onclick="popTheBalloon(this)"></div>`

        var elSky = document.querySelector('.sky')
        elSky.innerHTML = strHTML
    }
}
