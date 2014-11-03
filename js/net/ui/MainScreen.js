define([ 'net/AppData', 'net/ui/ScreenManager', 'tween' ], function( AppData,  ScreenManager ){

    function MainScreen( containerDiv ){

        this.containerDiv = containerDiv;

        this.init();

    }

    // init() | Set up screen layout and buttons
    MainScreen.prototype.init = function() {

        this.refreshButtonListeners();

    };

    // refresh() | Refresh screen displays as needed before showing
    MainScreen.prototype.refresh = function() {


    };

    // featureSpecimen() | Transition to feature selected specimen
    MainScreen.prototype.featureSpecimen = function( specId, specBtn ){

        AppData.setFeatureSpecimen( specId );

        console.log('show spec: '+ specId);

    };

    // transitionInFeature() | Tween in display elements of featured specimen
    MainScreen.prototype.transitionInFeature = function( ){

        TweenLite.delayedCall(0.75, function(){

            TweenLite.to( $( "#main_nav" ), 1, { css: { left:0 }, ease:Power2.easeOut } );
            TweenLite.to( $( "#screen_main .content-right" ), 1, { css: { left:0 }, delay:0.2, ease:Power2.easeOut } );

        });

    };

    // transitionOutFeature() | Tween out display elements of featured specimen
    MainScreen.prototype.transitionOutFeature = function( ){

        TweenLite.to( $( "#main_nav" ), 1, { css: { left:-1080 }, ease:Power2.easeIn } );
        TweenLite.to( $( "#screen_main .content-right" ), 1, { css: { left:-1080 }, delay:0.2, ease:Power2.easeIn } );

    };

    // refreshButtonListeners() | Listen to all buttons on this screen
    MainScreen.prototype.refreshButtonListeners = function(){

        var thisRef = this;

        //Removes existing listeners
        this.disableButtonListeners();

        //Listen for all button clicks
        $(this.containerDiv).find("[data-role='button']").on("click", function(event) {

            thisRef.buttonClicked( $(this).attr('id'), $(this) );

        });

    };

    // disableButtonListeners() | Remove all current button listeners
    MainScreen.prototype.disableButtonListeners = function() {

        $(this.containerDiv).find("[data-role='button']").each( function () {

            $(this).off();

        });

    };

    // buttonClicked() | All click events for this screen shall pass through here
    MainScreen.prototype.buttonClicked = function(btnId, btnRef) {

        console.log("buttonClicked(btnId): " + btnId);

        //Plant Thumbs
        if (btnId.substring(0, 9) == "specimen_") {

            var specId = btnId.substring(9);
            this.featureSpecimen(specId, btnRef);
            return;

        }

        //Other btns...
        switch (btnId) {
            case "btn_id_1":

            break;
            default:

            break;
        }

    };

    return MainScreen;

});
