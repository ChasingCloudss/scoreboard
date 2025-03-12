//store the homeScore
//store the guestScore
//create a plusOne function
//render the result
//create a plusTwo function
//render the result
//create a plusThree function
//render the result
//create a refresh function
let homeScore = 0;
let guestScore = 0;

function addOneHome() {
    homeScore += 1;
    document.getElementById('home-point').textContent = homeScore;
}

function addTwoHome() {
    homeScore += 2;
    document.getElementById('home-point').textContent = homeScore;
}

function addThreeHome() {
    homeScore += 3;
    document.getElementById('home-point').textContent = homeScore;
}

function addOneGuest() {
    guestScore += 1;
    document.getElementById('guest-point').textContent = guestScore;
}

function addTwoGuest() {
    guestScore += 2;
    document.getElementById('guest-point').textContent = guestScore;
}

function addThreeGuest() {
    guestScore += 3;
    document.getElementById('guest-point').textContent = guestScore;
}

function newGame() {
    document.getElementById('home-point').textContent = 0;
    document.getElementById('guest-point').textContent = 0;
    homeScore = 0;
    guestScore = 0;
}