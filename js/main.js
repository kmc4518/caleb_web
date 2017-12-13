$(document).ready(function () {
    var scroll = $(window).scrollTop();
    $("html").scrollTop(scroll);
    $('.left-nav ul li:first').addClass('active');
    $('.left-nav ul li a').click(function (event) {
        event.preventDefault();
        var content = $(this).attr('href');
        $(this).parent().addClass('active');
        //$(content).siblings('.tab-content').hide();
    });
});

$(document).on('click', '.cb-video', function (event) {
    var change = $(this).find("img").attr("src").split("/");

    var thumbnail = change[2].split(".");

    var videoId = thumbnail[0];

    console.log(videoId);

    switch(videoId) {
        case '247080482':
            var description = ("Created by Caleb Bernard. Thanks to Bonnie Tyler.");
            break;
        case '247080187':
            var description = ("A recording of Hunter S. Thompson discussing the current state of life and why he uses drugs. By Caleb Bernard Massart 2016. Sound From: Soundbites from a Counter Culture - Hunter S. Thompson");
            break;
        case '217549968':
            var description = ("This film tells the little known true story of the life of Joshua Abraham Norton a man who in mid-1800s San Francisco declares himself Emperor of America. Through his charismatic ways he forces the best out of his community, while bringing them together.");
            break;
        default:
            var description = ("I like turtles.");
            break;
    }

    $(".cb-main-video > iframe").attr("src", "https://player.vimeo.com/video/" + videoId + "?title=0&portrait=0&badge=0");
    $(".cb-video-info > p").html( description);





});


// https://vimeo.com/237343122
// https://vimeo.com/243145806
// https://vimeo.com/94502406