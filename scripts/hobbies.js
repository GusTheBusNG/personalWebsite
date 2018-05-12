var hobbies = document.getElementsByClassName("hobbieImg");

function sendHobbieImg(hobbieImgs) {
    for (var i = 0; i < hobbies.length; i++) {
        hobbies[i].style.backgroundImage = buildHobbieStyle(hobbieImgs[i % hobbieImgs.length]);
    }
}

function sendHobbieImgRow(hobbieImg) {
    document.getElementsByClassName("hobbieImgRow")[0].style.backgroundImage = buildHobbieStyle(hobbieImg);
}

function buildHobbieStyle(hobbieImg) {
    return "url('img/" + hobbieImg + "')";
}
