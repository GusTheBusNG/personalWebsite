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
          $("#experienceDuration" + i).height(experienceHeights[i]);
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
      var skillBar = $(this).offset().top + ($(this).outerHeight() * .2);

      if (skillBar < windowBottom) {
        if ($(this).css("height") == "0px") {
          $(this).toggleClass("drawInAnimationMainBar");
          $(".skillType").fadeTo(500, 1);
          $(".skills").fadeTo(500, 1);
          $(".ratingsContainer").fadeTo(500, 1);
        }
      }
    });

    $(".award").each(function (i) {
      var awardContainer = $(this).offset().top + ($(this).outerHeight() * .2);

      if (awardContainer < windowBottom) {
        if ($(this).css("opacity") == 0) {
          $(this).fadeTo(500 + (500 * i), 1);
        }
      }
    });

    $(".horizontalBar").each(function () {
      var horizontalBar = $(this).offset().top + ($(this).outerHeight() * 2);

      if (horizontalBar < windowBottom) {
        if ($(this).css("width") == "0px") {
          $(this).toggleClass("drawToRightAnimaiton");
        }
      }
    });

    $(".majorContainer").each(function () {
      var majorContainer = $(this).offset().top + ($(this).outerHeight() * .4);

      if (majorContainer < windowBottom) {
        if ($(this).css("opacity") == 0) {
          $(this).toggleClass("fadeInAndUp");
        }
      }
    });

    $(".GPAContainer").each(function () {
      var GPAContainer = $(this).offset().top + ($(this).outerHeight() * .4);

      if (GPAContainer < windowBottom) {
        if ($(this).css("opacity") == 0) {
          $(this).toggleClass("fadeInAndRight");
        }
      }
    });

    $(".notableCoursesContainer").each(function () {
      var notableCoursesContainer = $(this).offset().top + ($(this).outerHeight() * .2);

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
