require.config({

    //By default load any module IDs from js/ directory
    baseUrl: 'js',

    //setup up shortcuts for commonly used libraries and components
    paths: {
        'jquery' : 'vendor/jquery/dist/jquery.min',
        'tween'  : 'vendor/gsap/src/minified/TweenMax.min'
    }

});


require(['jquery', 'net/AppData', 'net/Screensaver', 'net/ui/ScreenManager', 'net/ui/MainScreen'], function( $, AppData, Screensaver, ScreenManager, MainScreen ) {

    /*--------------*/
    /* Initial Load */
    /*--------------*/

    //Load XML
    $.ajax({
        type: "GET",
        url: "data/config.xml",
        dataType: "xml",
        success: function (xml) {

            AppData.updateSettings(xml);
            initialize();

        },
        error: function (jqXHR, textStatus, errorThrown) {
            // Show error message if desired

        }
    });

    function initialize() {

        ScreenManager.init();
        var main = new MainScreen( $('#screen_main') );
        ScreenManager.addScreen( main ); // Add Main Screen
        ScreenManager.showScreen( ScreenManager.SCREEN_MAIN );

        /*
        var ss = new Screensaver(5, 'img/ss.mp4', function() {
            //On sleep
            ScreenManager.showScreen(ScreenManager.SCREEN_MAIN);
        });
        */

    }

});
