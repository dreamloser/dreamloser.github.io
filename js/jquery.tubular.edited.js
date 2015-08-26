;(function ($, window) {

    // test for feature support and return if failure 
    // kill for mobile devices
    var deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    
    // defaults
    var defaults = {
        ratio: 16/9, // usually either 4/3 or 16/9 -- tweak as needed
        videoId: 'B6jCMaiTqG0', 
        mute: true,
        repeat: true,
        width: $(window).width(),
        wrapperZIndex: -15,
        playButtonClass: 'tubular-play',
        pauseButtonClass: 'tubular-pause',
        muteButtonClass: 'tubular-mute',
        volumeUpClass: 'tubular-volume-up',
        volumeDownClass: 'tubular-volume-down',
        increaseVolumeBy: 0,
        start: 102,
        end: 114,
        minimumSupportedWidth: 600,
        modestbranding: 0
    };

    // methods

    var tubular = function(node, options) { // should be called on the wrapper div
        var options = $.extend({}, defaults, options),
            $body = $('body') // cache body node
            $node = $(node); // cache wrapper node

        // build container
        var tubularContainer = '<div id="pg-container" style="overflow: hidden; position: fixed; z-index: -12; width: 100%; height: 90vh"><div id="pg-player" style="position: absolute"></div></div><div id="tubular-shield" style="width: 100%; height: 90vh; z-index: -11; position: absolute; left: 0; top: 0;"></div>';

        // set up css prereq's, inject tubular container and set up wrapper defaults
        $('html,body').css({'width': '100%', 'height': '100%'});
        $body.prepend(tubularContainer);
        $node.css({position: 'relative', 'z-index': options.wrapperZIndex});

        // set up iframe player, use global scope so YT api can talk
        window.player;
        window.onYouTubeIframeAPIReady = function() {
            player = new YT.Player('pg-player', {
                width: options.width,
                height: Math.ceil(options.width / options.ratio),
                videoId: options.videoId,
                playerVars: {
                    controls: 0,
                    showinfo: 0,
                    modestbranding: 1,
                    wmode: 'transparent'
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        window.onPlayerReady = function(e) {
            resize();
            if (options.mute) e.target.mute();
            e.target.seekTo(options.start);
            e.target.playVideo(); 
}



var trigerOnce = true;

        window.onPlayerStateChange = function(state) {
            if (state.data === 0 && options.repeat) { // video ended and repeat option is set true
                player.seekTo(options.start); // restart
            }
            if (state.data === 1) {
//game shows -- inserted by maxim.xu
if (trigerOnce == true) {
var circle = new ProgressBar.Circle('#clock', {
    color: '#E2284E',
    strokeWidth: 4,
    trailWidth: 1,
    duration: 6000,
    text: {
        value: '0'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * 10).toFixed(0));
    }
});

circle.animate(1, function() {
    circle.animate(0);
})

trigerOnce = false;

}

setTimeout(function(){
$('.play').css('visibility','visible').addClass('slideInUp animatedSlow');
}, 1000);

function sd() {
    $('.play').removeClass('slideInUp animatedSlow').addClass('slideOutDown animated');
}

function vanish() {
    $('.mask').css('background-color','rgb(226,40,78)')
    $('.tex, #skip, #pg-container, #pg-player').fadeOut(200);
    $('.logoContainer').fadeIn(1000);
}

function wrongAns() {
    $('.tex p:nth-child(1)').text('Ouch!');
    $('.tex p:nth-child(2)').html('<p>looks like you<br> need some more practice.</p>');
    $('.tex').css('visibility','visible');
}

$('a.btn').click(function(){
   sd();
if (this.id == 'correct') {
    $('.tex').css('visibility','visible');
} else {
    wrongAns();
}
setTimeout(vanish, 4000)
});

setTimeout(function(){
        sd();
        if ($('.tex').css('visibility') !== 'visible') {wrongAns()}
        setTimeout(vanish, 4000)
    }, 12000)
            }
}



        // resize handler updates width, height and offset of player after resize/init
        var resize = function() {
            var width = $(window).width(),
                pWidth, // player width, to be defined
                height = $(window).height(),
                pHeight, // player height, tbd
                $tubularPlayer = $('#pg-player');

            // when screen aspect ratio differs from video, video must center and underlay one dimension

            if (width / options.ratio < height) { // if new video height < window height (gap underneath)
                pWidth = Math.ceil(height * options.ratio); // get new player width
                $tubularPlayer.width(pWidth).height(height).css({left: (width - pWidth) / 2, top: 0}); // player width is greater, offset left; reset top
            } else { // new video width < window width (gap to right)
                pHeight = Math.ceil(width / options.ratio); // get new player height
                $tubularPlayer.width(width).height(pHeight).css({left: 0, top: (height - pHeight) / 2}); // player height is greater, offset top; reset left
            }

        }

        // events
        $(window).on('resize.tubular', function() {
            resize();
        })

        $('body').on('click','.' + options.playButtonClass, function(e) { // play button
            e.preventDefault();
            player.playVideo();
        }).on('click', '.' + options.pauseButtonClass, function(e) { // pause button
            e.preventDefault();
            player.pauseVideo();
        }).on('click', '.' + options.muteButtonClass, function(e) { // mute button
            e.preventDefault();
            (player.isMuted()) ? player.unMute() : player.mute();
        }).on('click', '.' + options.volumeDownClass, function(e) { // volume down button
            e.preventDefault();
            var currentVolume = player.getVolume();
            if (currentVolume < options.increaseVolumeBy) currentVolume = options.increaseVolumeBy;
            player.setVolume(currentVolume - options.increaseVolumeBy);
        }).on('click', '.' + options.volumeUpClass, function(e) { // volume up button
            e.preventDefault();
            if (player.isMuted()) player.unMute(); // if mute is on, unmute
            var currentVolume = player.getVolume();
            if (currentVolume > 100 - options.increaseVolumeBy) currentVolume = 100 - options.increaseVolumeBy;
            player.setVolume(currentVolume + options.increaseVolumeBy);
        })
    }
 
        if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
                            var tag = document.createElement('script');
                            tag.src = "//www.youtube.com/iframe_api";
                            var firstScriptTag = document.getElementsByTagName('script')[0];
                            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                    } 

    $.fn.tubular = function (options) {
        return this.each(function () {
            if (!$.data(this, 'tubular_instantiated')) { 
                $.data(this, 'tubular_instantiated', 
                tubular(this, options));
            }
        });
    }
 

})(jQuery, window);