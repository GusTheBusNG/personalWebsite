var timeline = document.getElementsByClassName("timeline")[0];

function sendExperiences(experiences) {
  for (var i = 0; i < experiences.length; i++) {
    if (i % 2 == 0) {
      makeLeftExperience(experiences[i]);
    } else {
      makeRightExperience(experiences[i]);
    }
  }
}

function makeLeftExperience(experience) {
  timeline.innerHTML +=
    "<div class=\"experienceContainer left\" style=\"border-color: " + experience.color + ";\">" +
      "<div class=\"experience\">" +
        getExperienceDescriptionContainer(experience) +
        getExperienceDurationContainer(experience) +
      "</div>" +
    "</div>";
}

function makeRightExperience(experience) {
  timeline.innerHTML +=
    "<div class=\"experienceContainer right\" style=\"border-color: " + experience.color + ";\">" +
      "<div class=\"experience\">" +
        getExperienceDescriptionContainer(experience) +
        getExperienceDurationContainer(experience) +
      "</div>" +
    "</div>";
}

function getExperienceDescriptionContainer(experience) {
  return "<div class=\"experienceDescriptionContainer\">" +
      makeExperienceTitle(experience.title) +
      makeExperienceLocation(experience.location) +
      makeExperienceDescription(experience.description) +
    "</div>";
}

function getExperienceDurationContainer(experience) {
  return "<div class=\"experienceDurationContainer\">" +
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
