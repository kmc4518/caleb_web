$(document).ready(function () {
    $('.left-nav ul li:first').addClass('active');
    //$('.tab-content:not(:first)').hide();
    $('.left-nav ul li a').click(function (event) {
        event.preventDefault();
        var content = $(this).attr('href');
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        $(content).show();
        //$(content).siblings('.tab-content').hide();
    });
});

$(document).on('click', '.cb-video', function (event) {
    var change = $(this).find("img").attr("src").split("/");

    var thumbnail = change[2].split(".");

    var videoId = thumbnail[0];

    $(".cb-main-video > iframe").attr("src", "https://player.vimeo.com/video/" + videoId + "?title=0&portrait=0&badge=0")

});


// https://vimeo.com/237343122
// https://vimeo.com/243145806
// https://vimeo.com/94502406