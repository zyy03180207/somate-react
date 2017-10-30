    var metaslider_2698 = function($) {
    $('#metaslider_2698').nivoSlider({
        boxCols: 7,
        boxRows: 5,
        pauseTime: 3000,
        effect: "random",
        controlNav: false,
        directionNav: true,
        pauseOnHover: true,
        animSpeed: 600,
        prevText: "&lt;",
        nextText: "&gt;",
        slices: 15,
        manualAdvance: false
    });
};
    timer_metaslider_2698 = function() {
    var slider = !window.jQuery ? window.setTimeout(timer_metaslider_2698, 100) : !jQuery.isReady ? window.setTimeout(timer_metaslider_2698, 1) : metaslider_2698(window.jQuery);
};
