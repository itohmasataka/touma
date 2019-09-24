$(function() {
    $('section hr, #skills hr').css("width", "0");
    $(window).scroll(function() {
        $("section, #skills").each(function() {
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
