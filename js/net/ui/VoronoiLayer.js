/* ========================================================================================
   VoronoiLayer utilizes the Voronoi diagram (http://en.wikipedia.org/wiki/Voronoi_diagram)
   to create an SVG layer of polygonal hit areas, maximizing hit area space.
   Currently using Voronoi process from library: https://github.com/gorhill/Javascript-Voronoi
   ===================================================================================== */

define([ 'libs/rhill-voronoi-core.min' ], function( Vor ){

    function VoronoiLayer( sites, svgElement, cellClickCallback ){

        // Array of center-points with ids, like so:[ {"id":"Site_A","x":160,"y":564}, {"id":"Site_B","x":442,"y":336}, {...}, {...} ];
        this.sites = sites;

        // Empty <svg> element to populate
        this.svgElement = svgElement;

        // Called when a cell is clicked.
        this.cellClickCallback = cellClickCallback || function(){};

        this.createVoronoiDiagram();

        this.createSVG();

        var thisRef = this;
        $(this.svgElement).find('polygon').on('click', function(evt){

            var cellId = $(this).attr('id');
            thisRef.cellClickCallback(cellId);

        });

    }

    VoronoiLayer.prototype.createVoronoiDiagram = function() {

        this.voronoi = new Voronoi();

        //Bounding box
        var right = $(this.svgElement).width();
        var bottom = $(this.svgElement).height();
        this.bbox = {xl:0, xr:right, yt:0, yb:bottom};

        //Generate Voronoi diagram
        this.diagram = this.voronoi.compute(this.sites, this.bbox);

    };

    VoronoiLayer.prototype.createSVG = function() {

        //Init vars outside of iteration
        var cells = this.diagram.cells;
        var index = cells.length;
        var cell;
        var halfEdges;
        var drawPoint;
        var pointsStr;
        var newShape;

        //Draw Cells
        while (index--) {
            cell = cells[index];
            halfEdges = cell.halfedges;

            //First point
            drawPoint = halfEdges[0].getStartpoint();
            pointsStr = drawPoint.x+','+drawPoint.y+' ';

            for (var i = 0; i < halfEdges.length; i++) {

                drawPoint = halfEdges[i].getEndpoint();
                pointsStr += ' '+drawPoint.x+','+drawPoint.y;

            };

            //Add Polygon representing cell
            newShape = '<polygon id="'+cell.site.id+'" points="' + pointsStr + '" pointer-events="visible" fill="none"/>';
            $(this.svgElement).append($(newShape));

            //Add Circle representing site point
            newShape = '<circle cx="'+(cell.site.x-2)+'" cy="'+(cell.site.y-2)+'" r="2" pointer-events="none" fill="none"/>';
            $(this.svgElement).append($(newShape));

        }

        //Refresh svg html
        $(this.svgElement).html($(this.svgElement).html());

    };

    return VoronoiLayer;

});
