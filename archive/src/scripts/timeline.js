var timeline = document.getElementsByClassName("timeline")[0];
var isLeft = true;

function sendExperiences(experiences) {
  for (var i = 0; i < experiences.length; i++) {
    if (i % 2 == 0) {
      isLeft = true;
    } else {
      isLeft = false;
    }
    makeExperience(experiences[i], i);
  }
}

function makeExperience(experience, i) {
  timeline.innerHTML +=
    "<div class=\"experienceContainer " + getLeftOrRight() + "\">" +
    "<div class=\"experience\" style=\"border-color: " + experience.color + ";\">" +
    getExperienceDescriptionContainer(experience) +
    getExperienceDurationContainer(experience, i) +
    "</div>" +
    "</div>";
}

function getExperienceDescriptionContainer(experience) {
  return "<div class=\"experienceDescriptionContainer\">" +
    makeExperienceTitle(experience.title) +
    makeExperienceLocation(experience.location) +
    makeExperienceDescription(experience.description) +
    makeExperienceTags(experience.tags, experience.color) +
    "</div>";
}

function getExperienceDurationContainer(experience, i) {
  return "<div class=\"experienceDurationContainer\" id=\"experienceDuration" + i + "\">" +
    makeExperienceDate(experience.startDate) +
    "<div class=\"experienceDurationBar\" style=\"background-color: " + experience.color + ";\"></div>" +
    makeExperienceDate(experience.endDate) +
    "</div>";
}

function makeExperienceTitle(experienceTitle) {
  return "<h2 class=\"experienceTitle\">" + experienceTitle + "</h2>";
}

function makeExperienceLocation(experienceLocation) {
  return "<h3 class=\"experienceLocation\">" + experienceLocation + "</h3>";
}

function makeExperienceDescription(experienceDescription) {
  return "<p class=\"experienceDescription\">" + experienceDescription + "</p>";
}

function makeExperienceDate(experienceDate) {
  return "<h3 class=\"experienceDate\">" + experienceDate + "</h3>";
}

function makeExperienceTags(experienceTags, color) {
  var tagContainer = "<div class=\"experienceTagsContainer\">"
  for (var i = 0; i < experienceTags.length; i++) {
    tagContainer += "<div class=\"experienceTagContainer\" style=\"border-color: " + color + "\">" +
      "<h3 class=\"tag\">" + experienceTags[i] + "</h3>" +
      "</div>";
  }
  return tagContainer + "</div>";
}

function getLeftOrRight() {
  return isLeft ? "left" : "right";
}
