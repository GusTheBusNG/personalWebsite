var hobbieImgContainer = document.getElementsByClassName("hobbieContainer")[0];
var hobbieImgRowContainers = document.getElementsByClassName("hobbieRowContainer");
var hobbies = document.getElementsByClassName("hobbieImg");
var hobbieImgs, hobbieRowImgs;
var rowImageIndex = -1;
var indicesOfCurrentImages = [];
var numberOfImages = 1, numberOfImagesPerRow = getNumberOfImagesPerRow();
var recursiveCount = 0;

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
      hobbieImgRowContainers[i].innerHTML += "<div class=\"hobbieImg\" style=\"background-image: " + makeHobbieUrl(hobbieImgs[j]) + ";\"></div>";
      numberOfImages++;
    }
    startIndex = 0;
  }
}

function flopImages(noRowImg) {
  hobbies = document.getElementsByClassName("hobbieImg");

  if (recursiveCount++ >= 500) {
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
  }, 1000);
}

function flopRandomImage() {
  var randomHobbieIndex = getRandomIndex();
  if (rowImageIndex == randomHobbieIndex) {
    // replacing a row image with 2 or 3 different regular images
    setTimeout(function() {
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
        }, 500);
      }
      numberOfImagesPerRow >= 3 ? numberOfImages += 2 : numberOfImages++;
      flopImages(true);
    }, 1000);
  } else {
    setTimeout(function() {
      flopNewImage(randomHobbieIndex);
      flopImages(false);
    }, 1000);
  }
}

function replaceWithRowImage(index) {
  hobbies[index].style.visibility = "hidden";
  hobbies[index].outerHTML = makeHobbieRowImg();
  if (numberOfImagesPerRow == 2) {
    hobbies[(index + 1)].outerHTML = "";
    numberOfImages--;
  } else {
    hobbies[(index + 1)].outerHTML = "";
    hobbies[(index + 1)].outerHTML = "";
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
  if (counter == 4) {
    index = 0
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
  hobbies[index].style.backgroundImage = makeHobbieUrl(hobbieImgs[getRandomIndex()])
  hobbies[index].classList.toggle("flopAnimation");
  takeOffFlopAnimation(hobbies[index]);
  hobbies[index].style.visibility = "visible";
}

function takeOffFlopAnimation(hobbieImg) {
  setTimeout(function () {
    hobbieImg.classList.toggle("flopAnimation");
  }, 500);
}

function getNumberOfImagesPerRow() {
  var windowWidth = window.innerWidth;
  var hobbieWidth = window.getComputedStyle(hobbies[0]).getPropertyValue('width');
  var widthFraction = parseInt(hobbieWidth, 10)/windowWidth;
  if (.52 > widthFraction && widthFraction > .35) {
    return 2;
  } else if (.35 > widthFraction && widthFraction > .27) {
    return 3;
  } else if (.27 > widthFraction && widthFraction > .145) {
    return 4;
  } else if (.145 > widthFraction && widthFraction > .0825) {
    return 8;
  } else {
    return 16;
  }
}

function makeHobbieImagesToReplaceRowImage(randomHobbieIndex) {
  if (numberOfImagesPerRow >= 3) {
    var index = Math.floor(Math.random() * hobbieImgs.length) - 2;
    return "<div class=\"hobbieImg\" id=\"1\" style=\"background-image: " + makeHobbieUrl(hobbieImgs[index++]) + ";\"></div>" +
            "<div class=\"hobbieImg\" id=\"2\" style=\"background-image: " + makeHobbieUrl(hobbieImgs[index++]) + ";\"></div>" +
            "<div class=\"hobbieImg\" id=\"3\" style=\"background-image: " + makeHobbieUrl(hobbieImgs[index]) + ";\"></div>";
  }
  var index = Math.floor(Math.random() * hobbieImgs.length) - 1;
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
