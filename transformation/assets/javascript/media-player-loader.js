jQuery(function($) {
    var $yt_links = $(".media-player-wrapper a[href*='//www.youtube.com/watch']");

    // Create players for our youtube links
    $.each($yt_links, function(i) {
        var $this = $(this);
        var $holder = $('<span />');

        $this.replaceWith($holder);

        if (!$holder.parent().hasClass('no-caption')) {
            var $figcaption = $('<figcaption/>');
            $figcaption.text($this.text());
            $holder.before($figcaption);
        }

        // Find the captions file if it exists
        var $mycaptions = $holder.siblings('.captions');
        // Work out if we have captions or not
        var captionsf = $($mycaptions).length > 0 ? $($mycaptions).attr('href') : null;
        // Ensure that we extract the last part of the youtube link (the video id)
        // and pass it to the player() method
        var link = $this.attr('href').split("=")[1];
        // make sure we fetch the right SSL level
        var youTubeURL = (document.location.protocol + '//www.youtube.com/apiplayer?enablejsapi=1&version=3&playerapiid=');
        // Initialise the player
        $holder.player({
            id:'yt'+i,
            media:link,
            captions:captionsf,
            url: youTubeURL,
            flashHeight: '350px'
        });

    });
});