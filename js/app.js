require.config({

    //By default load any module IDs from js/ directory
    baseUrl: 'js',

    //setup up shortcuts for commonly used libraries and components
    paths: {
        'jquery' : 'vendor/jquery/dist/jquery.min',
        'tween'  : 'vendor/gsap/src/minified/TweenMax.min',
        'videojs': 'vendor/video-js/dist/video-js/video'
    }

});


require(['jquery', 'net/AppData', 'net/Screensaver', 'net/ui/ScreenManager', 'net/ui/MainScreen'], function( $, AppData, Screensaver, ScreenManager, MainScreen ) {


    //Load XML
    $.ajax({
        type: "GET",
        url: "data/config.xml",
        dataType: "xml",
        success: function (xml) {

            AppData.updateSettings(xml);
            initialize();

        }
    });

    function initialize() {

        ScreenManager.init();
        ScreenManager.addScreen( new MainScreen( $('#screen_main') ) );
        ScreenManager.showScreen( ScreenManager.SCREEN_MAIN );

        var ss = new Screensaver(180, 'img/screensaver.webm', function() {
            //On sleep
            ScreenManager.screens[0].transitionOutFeature();
        });

    }

});
