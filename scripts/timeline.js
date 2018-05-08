$(window).on("load",function() {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".pageTitle").each(function() {
            var titleBottom = $(this).offset().top + $(this).outerHeight();

            if ($(this).css("opacity") == 0 && titleBottom < windowBottom) {
                $(this).fadeTo(500,1);
            }
        });

        $(".experience").each(function(i) {
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
    }).scroll();
});
