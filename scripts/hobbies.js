var hobbies = document.getElementsByClassName("hobbieImg");
var hobbieImgs;
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

function sendHobbieImgRow(hobbieImg) {
    document.getElementById("row").style.backgroundImage = buildHobbieStyle(hobbieImg);
}

function buildHobbieStyle(hobbieImg) {
    return "url('img/" + hobbieImg + "')";
}

function buildHobbieDiv(randomHobbieIndex) {
    return "<div class=\"hobbieImg\" id=\"1\" style=\"background-image: " + buildHobbieStyle(hobbieImgs[randomHobbieIndex++ % hobbieImgs.length]) + ";\"></div>" +
            "<div class=\"hobbieImg\" id=\"2\" style=\"background-image: " + buildHobbieStyle(hobbieImgs[randomHobbieIndex++ % hobbieImgs.length]) + ";\"></div>" +
            "<div class=\"hobbieImg\" id=\"3\" style=\"background-image: " + buildHobbieStyle(hobbieImgs[randomHobbieIndex % hobbieImgs.length]) + ";\"></div>";
}

function getWidthOfHobbieImg() {
    var windowWidth = window.innerWidth;
    var hobbieWidth = window.getComputedStyle(hobbies[0]).getPropertyValue('width');
    return parseInt(hobbieWidth, 10)/windowWidth;
}

function flopImages(randomHobbieIndex, numberOfImages, noRowImg) {
    hobbies = document.getElementsByClassName("hobbieImg");

    if (!noRowImg) {
        flopRandomImage(getWidthOfHobbieImg());
    } else {
        // flopRandomImagesToRow(getWidthOfHobbieImg());
    }
}

function flopRandomImagesToRow(hobbieImgWidth) {

}

function flopRandomImage(hobbieImgWidth) {
    var hobbieImgsRandomIndex = Math.floor(Math.random() * hobbieImgs.length);
    var rowImage = false;
    for (var i = 0; !rowImage && i < indicesOfRowImages.length; i++) {
        if (indicesOfRowImages[i] == randomHobbieIndex) {
            rowImage = true;
            indicesOfRowImages[i].splice(i, 1); // removes the ith value from the array
        }
    }

    if (!rowImage) {
        setTimeout(function() {
            hobbies[randomHobbieIndex].style.visibility = "hidden";
            hobbies[randomHobbieIndex].style.backgroundImage = buildHobbieStyle(hobbieImgs[hobbieImgsRandomIndex])
            hobbies[randomHobbieIndex].classList.toggle("flopAnimation");
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
            }
            numberOfImages += 2;
            flopImages(Math.floor(Math.random() * numberOfImages), numberOfImages, true);
        }, 1000);
    }
}
