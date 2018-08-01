var introductionScript, quoteScript, whySoftwareScript, shortQuotes = [], oldQuoteList = [];
var upperBar = document.getElementById("upperBar");
var lowerBar = document.getElementById("lowerBar");
var quotes = document.getElementsByClassName("quote");
var upperQuote = quotes[0];
var lowerQuote = quotes[1];
var titleText = document.getElementsByClassName("titleText")[0];
var arrowWrapper = document.getElementsByClassName("arrowWrapper");
var leftArrow = document.getElementById("leftArrow");
var rightArrow = document.getElementById("rightArrow");
var titleTextIsOrange = true;
var i = 0, j = 0;
var mobileOnly = false;
var leftArrowShown = false, rightArrowShown = false;
var canShowQuotes = false;

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
    upperQuote.innerHTML = quoteScript[i];
    fadeIn(upperQuote);
    lowerQuote.innerHTML = quoteScript[++i];
    fadeIn(lowerQuote);
    canShowQuotes = true;

    fadeIn(getArrowWrapper(1));
    rightArrowShown = true;
  }, 1000);
}, 6400);

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
    fadeIn(getArrowWrapper(0));
    leftArrowShown = true;
  } else if (j == whySoftwareScript.length - 1) {
    fadeOut(getArrowWrapper(1));
    rightArrowShown = false;
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
    fadeOut(getArrowWrapper(0));
    leftArrowShown = false;
  } else if (j == whySoftwareScript.length - 2) {
    fadeIn(getArrowWrapper(1));
    rightArrowShown = true;
  }
}

function setNewQuotes(firstIndex, secondIndex) {
  fadeOut(upperQuote);
  fadeOut(lowerQuote);

  setTimeout(function() {
    upperQuote.innerHTML = quoteScript[firstIndex];
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

function refreshWidth() {
  if (!mobileOnly && window.innerWidth <= 640) {
    mobileOnly = true;
    showRightArrows();
  } else if (mobileOnly && window.innerWidth >= 640) {
    mobileOnly = false;
    showRightArrows();
  }

  var needShortQuotes = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
  if (needShortQuotes == "true" && oldQuoteList.length == 0) {
    i = 0;
    oldQuoteList = quoteScript;
    quoteScript = shortQuotes;
    if (canShowQuotes) {
      setNewQuotes(i, ++i);
    }
  } else if (needShortQuotes != "true" && oldQuoteList.length != 0) {
    quoteScript = oldQuoteList;
    oldQuoteList = [];
    i = 0;
    if (canShowQuotes) {
      setNewQuotes(i, ++i);
    }
  }
}

function getArrowWrapper(index) {
  return mobileOnly ? arrowWrapper[index + 2] : arrowWrapper[index];
}

function showRightArrows() {
  if (leftArrowShown) {
    fadeIn(getArrowWrapper(0));
  }
  if (rightArrowShown) {
    fadeIn(getArrowWrapper(1));
  }
}

function fadeOut(element) {
  if (!element.classList.contains("fadeOutAnimaiton")) {
    if (element.classList.contains("fadeInAnimaiton")) {
      element.classList.toggle("fadeInAnimaiton");
      element.classList.toggle("fadeOutAnimaiton");
    } else {
      element.classList.toggle("fadeOutAnimaiton");
    }
  }
}

function fadeIn(element) {
  if (!element.classList.contains("fadeInAnimaiton")) {
    if (element.classList.contains("fadeOutAnimaiton")) {
      element.classList.toggle("fadeOutAnimaiton");
      element.classList.toggle("fadeInAnimaiton");
    } else {
      element.classList.toggle("fadeInAnimaiton");
    }
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

  var shortQuotesIndex = 0;
  for (var quotesIndex = 0; quotesIndex < quoteScript.length; quotesIndex++) {
    if (quoteScript[quotesIndex].length <= 160) {
      shortQuotes[shortQuotesIndex++] = quoteScript[quotesIndex];
    }
  }
}

function sendWhySoftwareList(whySoftwareScript) {
  this.whySoftwareScript = whySoftwareScript;
}

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

var floppingImagesStarted = false;
var experienceHeights = [];

$(window).on("load", function () {
  $(window).scroll(function () {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".pageTitle").each(function () {
      var titleBottom = $(this).offset().top + $(this).outerHeight() * 2;

      if ($(this).css("opacity") == 0 && titleBottom < windowBottom) {
        $(this).toggleClass("fadeInAndUp");
      }
    });

    $(".experienceContainer").each(function () {
      var experienceContainer = $(this).offset().top + ($(this).outerHeight() * .75);
      experienceHeights.push($(this).outerHeight());
      if (experienceContainer < windowBottom) {
        if ($(this).css("opacity") == 0) {
          $(this).toggleClass("fadeInAndUp");
        }
      }
    });

    $(".experienceDurationBar").each(function (i) {
      var experienceContainer = $(this).offset().top;

      if (experienceContainer < windowBottom) {
        if (!$(this).hasClass('drawInAnimation')) {
          $("#experienceDuration" + i).height(experienceHeights[i] * .8);
          $(this).toggleClass("drawInAnimation");
          i *= 2;
          var date = document.getElementsByClassName("experienceDate");
          setTimeout(function () {
            fadeIn(date[i]);
            fadeIn(date[++i]);
          }, 1000);
        }
      }
    });

    $(".skillBar").each(function () {
      var skillBar = $(this).offset().top;

      if (skillBar < windowBottom) {
        if ($(this).css("height") == "0px") {
          $(".skillType").toggleClass("fadeInAndUp");
          $(".skills").toggleClass("fadeInAndRight");
          $(this).toggleClass("drawInAnimationMainBar");

          setTimeout(function () {
            $(".ratingsContainer").toggleClass("fadeInAndRight");
          }, 1000);
        }
      }
    });

    $(".awardRow").each(function (i) {
      $(".award").each(function (j) {
        var awardContainer = $(this).offset().top + ($(this).outerHeight() * .2);

        if (awardContainer < windowBottom) {
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(500 + ((500 * j) / (i + 2)), 1);
          }
        }
      })
    });

    $(".horizontalBar").each(function () {
      var horizontalBar = $(this).offset().top + ($(this).outerHeight() * 2);

      if (horizontalBar < windowBottom) {
        if ($(this).css("width") == "0px") {
          $(this).toggleClass("drawToRightAnimaiton");
        }
      }
    });

    $(".sectionTitleContainer").each(function () {
      var sectionTitle = $(this).offset().top + $(this).outerHeight() * .5;

      if (sectionTitle < windowBottom) {
        if (!$(this).hasClass("fadeInAndUp")) {
          $(this).toggleClass("fadeInAndUp");
        }
      }
    })

    $(".majorContainer").each(function () {
      var majorContainer = $(this).offset().top + ($(this).outerHeight() * .4);

      if (majorContainer < windowBottom) {
        if ($(this).css("opacity") == 0) {
          $(this).toggleClass("fadeInAndUp");
        }
      }
    });

    $(".GPAContainer").each(function () {
      var GPAContainer = $(this).offset().top + ($(this).outerHeight());

      if (GPAContainer < windowBottom) {
        if (!$(this).hasClass("fadeInAndUp")) {
          $(this).toggleClass("fadeInAndUp");
        }
      }
    });

    $(".notableCoursesContainer").each(function () {
      var notableCoursesContainer = $(this).offset().top + ($(this).outerHeight() * .7);

      if (notableCoursesContainer < windowBottom) {
        if ($(this).css("opacity") == 0) {
          $(this).toggleClass("fadeInAndUp");
        }
      }
    });

    $(".hobbieContainer").each(function () {
      var hobbieContainer = $(this).offset().top;

      if (!floppingImagesStarted && hobbieContainer < windowBottom) {
        flopImages(true);
        floppingImagesStarted = true;
      }
    });
  }).scroll();
});

var ratingToImageTable = ["", "", "", "", "",
  "img/2.5-stars.png",
  "img/3-stars.png",
  "img/3.5-stars.png",
  "img/4-stars.png",
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
    "<div class=\"awardRow\"></div>";
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

var notableCoursesTable = document.getElementById("notableCoursesTable");

function sendNotableCourses(courses) {
  var i = 0;
  for ( ; i + 1 < courses.length; i += 2) {
    fillCourseTitle(courses, i);
    fillCourseDescription(courses, i);
  }
  if (courses.length % 2 !== 0) {
    notableCoursesTable.innerHTML +=
    "<tr><th class=\"classTitle\">" + courses[i].title + "</th>/tr><tr><th class=\"classDescription\">" + courses[i].description + "</th></tr>";
  }
}

function fillCourseTitle(courses, i) {
  notableCoursesTable.innerHTML +=
  "<tr><th class=\"classTitle\">" + courses[i].title + "</th><th class=\"classTitle\">" + courses[++i].title + "</th></tr>";
}

function fillCourseDescription(courses, i) {
  notableCoursesTable.innerHTML +=
  "<tr><th class=\"classDescription\">" + courses[i].description + "</th><th class=\"classDescription\">" + courses[++i].description + "</th></tr>"
}

var resumeEmoji = document.getElementById("resumeEmoji");
var mailEmoji = document.getElementById("mailEmoji");
var resumeAnimationIsPlaying = false, mailAnimationIsPlaying = false;

function shakeResumeEmoji() {
  if (!resumeAnimationIsPlaying) {
    resumeAnimationIsPlaying = true;
    resumeEmoji.classList.toggle("shakeAnimation");
    setTimeout(function () {
      resumeEmoji.classList.toggle("shakeAnimation");
      resumeAnimationIsPlaying = false;
    }, 900);
  }
}

function shakeMailEmoji() {
  if (!mailAnimationIsPlaying) {
    mailAnimationIsPlaying = true;
    mailEmoji.classList.toggle("shakeAnimation");
    setTimeout(function () {
      mailEmoji.classList.toggle("shakeAnimation");
      mailAnimationIsPlaying = false;
    }, 900);
  }
}

var hobbieImgContainer = document.getElementsByClassName("hobbieContainer")[0];
var hobbieImgRowContainers = document.getElementsByClassName("hobbieRowContainer");
var hobbies = document.getElementsByClassName("hobbieImg");
var hobbieImgs, hobbieRowImgs;
var rowImageIndex = -1;
var indicesOfCurrentImages = [];
var numberOfImages = 1, numberOfImagesPerRow = getNumberOfImagesPerRow();
var recursiveCount = 0, continueRecursing = [true], relevantContinueRecursingIndex = 0;
const timeout = 1000;

function sendHobbieImg(hobbieImgs) {
  this.hobbieImgs = hobbieImgs;
  makeHobbieImgs();
}

function sendHobbieImgRow(hobbieRowImgs) {
  this.hobbieRowImgs = hobbieRowImgs;
}

function makeHobbieImgs() {
  var startIndex = 1;
  for (var i = 0; i < hobbieImgRowContainers.length; i++) {
    for (var j = startIndex; j < numberOfImagesPerRow; j++) {
      hobbieImgRowContainers[i].innerHTML += makeHobbieImg();
      numberOfImages++;
    }
    startIndex = 0;
  }
}

function onResize() {
  var newNumberOfImagesPerRow = getNumberOfImagesPerRow();
  var oldRecursiveIndex;
  if (newNumberOfImagesPerRow != numberOfImagesPerRow) {
    continueRecursing.push(false);
    oldRecursiveIndex = ++relevantContinueRecursingIndex;
    numberOfImagesPerRow = newNumberOfImagesPerRow;

    setTimeout(function () {
      for (var i = 0; i < hobbieImgRowContainers.length; i++) {
        hobbieImgRowContainers[i].innerHTML = "";
        for (var j = 0; j < newNumberOfImagesPerRow; j++) {
          hobbieImgRowContainers[i].innerHTML += makeHobbieImg();
        }
      }
    }, 2000);

    numberOfImages = numberOfImagesPerRow * 3;

    setTimeout(function () {
      continueRecursing[oldRecursiveIndex] = true;
      flopImages(true);
    }, 3000);
  }
}

function flopImages(noRowImg) {
  hobbies = document.getElementsByClassName("hobbieImg");

  if (recursiveCount++ >= 500 || !continueRecursing[relevantContinueRecursingIndex]) {
    return;
  }

  if (noRowImg) {
    flopRandomImagesToARowImage();
  } else {
    flopRandomImage();
  }
}

function flopRandomImagesToARowImage() {
  var index = getIndexToStartReplacingWithRowImage();
  setTimeout(function () {
    replaceWithRowImage(index);
    rowImageIndex = index;
    flopImages(false);
  }, timeout * 2);
}

function flopRandomImage(rowImageIndex) {
  var randomHobbieIndex = rowImageIndex || getRandomIndex();
  if (this.rowImageIndex == randomHobbieIndex) {
    // replacing a row image with 2 or 3 different regular images
    setTimeout(function () {
      hobbies[randomHobbieIndex].style.visibility = "hidden";
      hobbies[randomHobbieIndex].outerHTML = makeHobbieImagesToReplaceRowImage();
      var replacedImgs = getImagesThatReplacedTheRowImage();

      for (var i = 0; i < replacedImgs.length; i++) {
        replacedImgs[i].classList.toggle("flopAnimation");
        replacedImgs[i].style.visibility = "visible";
        replacedImgs[i].id = "";
        setTimeout(function () {
          var index = 0;
          while (index == 0 || index % replacedImgs.length != 0) {
            replacedImgs[index++].classList.toggle("flopAnimation");
          }
        }, timeout);
      }
      numberOfImagesPerRow >= 3 ? numberOfImages += 2 : numberOfImages++;
      flopImages(true);
    }, timeout * 2);
  } else {
    setTimeout(function () {
      flopNewImage(randomHobbieIndex);
      flopImages(false);
    }, timeout * 2);
  }
}

function replaceWithRowImage(index) {
  hobbies[index].style.visibility = "hidden";
  if (numberOfImagesPerRow == 2) {
    hobbies[(index + 1)].outerHTML = "";
    hobbies[index].outerHTML = makeHobbieRowImg();
    numberOfImages--;
  } else {
    hobbies[(index + 1)].outerHTML = "";
    hobbies[(index + 1)].outerHTML = "";
    hobbies[index].outerHTML = makeHobbieRowImg();
    numberOfImages -= 2;
  }
  hobbies[index].classList.toggle("flopAnimation");
  hobbies[index].style.visibility = "visible";
  takeOffFlopAnimation(hobbies[index]);
}

function getIndexToStartReplacingWithRowImage() {
  var index = getRandomIndex();
  var counter = 1;
  if (numberOfImagesPerRow == 2) {
    while (counter++ <= 3 && index % numberOfImagesPerRow != 0) {
      index = getRandomIndex();
    }
  } else {
    while (counter++ <= 3 && (!((index + 3) % numberOfImagesPerRow == 0 ||
      (index + 3) % numberOfImagesPerRow > index % numberOfImagesPerRow))) {
      index = getRandomIndex();
    }
  }
  if (counter >= 3) {
    index = 0;
  }
  return index;
}

function getRandomIndex() {
  return Math.floor(Math.random() * numberOfImages);
}

function getImagesThatReplacedTheRowImage() {
  if (numberOfImagesPerRow >= 3) {
    return [document.getElementById("1"), document.getElementById("2"), document.getElementById("3")];
  }
  return [document.getElementById("1"), document.getElementById("2")];
}

function flopNewImage(index) {
  hobbies[index].style.visibility = "hidden";
  hobbies[index].style.backgroundImage = makeHobbieUrl(hobbieImgs[Math.floor(Math.random() * hobbieImgs.length)])
  hobbies[index].classList.toggle("flopAnimation");
  takeOffFlopAnimation(hobbies[index]);
  hobbies[index].style.visibility = "visible";
}

function takeOffFlopAnimation(hobbieImg) {
  setTimeout(function () {
    hobbieImg.classList.toggle("flopAnimation");
  }, timeout);
}

function getNumberOfImagesPerRow() {
  var windowWidth = window.innerWidth;
  if (windowWidth < 580) {
    return 2;
  } else if (windowWidth < 1100) {
    return 3;
  } else {
    return 4;
  }
}

function makeHobbieImagesToReplaceRowImage(randomHobbieIndex) {
  if (numberOfImagesPerRow >= 3) {
    var index = Math.abs(Math.floor(Math.random() * hobbieImgs.length) - 2);
    return "<div class=\"hobbieImg\" id=\"1\" style=\"background-image: " + makeHobbieUrl(hobbieImgs[index++]) + ";\"></div>" +
      "<div class=\"hobbieImg\" id=\"2\" style=\"background-image: " + makeHobbieUrl(hobbieImgs[index++]) + ";\"></div>" +
      "<div class=\"hobbieImg\" id=\"3\" style=\"background-image: " + makeHobbieUrl(hobbieImgs[index]) + ";\"></div>";
  }
  var index = Math.abs(Math.floor(Math.random() * hobbieImgs.length) - 1);
  return "<div class=\"hobbieImg\" id=\"1\" style=\"background-image: " + makeHobbieUrl(hobbieImgs[index++]) + ";\"></div>" +
    "<div class=\"hobbieImg\" id=\"2\" style=\"background-image: " + makeHobbieUrl(hobbieImgs[index]) + ";\"></div>"
}

function makeHobbieUrl(hobbieImg) {
  return "url('img/" + hobbieImg + "')";
}

function makeHobbieRowImg() {
  var randomHobbieRowIndex = Math.floor(Math.random() * hobbieRowImgs.length);
  return "<div class=\"hobbieImg\" id=\"row\" style=\"background-image: " + makeHobbieUrl(hobbieRowImgs[randomHobbieRowIndex]) + ";\"></div>";
}

function makeHobbieImg() {
  var randomIndex = Math.floor(Math.random() * hobbieImgs.length);
  return "<div class=\"hobbieImg\" style=\"background-image: " + makeHobbieUrl(hobbieImgs[randomIndex]) + ";\"></div>";
}

sendIntroductionList([
  "Why Software?",
  "Well it's kind of a long story...",
  "So let's get started"
]);
sendQuoteList([
  "\"One of the ways I believe people express their appreciations to the rest of humanity is to make something wonderful and put it out there\" - Steve Jobs",
  "\"The problem, often not discovered until late in life, is that when you look for things in life like love, meaning, motivation, it implies they are sitting behind a tree or under a rock. The most successful people in life recognize, that in life they create their own love, they manufacture their own meaning, they generate their own motivation.\" - Neil deGrasse Tyson",
  "\"I will do what I can when I can so that when I cannot I will not wish that I would have when I could have\" - Dabo Swinney",
  "\"Strength. Mastery. But weakness, folly, failure also. Yes, failure most of all. The greatest teacher, failure is.\" - Yoda",
  "\"Just smack it\" - Dan Mace",
  "\"What you aim at is what you see\" - Jordan B Peterson",
  "\"There\'s lots of ways to be, as a person.\" - Steve Jobs",
  "\"Don't nourish your fears more than you nourish your hopes\"",
  "\"I am not what I think I am, I am not what you think I am, I am what I think you think I am\" - Most people",
  "\"I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.\" - Romans 8:18 (NIV)",
  "\"The biggest risk is not taking any risk. In a world that’s changing really quickly, the only strategy that is guaranteed to fail is not taking risks.\" — Mark Zuckerberg",
  "\"The great thing in this world is not so much where you stand, as in what direction you are moving.\" — Oliver Wendell Holmes",
  "\"The people that say, 'your dreams are impossible' have already quit on theirs.\" — Grant Cardone",
  "\"Do the best you can until you know better. Then, when you know better, do better\" - Maya Angelou"
]);
sendWhySoftwareList([
  "This is how I express my deep appreciation. I believe that there is nothing more amazing in this world than a true smile, and seeing someone truly smile at my work or because of my work makes me reflect on how much I love what I do. So I chose to start there, figuring out how to make people smile.",
  "Clearly, there is a connection between the outcome of working hard and making others happy. The activity that taught me how to work hard was playing the trumpet. It taught me that being apart of a group of people with the same interest can make a bigger impact. This is the first area that I got a lot of people to smile, as well as respect because they knew I worked hard to play the trumpet well.",
  "Through many hours of practicing and many auditions, I was accepted into a handful of superior bands, which is where I met a true group of A-players which excited and amazed me. Everyone was passionate about what they were doing, which in turn made everyone who came to hear us smile.",
  "So why did I transition over to a life of software development? Well, I see myself, among other things, to be a very logical and analytical thinker that is always thinking about how things work under the hood. I also believe there are far more passionate people in software development than any other field. Therefore, one could make truly amazing software and distribute it to the world.",
  "While I know I am only highlighting the ending I must also say that life is not only about the finished product but also the journey. Along my journey, I have met some amazing people as well as had some unforgettable experiences, not only working on making a finished product better but also having fun with whoever worked with me outside of the product.",
  "So I am continuing to do what I know best: work hard and have fun doing it. This is how I stay true to myself and how I remind myself what is truly important to me."
]);
sendExperiences([
  {
    title: "TSA National Competition",
    location: "Dutch Fork High School @ Irmo, SC",
    startDate: "November 2015",
    endDate: "July 2016",
    color: "#28A028",
    description: "Designed and developed a web application for registration purposes at Camp Old Indian with 2 other students. Handled 1000s of scouts with 1000s of courses with advancement features and multiple user interfaces. Technology Students of America National Competition: National Finalist, 7th Place; State Competition: 1st Place. Inaugural software engineering competition for Dutch Fork High School.",
    tags: ["PHP", "MySQL", "Laravel 5", "HTML", "Google Cloud"]
  },
  {
    title: "Tiger Band Website",
    location: "Clemson University Tiger Band @ Clemson, SC",
    startDate: "January 2017",
    endDate: "Present",
    color: "#F66733",
    description: "Designed and developed a completely new website for Tiger Band, Clemson University Drumline, and Clemson University Tiger Band Association. Completed the website with a team of 3 students.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "AWS"]
  },
  {
    title: "BMW Digital and Mobile Co-op",
    location: "BMW Group @ Greenville, SC",
    startDate: "August 2017",
    endDate: "December 2017",
    color: "#0089FF",
    description: "Implemented a major feature to be added into the main BMW mobile application with a software engineering team comprised of 8 people. Developed this feature in Angular 4 with Test-Driven Development. Improved 3 different micro-services for the major feature using ExpressJS. Designed and developed the end-to-end automated testing library for the major feature. Pioneered and created an automated testing stack to run automated tests on both iOS and Android simultaneously using Protractor and Appium.",
    tags: ["TypeScript", "Angular 4+", "NodeJS", "Protractor", "Appium", "Jasmine", "Selenium", "PostgreSQL", "ExpressJS", "Docker"]
  },
  {
    title: "Virtual Reality Research",
    location: "Clemson University Tiger Band @ Clemson, SC",
    startDate: "January 2018",
    endDate: "May 2018",
    color: "#F66733",
    description: "Designed a way to sync data coming from bio-pack systems and the virtual reality experience in order to measure and hypothesize based on the data recorded. Coordinated with the project leads on which virtual reality experience will be most effective to relax the patient undergoing surgery.",
    tags: ["OBS", "Excel", "BioPack"]
  },
  {
    title: "BMW Digital and Mobile Co-op",
    location: "BMW Group @ Greenville, SC",
    startDate: "May 2018",
    endDate: "August 2018",
    color: "#0089FF",
    description: "I got to lead 4 people to test and develop automated test scripts for a complex web application. While leading I gathered and handled new ideas and information from the team to improve the way the team tests web/mobile applications. Therefore, I provided and proved a better flow for the test team in how to develop and document tests to allow more creative thought from the test engineers. This new system molded new interns and full time developers to be creative and motivated test engineers. A smaller project was finishing development of automated test scripts for a major feature of the BMW Connected mobile application.",
    tags: ["Leadership", "MongoDB", "Protractor", "PostgreSQL", "Cypress", "Typescript", "Git", "testCafé", "Bamboo", "Zephyr", "Postman"]
  }
]);
sendSkillsLanguages([
  { name: "TypeScript", stars: 5 },
  { name: "JavaScript", stars: 4.5 },
  { name: "Java", stars: 4 },
  { name: "C++", stars: 4 },
  { name: "C", stars: 4 },
  { name: "HTML", stars: 4 },
  { name: "CSS", stars: 4 },
  { name: "MongoDB", stars: 4 },
  { name: "PHP", stars: 3.5 },
  { name: "MySQL", stars: 3.5 },
  { name: "PostgreSQL", stars: 3 },
  { name: "ARM", stars: 3 }
]);
sendSkillsFramewors([
  { name: "Protractor", stars: 5 },
  { name: "Appium", stars: 5 },
  { name: "Jasmine", stars: 5 },
  { name: "Cypress", stars: 4.5 },
  { name: "testCafé", stars: 4.5 },
  { name: "Selenium", stars: 4.5 },
  { name: "Angular 4", stars: 4 },
  { name: "ExpressJS", stars: 3.5 },
  { name: "NodeJS", stars: 3.5 },
  { name: "Docker", stars: 3 }
]);
sendSkillsTools([
  { name: "Bash", stars: 4.5 },
  { name: "Git", stars: 4.5 },
  { name: "Adobe Xd", stars: 4.5 },
  { name: "Atlassian Suite", stars: 4.0 },
  { name: "Postman", stars: 4.0 },
  { name: "AWS", stars: 2.5 },
  { name: "Unity", stars: 2.5 }
]);
sendNotableCourses([
  { title: "CPSC 2120 Algorithms and Data Structures", description: "Study of data structures and algorithms fundamental to computer science; abstract data-type concepts; measures of program running time and time complexity; algorithm analysis and design techniques." },
  { title: "CPSC 3120 Introduction to Desgin and Analysis of Algorithms", description: "Topics include advanced data structures, amortized analysis, dynamic programming, graph algorithms, intractability and applications." },
  { title: "CPSC 2150 Software Development Foundations", description: "Intensive study of software development foundations. Advanced coverage of programming language primitives, function-level design principles, and standard development and debugging tools. Introductory coverage of module-level design principles, program specification and reasoning principles, and validation and verification techniques." },
  { title: "CPSC 3600 Networks and Network Programming", description: "Introduction to basic concepts of computer network technologies and network programming. Topics include network programming, layered protocol architectures, local and wide area networks, internetwork and intranetwork concepts, security. Socket level programming is introduced and used throughout the course." },
  { title: "CPSC 2310 Introduction to Computer Organization", description: "Study of the machine architectures on which algorithms are implemented and requirements of architectures that support high-level languages, programming environments, and applications." },
  { title: "CPSC 3720 Introduction Software Engineering", description: "Intensive introduction to software engineering. Focuses on each major phase of the software lifecycle. Introductory coverage of requirements analysis, requirements modeling, design modeling, and project management. Intermediate coverage of module-level design principles, program specification and reasoning principles, and program validation and verification techniques." }
]);
sendHobbieImgRow([
  "clemsonVsLousiville.jpg",
  "nationalChampionship.jpg",
  "moutains.jpg"
]);
sendHobbieImg([
  "cliff.jpg",
  "repel.jpg",
  "rockWay.jpg",
  "lazer.jpg",
  "eagleProject.jpg",
  "sandiego.jpg",
  "sandiegocliffs.jpg",
  "riverbanks.jpg",
  "trophies.jpg",
  "crazyTrumpets.jpg",
  "baldy.jpg"
]);
sendAwards([
  ["Eagle Scout", "Boy Souts of America", "Troop 95", "Irmo, SC", "June 2015"],
  ["President's List", "Clemson University", "Clemson, SC", "Fall 2016"],
  ["Dean's List", "Clemson University", "Clemson, SC", "Fall 2016", "Spring 2017", "Spring 2018"],
  ["Trumpet Section Leader", "Clemson University Tiger Band", "Fall 2018"],
  ["Band Scholarships", "CU Tiger Band Assoc Schol", "CU Band(s) Grant-In-Aid", "Brooks Center GIA", "VO & AP Snelgrove GIA", "J Helms Endowed CUTBA GIA"],
  ["Employees of Duke Energy", "Duke Energy", "Spring 2018"],
  ["Life Scholarship", "State of South Carolina", "Fall 2016", "Spring 2017", "Spring 2018 + Enchancement"],
  ["Assistant Site Leader", "Salkehatchie Summer Service", "Summer 2017"],
  ["First Student ever from Dutch Fork High School to be accepted in The Honor Band of America", "Fall 2016"]
]);

$(window).resize(function () {
  refreshWidth();
  onResize();
}).resize();
