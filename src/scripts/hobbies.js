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
