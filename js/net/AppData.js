define([], function(){

    function AppData(){

        this.configXML = {};

    }

    AppData.updateSettings = function(configXML){

        this.configXML = configXML;

        this.developerMode = ($(this.configXML).find('setting[id=developerMode]').attr('value') == "true");
        this.infoHideTimeout = parseFloat( $(this.configXML).find('setting[id=infoHideTimeout]').attr('value') );

        //this.EXAMPLE_SETTING = $(this.configXML).find('setting[id=EXAMPLE_SETTING_ID]').attr('value');

    };

    AppData.setCurrentScreen = function(screenId){

        this.currentScreenId = screenId;

    };

    AppData.setFeatureSpecimen = function(specimenId){

        this.featuredSpecimen = specimenId;

    };

    //Convert svg ids to string ids.
    AppData.specimenLookup = function( key ){

        switch ( key ) {
            case 26:
                return 'gray_squirrel';
            case 27:
                return 'mule_deer';
            case 28:
                return 'acorn_weevil';
            case 29:
                return 'gray_squirrel';
            case 30:
                return 'mule_deer';
            case 31:
                return 'acorn_weevil';
            case 32:
                return 'gray_squirrel';
            case 33:
                return 'mule_deer';
            case 34:
                return 'acorn_weevil';
            case 35:
                return 'gray_squirrel';
            case 36:
                return 'mule_deer';
            case 37:
                return 'acorn_weevil';
            case 38:
                return 'gray_squirrel';
            case 39:
                return 'mule_deer';
            case 40:
                return 'acorn_weevil';
            case 41:
                return 'gray_squirrel';
            case 42:
                return 'mule_deer';
            case 43:
                return 'acorn_weevil';
            case 44:
                return 'gray_squirrel';
            case 45:
                return 'mule_deer';
            case 46:
                return 'acorn_weevil';
            case 47:
                return 'gray_squirrel';
            case 48:
                return 'mule_deer';
            case 49:
                return 'acorn_weevil';
            case 50:
                return 'gray_squirrel';
            case 51:
                return 'mule_deer';

            default:
                return 'mule_deer';
        }

    };

    return AppData;

});
