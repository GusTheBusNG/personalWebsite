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
    return "<p class=\"skill\">" + item.name + " <img class=\"stars\" hspace=\"20\" src=\"" +
    findRatingPath(item.stars) + "\"></p>";
}

function sendSkillsLanguages(languageSkills) {
    var languageSkillsContainer = document.getElementById("languageSkills");
    fillSkills(languageSkillsContainer, languageSkills);
}

function sendSkillsFramewors(frameworkSkills) {
    var frameworkSkillsContainer = document.getElementById("frameworkSkills");
    fillSkills(frameworkSkillsContainer, frameworkSkills);
}

function sendSkillsTools(toolSkills) {
    var toolSkillsContainer = document.getElementById("toolSkills");
    fillSkills(toolSkillsContainer, toolSkills);
}

function fillSkills(container, list) {
    for(var i = 0; i < list.length; i++) {
        container.innerHTML += makeSkill(list[i]);
    }
}
