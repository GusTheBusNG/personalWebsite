var upperBar = document.getElementById("upper");
var lowerBar = document.getElementById("lower");
var titleText = document.getElementsByClassName("titleText");
var titleTextIsOrange = true;

titleText[0].classList.toggle("fadeInAnimaiton");

setTimeout(function() { moveUpperBarDown(); }, 1600);

setTimeout(function() { changeTitleTextTo("Why Software?"); }, 1600);

setTimeout(function() { moveBarsUp(); }, 3200);

setTimeout(function() { changeTitleTextTo("Well it's kind of a long story..."); }, 3200);

setTimeout(function() { moveBottomBarDown(); }, 4800);

setTimeout(function() { changeTitleTextTo("So here it is"); }, 4800);

function moveUpperBarDown() {
    upperBar.classList.toggle("moveDown");
}

function moveBarsUp() {
    upperBar.classList.toggle("moveDown");
    lowerBar.classList.toggle("moveUp");
}

function moveBottomBarDown() {
    lowerBar.classList.toggle("moveUp");
}

function changeTitleTextTo(message) {
    titleText[0].classList.toggle("fadeInAnimaiton");
    titleText[0].classList.toggle("fadeOutAnimaiton");
    setTimeout(function() {
        titleText[0].innerHTML = message;
        switchTextColors();
        titleText[0].classList.toggle("fadeOutAnimaiton");
        titleText[0].classList.toggle("fadeInAnimaiton");
    }, 400);
}

function switchTextColors() {
    if (titleTextIsOrange) {
        titleText[0].style.color = "#522D80";
        titleTextIsOrange = false;
    } else {
        titleText[0].style.color = "#F66733";
        titleTextIsOrange = true;
    }
}
