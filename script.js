$(function() {
    $('#about-inner p, #services-inner p, #works-inner p, #contact-inner p').css("opacity", "0");
    $(window).scroll(function() {
        $("#about-inner, #services-inner, #works-inner, #contact-inner").each(function() {
            var Position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > Position - windowHeight + windowHeight/4) {
                $("p", this).css("opacity", "1");
            } else {
                $("p", this).css("opacity", "0");
            }
        });
    });
});