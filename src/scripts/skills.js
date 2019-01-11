var ratingToImageTable = ["", "", "", "", "",
  "http://gdurl.com/CZQD", // 2.5
  "http://gdurl.com/Uh1H", // 3
  "http://gdurl.com/1U6C", // 3.5
  "http://gdurl.com/ETfv", // 4
  "http://gdurl.com/5sp1", // 4.5
  "http://gdurl.com/3gB4"  // 5
];

function findRatingPath(rating) {
  return ratingToImageTable[rating * 2];
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
