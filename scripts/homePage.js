var introductionScript, quoteScript, whySoftwareScript;
var upperBar = document.getElementById("upperBar");
var lowerBar = document.getElementById("lowerBar");
var upperQuote = document.getElementById("upperQuote");
var lowerQuote = document.getElementById("lowerQuote");
var titleText = document.getElementsByClassName("titleText")[0];
var arrowWrapper = document.getElementsByClassName("arrowWrapper");
var leftArrow = document.getElementById("leftArrow");
var rightArrow = document.getElementById("rightArrow");
var titleTextIsOrange = true;
var i = 0, j = 0;

fadeIn(titleText);

setTimeout(function() {
    moveUpperBarDown();
    changeTitleTextTo(introductionScript[0]);
}, 1600);

setTimeout(function() {
    moveBarsUp();
    changeTitleTextTo(introductionScript[1]);
}, 3200);

setTimeout(function() {
    moveBottomBarDown();
    changeTitleTextTo(introductionScript[2]);
}, 4800);

setTimeout(function() {
    upperBar.classList.toggle("widen");
    upperBar.classList.toggle("moveToTop");

    lowerBar.classList.toggle("widen");
    lowerBar.classList.toggle("moveToBottom");

    fadeOut(titleText);
    setTimeout(function() {
        titleText.classList.toggle("titleText");
        titleText.classList.toggle("whySoftwareExplination");
        titleText.innerHTML = whySoftwareScript[j];
        titleText.style.color = "black";
        fadeIn(titleText);
    }, 500);

    setTimeout(function() {
        upperQuote.innerHTML = quoteScript[i]
        fadeIn(upperQuote);

        lowerQuote.innerHTML = quoteScript[++i];
        fadeIn(lowerQuote);

        fadeIn(arrowWrapper[1]);
        fadeIn(rightArrow);
    }, 1000);
}, 6400); // 6400

function rightArrowClicked() {
    i++;
    j++;
    if (i + 1 > quoteScript.length - 1) {
        i = quoteScript.length - 2;
    }
    if (j > whySoftwareScript.length - 1) {
        j = whySoftwareScript.length - 1;
    }
    setNewQuotes(i, ++i);
    changeTitleTextTo(whySoftwareScript[j]);
    if (j == 1) {
        fadeIn(arrowWrapper[0]);
        fadeIn(leftArrow);
    } else if (j == whySoftwareScript.length - 1) {
        fadeOut(arrowWrapper[1]);
        fadeOut(rightArrow);
    }
}

function leftArrowClicked() {
    i -= 3;
    j--;
    if (i < 0) {
        i = 0;
    }
    if (j < 0) {
        j = 0;
    }
    setNewQuotes(i, ++i);
    changeTitleTextTo(whySoftwareScript[j]);
    if (j == 0) {
        fadeOut(leftArrow);
        fadeOut(arrowWrapper[0]);
    } else if (j == whySoftwareScript.length - 2) {
        fadeIn(rightArrow);
        fadeIn(arrowWrapper[1]);
    }
}

function setNewQuotes(firstIndex, secondIndex) {
    fadeOut(upperQuote);
    fadeOut(lowerQuote);

    setTimeout(function() {
        upperQuote.innerHTML = quoteScript[firstIndex]
        fadeIn(upperQuote);

        lowerQuote.innerHTML = quoteScript[secondIndex];
        fadeIn(lowerQuote);
    }, 1000);
}

function changeTitleTextTo(message) {
    fadeOut(titleText);
    setTimeout(function() {
        titleText.innerHTML = message;
        if (titleText.classList.contains("titleText")) {
            switchTextColors();
        }
        fadeIn(titleText);
    }, 500);
}

function fadeOut(element) {
    if (element.classList.contains("fadeInAnimaiton")) {
        element.classList.toggle("fadeInAnimaiton");
        element.classList.toggle("fadeOutAnimaiton");
    } else {
        element.classList.toggle("fadeOutAnimaiton");
    }
}

function fadeIn(element) {
    if (element.classList.contains("fadeOutAnimaiton")) {
        element.classList.toggle("fadeOutAnimaiton");
        element.classList.toggle("fadeInAnimaiton");
    } else {
        element.classList.toggle("fadeInAnimaiton");
    }
}

function switchTextColors() {
    if (titleTextIsOrange) {
        titleText.style.color = "#522D80";
        titleTextIsOrange = false;
    } else {
        titleText.style.color = "#F66733";
        titleTextIsOrange = true;
    }
}

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

function sendIntroductionList(introductionScript) {
    this.introductionScript = introductionScript;
}

function sendQuoteList(quoteScript) {
    this.quoteScript = quoteScript;
}

function sendWhySoftwareList(whySoftwareScript) {
    this.whySoftwareScript = whySoftwareScript;
}
