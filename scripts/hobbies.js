var hobbies = document.getElementsByClassName("hobbieImg");
var hobbieImgs, hobbieRowImgs;
var indicesOfRowImages = [9];
var indicesOfCurrentImages = [];

function sendHobbieImg(hobbieImgs) {
    this.hobbieImgs = hobbieImgs;
    flopImages(Math.floor(Math.random() * 10), 10, false);
    for (var i = 0; i < hobbies.length; i++) {
        hobbies[i].style.backgroundImage = buildHobbieStyle(hobbieImgs[i % hobbieImgs.length]);
        indicesOfCurrentImages.push(i % hobbieImgs.length);
    }
}

function sendHobbieImgRow(hobbieRowImgs) {
    this.hobbieRowImgs = hobbieRowImgs;
    document.getElementById("row").style.backgroundImage = buildHobbieStyle(hobbieRowImgs[0]);
}

function buildHobbieStyle(hobbieImg) {
    return "url('img/" + hobbieImg + "')";
}

function buildHobbieDiv(randomHobbieIndex) {
    return "<div class=\"hobbieImg\" id=\"1\" style=\"background-image: " + buildHobbieStyle(hobbieImgs[randomHobbieIndex++ % hobbieImgs.length]) + ";\"></div>" +
            "<div class=\"hobbieImg\" id=\"2\" style=\"background-image: " + buildHobbieStyle(hobbieImgs[randomHobbieIndex++ % hobbieImgs.length]) + ";\"></div>" +
            "<div class=\"hobbieImg\" id=\"3\" style=\"background-image: " + buildHobbieStyle(hobbieImgs[randomHobbieIndex % hobbieImgs.length]) + ";\"></div>";
}

function buildHobbieRowDiv() {
    var randomHobbieRowIndex = Math.floor(Math.random() * hobbieRowImgs.length);
    return "<div class=\"hobbieImg\" id=\"row\" style=\"background-image: " + buildHobbieStyle(hobbieRowImgs[randomHobbieRowIndex]) + ";\"></div>";
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

function flopImages(randomHobbieIndex, numberOfImages, noRowImg) {
    hobbies = document.getElementsByClassName("hobbieImg");

    if (noRowImg) {
        flopRandomImagesToRow(getNumberOfImagesPerRow(), numberOfImages);
    } else {
        flopRandomImage(getNumberOfImagesPerRow(), randomHobbieIndex, numberOfImages, noRowImg);
    }
}

function flopRandomImagesToRow(numberOfImagesPerRow, numberOfImages) {
    var indexOfImageToStartReplacing = Math.floor(Math.random() * numberOfImages);
    if (numberOfImagesPerRow == 2) {
        while (indexOfImageToStartReplacing & numberOfImages != 0) {
            indexOfImageToStartReplacing = Math.floor(Math.random() * numberOfImages);
        } // then we have the index to start replacing images at

        setTimeout(function() {
            hobbies[indexOfImageToStartReplacing].style.visibility = "hidden";
            hobbies[indexOfImageToStartReplacing].outerHTML = buildHobbieRowDiv();
            hobbies[(indexOfImageToStartReplacing + 1)].outerHTML = "";
            hobbies[indexOfImageToStartReplacing].classList.toggle("flopAnimation");
            hobbies[indexOfImageToStartReplacing].style.visibility = "visible";
            setTimeout(function () {
                hobbies[indexOfImageToStartReplacing].classList.toggle("flopAnimation");
            }, 500);
            numberOfImages--;
            flopImages(Math.floor(Math.random() * numberOfImages), numberOfImages, false);
        }, 1000);
    } else {
        while (!((indexOfImageToStartReplacing + 3) % numberOfImagesPerRow == 0 ||
                (indexOfImageToStartReplacing + 3) % numberOfImagesPerRow > indexOfImageToStartReplacing % numberOfImagesPerRow)) {
            indexOfImageToStartReplacing = Math.floor(Math.random() * numberOfImages);
        } // then we have the index to start replacing images at

        setTimeout(function() {
            hobbies[indexOfImageToStartReplacing].style.visibility = "hidden";
            hobbies[indexOfImageToStartReplacing].outerHTML = buildHobbieRowDiv();
            hobbies[(indexOfImageToStartReplacing + 1)].outerHTML = "";
            hobbies[(indexOfImageToStartReplacing + 1)].outerHTML = "";
            hobbies[indexOfImageToStartReplacing].classList.toggle("flopAnimation");
            hobbies[indexOfImageToStartReplacing].style.visibility = "visible";
            setTimeout(function () {
                hobbies[indexOfImageToStartReplacing].classList.toggle("flopAnimation");
            }, 500);
            numberOfImages -= 2;
            flopImages(Math.floor(Math.random() * numberOfImages), numberOfImages, false);
        }, 1000);
    }

    if (!setNewIndexInRowIndices(indexOfImageToStartReplacing)) {
        indicesOfRowImages.push(indexOfImageToStartReplacing);
    }
}

function flopRandomImage(numberOfImagesPerRow, randomHobbieIndex, numberOfImages, noRowImg) {
    var hobbieImgsRandomIndex = Math.floor(Math.random() * hobbieImgs.length);
    var rowImage = false;
    for (var i = 0; !rowImage && i < indicesOfRowImages.length; i++) {
        if (indicesOfRowImages[i] == randomHobbieIndex) {
            rowImage = true;
            indicesOfRowImages[i] = -1;
        }
    }

    if (!rowImage) {
        setTimeout(function() {
            hobbies[randomHobbieIndex].style.visibility = "hidden";
            hobbies[randomHobbieIndex].style.backgroundImage = buildHobbieStyle(hobbieImgs[hobbieImgsRandomIndex])
            hobbies[randomHobbieIndex].classList.toggle("flopAnimation");
            setTimeout(function () {
                hobbies[randomHobbieIndex].classList.toggle("flopAnimation");
            }, 500);
            hobbies[randomHobbieIndex].style.visibility = "visible";
            flopImages(Math.floor(Math.random() * numberOfImages), numberOfImages, false);
        }, 1000);
    } else {
        setTimeout(function() {
            hobbies[randomHobbieIndex].style.visibility = "hidden";
            hobbies[randomHobbieIndex].outerHTML = buildHobbieDiv(hobbieImgsRandomIndex);
            var replacedImgs = [document.getElementById("1"), document.getElementById("2"), document.getElementById("3")];
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
            numberOfImages += 2;
            flopImages(Math.floor(Math.random() * numberOfImages), numberOfImages, true);
        }, 1000);
    }
}

function setNewIndexInRowIndices(indexToPutIn) {
    for (var i = 0; i < indicesOfRowImages.length; i++) {
        if (indicesOfRowImages[i] == -1) {
            indicesOfRowImages[i] = indexToPutIn;
            return true;
        }
    }
    return false;
}
