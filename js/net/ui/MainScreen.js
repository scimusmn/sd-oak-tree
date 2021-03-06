define([ 'net/AppData', 'net/ui/ScreenManager', 'net/ui/VoronoiLayer', 'tween' ], function( AppData,  ScreenManager, VoronoiLayer ){

    function MainScreen( containerDiv ){

        this.containerDiv = containerDiv;

        this.init();

    }

    // init() | Set up screen layout and buttons
    MainScreen.prototype.init = function() {

        this.refreshButtonListeners();

        var thisRef = this;
        this.voronoiLayer = new VoronoiLayer(AppData.VORONOI_SITES, $("#veronoi_ui"), function(cellId){
            thisRef.featureSpecimen(cellId);
        });

    };

    // refresh() | Refresh screen displays as needed before showing
    MainScreen.prototype.refresh = function() {


    };

    // featureSpecimen() | Transition to feature selected specimen
    MainScreen.prototype.featureSpecimen = function( specId, specBtn ){

        console.log('featureSpecimen(): '+ specId);

        AppData.setFeatureSpecimen( specId );
        $('#specimen_display').attr('src', AppData);

        //Set text and image from xml
        var specConfig = $(AppData.configXML).find('specimens specimen[id="'+specId+'"]').first();

        var imgSrc = $(specConfig).attr("img");
        $( "#specimen_display img" ).attr('src', imgSrc);

        var commonEN = $(specConfig).find("text[id='common'] en").first().text();
        var commonES = $(specConfig).find("text[id='common'] es").first().text();

        var scientific = $(specConfig).find("text[id='scientific']").first().text();

        var descriptionEN = $(specConfig).find("text[id='description'] en").first().text();
        var descriptionES = $(specConfig).find("text[id='description'] es").first().text();

        $("#info_container #common_name.en").html( commonEN );
        $("#info_container #common_name.es").html( commonES );
        $("#info_container #scientific_name").html( scientific );
        $("#info_container #description.en").html( descriptionEN );
        $("#info_container #description.es").html( descriptionES );

        this.transitionInFeature();

    };

    // transitionInFeature() | Tween in display elements of featured specimen
    MainScreen.prototype.transitionInFeature = function( ){

        //Main Nav
        TweenLite.to( $( "#main_nav" ), 0.5, { css: { opacity:0, zIndex:0 }, ease:Power2.easeOut, onComplete:function(){
            $( "#main_nav" ).hide();
        } } );

        //Image
        $( "#specimen_display" ).show();
        TweenLite.set( $( "#specimen_display" ), { css: { opacity:0 } } );
        TweenLite.to( $( "#specimen_display" ), 0.5, { css: { opacity:1, zIndex:2 }, delay:0.2, ease:Power2.easeOut } );

        //Home bar
        $("#home_bar").show();
        TweenLite.set( $("#home_bar"), { css: { bottom: -70 } } );
        TweenLite.to( $("#home_bar"), 0.6, { css: { bottom:0 }, delay:0.2, ease:Power2.easeOut } );

        //Swap right bar text
        $("#intro_container").hide();
        $("#info_container").show();

    };

    // transitionOutFeature() | Tween out display elements of featured specimen
    MainScreen.prototype.transitionOutFeature = function( ){

        //Main Nav
        $( "#main_nav" ).show();
        TweenLite.set( $( "#main_nav" ), { css: { opacity:0 } } );
        TweenLite.to( $( "#main_nav" ), 0.5, { css: { opacity:1, zIndex:2 }, delay:0.25, ease:Power2.easeOut } );

        //Image
        TweenLite.to( $( "#specimen_display" ), 0.5, { css: { opacity:0, zindex:0 }, ease:Power2.easeOut, onComplete:function(){
            $( "#specimen_display" ).hide();
        } } );

        //Home bar
        TweenLite.to( $("#home_bar"), 0.6, { css: { bottom:-70 }, ease:Power2.easeOut } );

        //Swap right bar text
        $("#intro_container").show();
        $("#info_container").hide();

    };

    // refreshButtonListeners() | Listen to all buttons on this screen
    MainScreen.prototype.refreshButtonListeners = function(){

        var thisRef = this;

        //Removes existing listeners
        this.disableButtonListeners();

        //Listen for all button clicks (Including Oak Tree SVG buttons)
        $(this.containerDiv).find("[data-role='button'], svg use").on("click", function(event) {

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

        //Specimen Thumbs
        if (btnId.substring(0, 9) == "specimen_") {

            var specId = btnId.substring(9);
            this.featureSpecimen(specId, btnRef);
            return;

        }
        //Specimen button with lookup
        if (btnId.substring(0, 6) == "XMLID_") {

            var specId = AppData.specimenLookup( parseInt(btnId.substring(6,8)) );
            this.featureSpecimen(specId, btnRef);
            return;

        }


        //Other btns...
        switch (btnId) {
            case "home_bar":
                this.transitionOutFeature();
            break;
            default:

            break;
        }

    };

    return MainScreen;

});
