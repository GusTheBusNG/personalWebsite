var ratingToImageTable = ["", "", "", "", "",
  "https://i.imgur.com/Cr5dmyZ.png", // 2.5
  "https://i.imgur.com/chg8dnm.png", // 3
  "https://i.imgur.com/09AnQNO.png", // 3.5
  "https://i.imgur.com/yL7EcQA.png", // 4
  "https://i.imgur.com/0kHMffB.png", // 4.5
  "https://i.imgur.com/qnkghMM.jpg"  // 5
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
