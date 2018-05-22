var ratingToImageTable = ["", "", "", "", "",
  "img/2.5-stars.png",
  "img/3-stars.png",
  "img/3.5-stars.jpeg",
  "img/4-stars.jpeg",
  "img/4.5-stars.png",
  "img/5-stars.jpeg"
];

function findRatingPath(rating) {
  return ratingToImageTable[rating*2];
}

function makeSkill(item) {
  return "<p class=\"skill\">" + item.name + "</p>";
}

function makeRating(item) {
  return "<img class=\"stars\" hspace=\"20\" src=\"" + findRatingPath(item.stars) + "\">"
}

function sendSkillsLanguages(languageSkills) {
  var languageSkillsContainer = document.getElementById("languageSkills");
  fillSkills(languageSkillsContainer, languageSkills);
  var languageRatingContainer = document.getElementById("languageRatings");
  fillRatings(languageRatingContainer, languageSkills);
}

function sendSkillsFramewors(frameworkSkills) {
  var frameworkSkillsContainer = document.getElementById("frameworkSkills");
  fillSkills(frameworkSkillsContainer, frameworkSkills);
  var frameworkRatingContainer = document.getElementById("frameworkRatings");
  fillRatings(frameworkRatingContainer, frameworkSkills);
}

function sendSkillsTools(toolSkills) {
  var toolSkillsContainer = document.getElementById("toolSkills");
  fillSkills(toolSkillsContainer, toolSkills);
  var toolSkillsContainer = document.getElementById("toolRatings");
  fillRatings(toolSkillsContainer, toolSkills);
}

function fillSkills(skillContainer, list) {
  for (var i = 0; i < list.length; i++) {
    skillContainer.innerHTML += makeSkill(list[i]);
  }
}

function fillRatings(ratingContainer, list) {
  for (var i = 0; i < list.length; i++) {
    ratingContainer.innerHTML += makeRating(list[i]);
  }
}
