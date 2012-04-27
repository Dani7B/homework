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