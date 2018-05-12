$(window).on("load",function() {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".pageTitle").each(function() {
            var titleBottom = $(this).offset().top + $(this).outerHeight();

            if ($(this).css("opacity") == 0 && titleBottom < windowBottom) {
                $(this).fadeTo(500,1);
            }
        });

        $(".experience").each(function() {
            var experienceContainer = $(this).offset().top + ($(this).outerHeight()/4);

            if (experienceContainer < windowBottom) {
                if ($(this).css("opacity") == 0) {
                    $(this).fadeTo(500, 1);
                }
            }
        });

        $(".experienceDurationBar").each(function(i) {
            var experienceContainer = $(this).offset().top + ($(".experienceDurationContainer").outerHeight()*.3);

            if (experienceContainer < windowBottom) {
                if ($(this).css("height") == "0px") {
                    $(this).toggleClass("drawInAnimation");
                    i *= 2;
                    var date = document.getElementsByClassName("experienceDate");
                    fadeIn(date[i]);
                    setTimeout(function () {
                        fadeIn(date[++i]);
                    }, 1000);
                }
            }
        });

        $(".verticalTimelineBar").each(function() {
            var experienceContainer = $(this).offset().top + ($(".experienceDurationContainer").outerHeight()*.2);

            if (experienceContainer < windowBottom) {
                if ($(this).css("height") == "0px") {
                    $(this).toggleClass("drawInAnimationMainBar");
                    setTimeout(function () {
                        $('.dot').each(function(i) {
                            $(".dot:nth-child(" + (++i) + ")").fadeTo(500, 1);
                        });
                    }, 2000);
                }
            }
        });

        $(".skillBar").each(function() {
            var skillBar = $(this).offset().top + ($(this).outerHeight()*.2);

            if (skillBar < windowBottom) {
                if ($(this).css("height") == "0px") {
                    $(this).toggleClass("drawInAnimationMainBar");
                    $(".skillType").fadeTo(300, 1);
                    $(".skills").fadeTo(300, 1);
                    $(".skills::after").toggleClass("fadeOutLinearGradient");
                    $(".ratingsContainer").fadeTo(300, 1);
                    $(".ratingsContainer::after").toggleClass("fadeOutLinearGradient");
                }
            }
        });

        $(".horizontalBar").each(function() {
            var horizontalBar = $(this).offset().top + ($(this).outerHeight()*2);

            if (horizontalBar < windowBottom) {
                if ($(this).css("width") == "0px") {
                    $(this).toggleClass("drawToRightAnimaiton");
                }
            }
        });

        $(".majorContainer").each(function() {
            var majorContainer = $(this).offset().top + ($(this).outerHeight()*.4);

            if (majorContainer < windowBottom) {
                if ($(this).css("opacity") == 0) {
                    $(this).toggleClass("fadeInAndUp");
                }
            }
        });

        $(".GPAContainer").each(function() {
            var GPAContainer = $(this).offset().top + ($(this).outerHeight()*.4);

            if (GPAContainer < windowBottom) {
                if ($(this).css("opacity") == 0) {
                    $(this).toggleClass("fadeInAndRight");
                }
            }
        });

        $(".notableCoursesContainer").each(function() {
            var notableCoursesContainer = $(this).offset().top + ($(this).outerHeight()*.2);

            if (notableCoursesContainer < windowBottom) {
                if ($(this).css("opacity") == 0) {
                    $(this).toggleClass("fadeInAndUp");
                }
            }
        });
    }).scroll();
});
