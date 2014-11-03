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
                return 'squirrel';
            case 27:
                return 'deer';
            case 28:
                return 'insect';
            case 29:
                return 'squirrel';
            case 30:
                return 'deer';
            case 31:
                return 'insect';
            case 32:
                return 'squirrel';
            case 33:
                return 'deer';
            case 34:
                return 'insect';
            case 35:
                return 'squirrel';
            case 36:
                return 'deer';
            case 37:
                return 'insect';
            case 38:
                return 'squirrel';
            case 39:
                return 'deer';
            case 40:
                return 'insect';
            case 41:
                return 'squirrel';
            case 42:
                return 'deer';
            case 43:
                return 'insect';
            case 44:
                return 'squirrel';
            case 45:
                return 'deer';
            case 46:
                return 'insect';
            case 47:
                return 'squirrel';
            case 48:
                return 'deer';
            case 49:
                return 'insect';
            case 50:
                return 'squirrel';
            case 51:
                return 'deer';

            default:
                return 'deer';
        }

    };

    return AppData;

});
