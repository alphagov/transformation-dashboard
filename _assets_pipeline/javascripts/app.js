//= require ./vendor/jquery/jquery-1.11.0.js
//= require ./vendor/jquery/jquery-migrate-1.2.1.js
//= require ./vendor/jquery/jquery-ui-1.10.4.js
//= require ../govuk_toolkit/javascripts/vendor/jquery/jquery.player.min.js

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

jQuery(function($) {
    var $yt_links = $(".media-player-link");

    // Create players for our youtube links
    $.each($yt_links, function(i) {
        var $holder = $('<figure class="media-player" />');
        var $this = $(this);
        $this.parent().replaceWith($holder);
        // Find the captions file if it exists
        var $mycaptions = $(this).siblings('.captions');
        // Work out if we have captions or not
        var captionsf = $($mycaptions).length > 0 ? $($mycaptions).attr('href') : null;
        // Ensure that we extract the last part of the youtube link (the video id)
        // and pass it to the player() method
        var href = $(this).attr('href');
        var link = href.split("=")[1];
        // make sure we fetch the right SSL level
        var youTubeURL = (document.location.protocol + '//www.youtube.com/apiplayer?enablejsapi=1&version=3&playerapiid=');
        // Initialise the player
        $holder.player({
            id:'yt'+i,
            media:link,
            captions:captionsf,
            url: youTubeURL,
            flashHeight: '323px'
        });
        // Grab the text if required
        var $figcaption = $('<figcaption data-url="' + href + '">' + $this.text() + ':</figcaption>');
        if (!$this.hasClass('titled')) {
            $figcaption.addClass('hidden');
        }
        $holder.prepend($figcaption);
    });
});