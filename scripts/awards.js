var awardsContainer = document.getElementsByClassName("awardRowContainer")[0];
var awardsRow = document.getElementsByClassName("awardRow")[0];
var triangle = "<div class=\"lowerTriangle\"></div>";
var numberOfAwardsRow = 1;

function sendAwards(awards) {
  for (var i = 0; i < awards.length; i++) {
    if (i % 5 == 0 && i != 0) {
      addNewRow();
    }
    addAward(awards[i]);
  }
}

function addNewRow() {
  awardsContainer.innerHTML +=
    "<div class=\"awardRow\"></div><div class=\"triangleContainer\"></div>";
  awardsRow = document.getElementsByClassName("awardRow")[numberOfAwardsRow];
}

function addAward(award) {
  awardsRow.innerHTML += "<div class=\"award\">" +
    triangle +
    addAwardDescriptions(award) +
  "</div>";
}

function addAwardDescriptions(award) {
  var descriptionList = "";
  for (var j = 0; j < award.length; j++) {
    descriptionList += "<p class=\"awardDiscription\">" + award[j] + "</p>";
  }
  return descriptionList;
}
