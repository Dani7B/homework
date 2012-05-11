/* Exercise 1 */
var part1 = POLYLINE([[0,0],[9,0],[9,3],[8,3],[8,1],[5,1],[5,3],[4,3],[4,1],[1,1],[1,3],[0,3],[0,0]]);
var part2 = POLYLINE([[0,7],[9,7],[9,4],[8,4],[8,6],[5,6],[5,4],[4,4],[4,6],[1,6],[1,4],[0,4],[0,7]]);
var base = STRUCT([part1,part2]);
var lab = EXTRUDE([2])(base);
var building = COLOR([0.55,0.93,0.93,0.6])(lab);
DRAW(building);

/* Exercise 2 */
var roof = T([0,1,2])([0,0,2])(COLOR([0.55,0.93,0.93,0.4])(BOUNDARY(CUBOID([9,7,0.3]))));
var part1 = POLYLINE([[0,0],[9,0],[9,3],[8,3],[8,1],[5,1],[5,3],[4,3],[4,1],[1,1],[1,3],[0,3],[0,0]]);
var part2 = POLYLINE([[0,7],[9,7],[9,4],[8,4],[8,6],[5,6],[5,4],[4,4],[4,6],[1,6],[1,4],[0,4],[0,7]]);
var base = STRUCT([part1,part2]);
var lab = COLOR([0.55,0.93,0.93])(EXTRUDE([2])(base));
var building = STRUCT([lab,roof]);
DRAW(building);

/* Exercise 3 */
var domain = INTERVALS(1)(20);
var curveMapping = CUBIC_HERMITE(S0)([[1,0],[1,1],[1,0],[1,1]]);
var curve = MAP(curveMapping)(domain);
DRAW(curve);

/* Exercise 4 */
var domain = INTERVALS(1)(40);
var curveMapping = BEZIER(S0)([[0,0],[3,1],[1,2],[2,3],[3,2]]);
var curve = MAP(curveMapping)(domain);
DRAW(curve);

/* Exercise 5 */
var domain = INTERVALS(1)(40);
var controlpoints = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]]; // ripeto il primo e l'ultimo punto se voglio interpolare anche loro
var splineCardinal = SPLINE(CUBIC_CARDINAL(domain))(controlpoints);
DRAW(splineCardinal);

/* Exercise 6 */
var domain = INTERVALS(1)(40);
var controlpoints = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]]; // ripeto il primo e l'ultimo punto se voglio interpolare anche loro
var splineCardinal = SPLINE(CUBIC_UBSPLINE(domain))(controlpoints);
DRAW(splineCardinal);

/* Exercise 7 */
var domain = INTERVALS(1)(40);
var controlpoints = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]]; // ripeto il primo e l'ultimo punto se voglio interpolare anche loro
var splineCardinal = COLOR([1,0,0])(SPLINE(CUBIC_UBSPLINE(domain))(controlpoints));
var splineCardinalbis = COLOR([0,0,1])(SPLINE(CUBIC_CARDINAL(domain))(controlpoints));
var drawPoints = COLOR([0,1,0])(SIMPLICIAL_COMPLEX(controlpoints)([[0],[1],[2],[3],[4],[5],[6],[7],[8],[9]]));
var splines = STRUCT([splineCardinal,splineCardinalbis,drawPoints]);
DRAW(splines);

/* Exercise 8 */
var hermite = function (dati) {
	var domain = INTERVALS(1)(20);
	var curveMapping = CUBIC_HERMITE(S0)(dati);
	var curve = COLOR([0,0,1])(MAP(curveMapping)(domain));
	var points = COLOR([0,1,0])(SIMPLICIAL_COMPLEX(dati)([[0],[1]]));
	var line = COLOR([1,0,0])(POLYLINE([dati[0],dati[1]]));
	var tot = STRUCT([curve,points,line]);
	DRAW(tot);
}

var bezier = function (dati) {
	var domain = INTERVALS(1)(40);
	var curveMapping = BEZIER(S0)(dati);
	var curve = COLOR([0,0,1])(MAP(curveMapping)(domain));
	var list = [];
	for(i = 0; i < dati.length; i++)
		list.push([i]);
	var points = COLOR([0,1,0])(SIMPLICIAL_COMPLEX(dati)(list));
	var line = COLOR([1,0,0])(POLYLINE(dati));
	var tot = STRUCT([curve,points,line]);
	DRAW(tot);
}

var cubicCardinal = function (dati) {
	var domain = INTERVALS(1)(40);
	var splineCardinal = COLOR([0,0,1])(SPLINE(CUBIC_CARDINAL(domain))(dati));
	var list = [];
	for(i = 0; i < dati.length; i++)
		list.push([i]);
	var points = COLOR([0,1,0])(SIMPLICIAL_COMPLEX(dati)(list));
	var line = COLOR([1,0,0])(POLYLINE(dati));
	var tot = STRUCT([splineCardinal,points,line]);
	DRAW(tot);
}

var uniformBspline = function (dati) {
	var domain = INTERVALS(1)(40);
	var splineCardinal = COLOR([0,0,1])(SPLINE(CUBIC_UBSPLINE(domain))(dati));
	var list = [];
	for(i = 0; i < dati.length; i++)
		list.push([i]);
	var points = COLOR([0,1,0])(SIMPLICIAL_COMPLEX(dati)(list));
	var line = COLOR([1,0,0])(POLYLINE(dati));
	var tot = STRUCT([splineCardinal,points,line]);
	DRAW(tot);
}