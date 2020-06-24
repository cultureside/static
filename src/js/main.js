$(function () {

    var ua = navigator.userAgent;
    console.log(ua);

    if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0 && !(ua.indexOf('Mobile') > 0)) {
        var viewport = $('head meta[name="viewport"]');
        viewport.attr('content', 'width=1100');
    }

    $('a.smooth').click(function () {
        var href = $(this).attr("href");
        scroll(href);
    });

    var scroll = function (href) {
        var speed = 400;
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        history.replaceState(null, null, href);

        return false;
    }

});
