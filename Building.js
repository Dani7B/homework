/* Pilastri */
var pillars = SIMPLEX_GRID([
	REPLICA(3)([0.15,-6*2.4,0.15]), // negativo perchè corrisponde ad uno spazio vuoto; X
	[0.15,-6*2.4,0.15], // Y
	[1.5,3,3] // Z
	]);


/* Travi */
var beams = SIMPLEX_GRID([
	REPLICA(3)([0.15, -6*2.4, 0.15]), // negativo perchè corrisponde ad uno spazio vuoto; X
	[14.7], // [0.15 +(6*2.4) + 0.15]
	[-7.5, 1.5] // Z
]);


/* Piani */
var floors = SIMPLEX_GRID([
	REPLICA(3) (14.7),
	[-0.15, 14.4, -0.15],
	[-1.2, 0.3, -2.7, 0.3, -2.7, 0.3]
]);


/* Struttura a sbalzo*/
var cantileverFloor = SIMPLEX_GRID([
	[0.15, 2*2.4, 0.15],
	[-0.15, 14.4, -0.15],
	[-1.2, 0.3, -2.7, 0.3, -2.7, 0.3]
]);


var cantileverPillars = SIMPLEX_GRID([
	[0.15],
	[14.7],
	[-7.5, 1.5]
]);


var cantileverBeam = SIMPLEX_GRID([
	[0.15],
	[-0.15, 14.4, -0.15],
	[1.5, 3, 3]
]);

var cantilever = STRUCT([cantileverBeam, cantileverPillars, cantileverFloor]);

/* Altra struttura a sbalzo */
var cantilever1 = S([0])([-1])(cantilever);

var cantilever2 = T([0])([3*14.7])(cantilever);


/* Pannellatura esterna*/

/* Singolo pannello */
var grid1 = SIMPLEX_GRID([[-0.15, 0.05, -2.3, 0.05],[0.15], [1.5,3,3]]);
var grid2 = SIMPLEX_GRID([[-0.15,-0.05, 2.3,-0.5],[0.15],[0.3,-0.9,0.3,-2.95,0.05,-2.7,0.3]]);
var grid3 = SIMPLEX_GRID([[-0.15,-0.05,-1.125,0.05,-1.125,-0.05], [0.15], [-0.3,0.9,-0.3,2.95,0.05]]);
var panel = SIMPLEX_GRID([[-0.15,-0.05,1.125,-0.05,1.125, -0.05], [-0.1,0.05], [-0.3, 0.9, -0.3, 2.95/2]]);

var grid = COLOR([0.2,0.2,0.2])(STRUCT([grid1,grid2,grid3]));

/* Singolo pannello completo, colorato*/
var frame = function (color) {
	return STRUCT([COLOR(color)(panel),grid]);
}

/* Insieme di number pannelli di colore color*/
var frameGroup = function(number, color) {
	return STRUCT(REPLICA(number)([frame(color),T([0])([2.4])]))};

var colors = [[1,0,0],[0,1,0],[0,0,1],[0,1,1],[1,0,1],[1,1,0]];

var frames = STRUCT([
	frameGroup(3,colors[0]), T([0])([3*2.4]),
	frameGroup(3,colors[1]), T([0])([3*2.4]), T([0])([0.3]),
	frameGroup(3,colors[2]), T([0])([3*2.4]),
	frameGroup(3,colors[3]), T([0])([3*2.4]), T([0])([0.3]),
	frameGroup(3,colors[4]), T([0])([3*2.4]),
	frameGroup(3,colors[5])
]);

var cantileverFrames1 = T([0])([3*14.7])(frameGroup(2,[1,1,1]));
var cantileverFrames2 = T([0])([-2*2.4])(frameGroup(2,[1,1,1]));
var cantileverFrames = STRUCT([cantileverFrames1,cantileverFrames2]);
var cantileverBack = T([1])([14.7])(S([1])([-1])(cantileverFrames));

var cantileverBorder1 = R([2])([Math.PI/2])(T([1])([2*2.4])(frameGroup(6,[1,1,1])));
var cantileverBorder2 = R([2])([Math.PI/2])(T([1])([-48.9])(frameGroup(6,[1,1,1])));

var backFrames = T([1])([14.7])(S([1])([-1])(frames));

var steelFrames = COLOR([0.2,0.2,0.2])(STRUCT([pillars,beams,floors,cantilever1,cantilever2]));


var topPillars = SIMPLEX_GRID([
	[0.15,-4*2.4,0.15], // negativo perchè corrisponde ad uno spazio vuoto; X
	[0.15,-4*2.4,0.15], // Y
	[1.35] // Z
	]);

var topCeiling = SIMPLEX_GRID([
	[-0.15, 9.6, -0.15],
	[-0.15, 9.6, -0.15],
	[-1, 0.3]
]);

var topGrid1 = SIMPLEX_GRID([[-0.15, 0.05, -2.3, 0.05],[0.15], [1.35]]);
var topGrid2 = SIMPLEX_GRID([[-0.15,-0.05, 2.3,-0.5],[0.15],[0.15,-0.9,0.3]]);
var topGrid3 = SIMPLEX_GRID([[-0.15,-0.05,-1.125,0.05,-1.125,-0.05], [0.15], [1.2]]);
var topGrid = COLOR([0.2,0.2,0.2])(STRUCT([topGrid1,topGrid2,topGrid3]));

var topPanel = SIMPLEX_GRID([[-0.15,-0.05,1.125,-0.05,1.125, -0.05], [-0.1,0.05], [-0.15, 0.9]]);

var topFrame = function (color) {
	return STRUCT([COLOR(color)(topPanel),topGrid]);
};

var topFrames = STRUCT(REPLICA(4)([topFrame([1,1,1]),T([0])([2.4])]));

var topSteelFrames = COLOR([0.2,0.2,0.2])(STRUCT([topPillars,topCeiling]));

var backTopFrames = T([1])([9.91])(S([1])([-1])(topFrames));

var lateralFrames1 = R([2])([Math.PI/2])(T([0,1,2])([2.4,-17.15,7.5])(topFrames));
var lateralFrames2 = R([2])([Math.PI/2])(T([0,1,2])([2.4,-26.9,7.5])(topFrames));

var attic = T([0,1,2])([17, 2.4 ,7.5])(STRUCT([topSteelFrames,backTopFrames,topFrames]));

var building = STRUCT([steelFrames,frames,backFrames,cantileverFrames,cantileverBack]); // per creare un'unica struttura

DRAW(building);
DRAW(cantileverBorder1);
DRAW(cantileverBorder2);
DRAW(attic);
DRAW(lateralFrames1);
DRAW(lateralFrames2);