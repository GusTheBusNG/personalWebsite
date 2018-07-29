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
