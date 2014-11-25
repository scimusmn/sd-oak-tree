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


    /* Array created using custom tool at ../../work/oak-tree-voronoi-setup.html */
    AppData.VORONOI_SITES = [
                                {
                                    "id":"mule_deer",
                                    "x":126,
                                    "y":608
                                },
                                {
                                    "id":"mule_deer",
                                    "x":190,
                                    "y":554
                                },
                                {
                                    "id":"oak_titmouse",
                                    "x":145,
                                    "y":454
                                },
                                {
                                    "id":"ruby_crowned_kinglet",
                                    "x":129,
                                    "y":339
                                },
                                {
                                    "id":"western_screech_owl",
                                    "x":262,
                                    "y":274
                                },
                                {
                                    "id":"western_bluebird",
                                    "x":276,
                                    "y":379
                                },
                                {
                                    "id":"acorn_weevil",
                                    "x":239,
                                    "y":481
                                },
                                {
                                    "id":"southern_alligator_lizard",
                                    "x":246,
                                    "y":611
                                },
                                {
                                    "id":"western_skink",
                                    "x":249,
                                    "y":677
                                },
                                {
                                    "id":"ornate_shrew",
                                    "x":330,
                                    "y":656
                                },
                                {
                                    "id":"spider",
                                    "x":327,
                                    "y":600
                                },
                                {
                                    "id":"california_prionus_beetle",
                                    "x":336,
                                    "y":551
                                },
                                {
                                    "id":"common_greensheild_lichen",
                                    "x":303,
                                    "y":511
                                },
                                {
                                    "id":"oak_mistletoe",
                                    "x":444,
                                    "y":288
                                },
                                {
                                    "id":"nuttals_woodpecker",
                                    "x":370,
                                    "y":461
                                },
                                {
                                    "id":"oak_chanterelle",
                                    "x":409,
                                    "y":597
                                },
                                {
                                    "id":"western_gray_squirrel",
                                    "x":413,
                                    "y":653
                                },
                                {
                                    "id":"western_scrub_jay",
                                    "x":498,
                                    "y":619
                                },
                                {
                                    "id":"pacific_tent_caterpillar",
                                    "x":472,
                                    "y":464
                                },
                                {
                                    "id":"band_tailed_pigeon",
                                    "x":518,
                                    "y":333
                                },
                                {
                                    "id":"western_gray_squirrel",
                                    "x":581,
                                    "y":453
                                },
                                {
                                    "id":"california_gall_wasp",
                                    "x":551,
                                    "y":519
                                },
                                {
                                    "id":"blewit",
                                    "x":579,
                                    "y":665
                                },
                                {
                                    "id":"large_blotched_ensatina",
                                    "x":531,
                                    "y":689
                                },
                                {
                                    "id":"matate",
                                    "x":654,
                                    "y":658
                                },
                                {
                                    "id":"acorn_granary_basket",
                                    "x":680,
                                    "y":571
                                },
                                {
                                    "id":"oak_treehopper",
                                    "x":644,
                                    "y":508
                                },
                                {
                                    "id":"acorn_woodpecker",
                                    "x":665,
                                    "y":392
                                }
                            ];


    return AppData;

});
