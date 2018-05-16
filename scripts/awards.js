var awardsContainer = document.getElementsByClassName("awardsContainer")[0];
var awardsRow = document.getElementsByClassName("awardsRowContainer")[0];
var triangleContainer = document.getElementsByClassName("triangleContainer")[0];
var triangle = "<div class=\"lowerTriangle\"></div>";
var numberOfAwardsRow = 1;

function sendAwards(awards) {
    for (var i = 0; i < awards.length; i++) {
        addAward(awards[i]);

        if (i % 4 == 0 && i != 0) {
            addNewRow();
        }
    }
}

function addNewRow() {
    awardsContainer.innerHTML +=
        "<div class=\"awardsRowContainer\"></div><div class=\"triangleContainer\"></div>";
    awardsRow = document.getElementsByClassName("awardsRowContainer")[numberOfAwardsRow];
    triangleContainer = document.getElementsByClassName("triangleContainer")[numberOfAwardsRow++];
}

function addAward(award) {
    awardsRow.innerHTML += "<div class=\"awardContainer\">" +
        addAwardDescriptions(award) +
        "</div>";
    triangleContainer.innerHTML += triangle;
}

function addAwardDescriptions(award) {
    var descriptionList = "";
    for (var j = 0; j < award.length; j++) {
        descriptionList += "<p class=\"awardDiscription\">" + award[j] + "</p>";
    }
    return descriptionList;
}
