var ratingToImageTable = [
    {rating: 5,     imgPath: "img/5-stars.jpeg"},
    {rating: 4.5,   imgPath: "img/4.5-stars.png"},
    {rating: 4,     imgPath: "img/4-stars.jpeg"},
    {rating: 3.5,   imgPath: "img/3.5-stars.jpeg"},
    {rating: 3,     imgPath: "img/3-stars.png"},
    {rating: 2.5,   imgPath: "img/2.5-stars.png"}
];

function findRatingPath(rating) {
    for (var i = 0; i < ratingToImageTable.length; i++) {
        if (ratingToImageTable[i].rating == rating) {
            return ratingToImageTable[i].imgPath;
        }
    }
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
