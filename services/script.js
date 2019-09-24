$(function() {
    $('.service hr').css("width", "0");
    $(window).scroll(function() {
        $(".service").each(function() {
            var Position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > Position - windowHeight + windowHeight/10) {
                $("hr").css('width', '50%');
            } else {
                $("hr").css('width', '0');
            }
        });
    });
});