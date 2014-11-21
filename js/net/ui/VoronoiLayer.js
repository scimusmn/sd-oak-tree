/* ========================================================================================
   VoronoiLayer utilizes the Voronoi diagram (http://en.wikipedia.org/wiki/Voronoi_diagram)
   to create an SVG layer of polygonal hit areas, maximizing hit area space. Pass an array
   of center-points. Uses library: https://github.com/gorhill/Javascript-Voronoi
   ===================================================================================== */

define([ 'libs/rhill-voronoi-core.min' ], function( Vor ){

    function VoronoiLayer( pointList, svgElement ){

        this.pointList = pointList; // Array of center-points
        this.svgElement = svgElement;

        this.sites = [];
        for (var key in this.pointList) {
            var obj = this.pointList[key];
            // console.log(key + " = " + obj.x+', '+ obj.y);
            this.sites.push({"id":key, "x":obj.x, "y":obj.y});
        }

        //temp
        //expected format
        // this.sites = [{x:200, y:444}, {x:50, y:250}, {x:400, y:100}, {x:262, y:411}, {x:48, y:333}];

        this.init();

    }

    VoronoiLayer.prototype.init = function() {

        this.voronoi = new Voronoi();

        //Set bounds box
        this.bbox = {xl:0, xr:$(this.svgElement).width(), yt:0, yb:$(this.svgElement).height()};

        //Create cells from Voronoi calculations
        this.diagram = this.voronoi.compute(this.sites, this.bbox);

        //Draw svg shapes
        this.createSVG();

        //Listen for clicks
        $(this.svgElement).find('polygon').on('click', function(evt){

            console.log( $(this).attr('id') );

        });

    };

    VoronoiLayer.prototype.createSVG = function() {

        if (!this.diagram) return;

        //Draw Cells
        var cells = this.diagram.cells;
        var index = cells.length;
        var cell;
        var halfEdges;
        var startPoint;
        var endPoint;
        var pointsStr;

        while (index--) {
            cell = cells[index];
            halfEdges = cell.halfedges;

            //First point
            startPoint = halfEdges[0].getStartpoint();
            pointsStr = startPoint.x+','+startPoint.y+' ';

            for (var i = 0; i < halfEdges.length; i++) {

                endPoint = halfEdges[i].getEndpoint();

                pointsStr += ' '+endPoint.x+','+endPoint.y;

            };

            var polyId = 'hit_'+cell.site.id;
            var newPoly = '<polygon id="'+polyId+'" points="' + pointsStr + '"/>';
            $(this.svgElement).append($(newPoly));

            //draw site
            var v = cell.site;
            var newCirc = '<circle cx="'+(v.x-2)+'" cy="'+(v.y-2)+'" r="2" />';
            $(this.svgElement).append($(newCirc));

        }

        //must refresh svg html
        $(this.svgElement).html($(this.svgElement).html());

    };


    return VoronoiLayer;

});
