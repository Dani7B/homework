/* Esercizio 1 */
var domain1 = INTERVALS(1)(30);
var controlpoints1 = [[1,0],[0,1],[0,2],[-2,0]];
var c1 = CUBIC_HERMITE(S0)(controlpoints1); // curva: array di funzioni
var curve1 = MAP(c1)(domain1); // immagine della curva

var controlpoints2 = [[2,0],[0,2],[0,3],[-3,0]];
var c2 = CUBIC_HERMITE(S0)(controlpoints2); // curva: array di funzioni
var curve2 = MAP(c2)(domain1); // immagine della curva

var curves = STRUCT([curve1,curve2]);

var s12 = BEZIER(S1)([c1,c2]); // uso le curve, non le loro immagini

var domain2 = DOMAIN([[0,1],[0,1]])([30,50]); // da 0 a 1 * 0 a 1 diviso in 30 e 50
var surface12 = MAP(s12)(domain2); 
DRAW(surface12);



/* Esercizio 2 */
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50]); // da 0 a 1 * 0 a 1 diviso in 30 e 50
var controlpoints1 = [[1,0,0],[0,1,0],[0,2,0],[-2,0,0]];
var c1 = CUBIC_HERMITE(S0)(controlpoints1); // curva: array di funzioni
var curve1 = MAP(c1)(domain1); // immagine della curva

var controlpoints2 = [[2,0,0],[0,2,0],[0,3,0],[-3,0,0]];
var c2 = CUBIC_HERMITE(S0)(controlpoints2); // curva: array di funzioni
var curve2 = MAP(c2)(domain1); // immagine della curva


var s12b = BEZIER(S1)([c1,c2]); // uso le curve, non le loro immagini
var surface12b = MAP(s12b)(domain2); 

var s12h = CUBIC_HERMITE(S1)([c1,c2,[0,0,3],[0,0,-3]]); 
var surface12h = MAP(s12h)(domain2); 

DRAW(SKELETON(1)(surface12h));

var tube = STRUCT([surface12h, surface12b]);
DRAW(tube);



/* Esercizio 3 */
var domain1 = INTERVALS(1)(30);
var controlpoints = [[10,0,0],[0,5,0],[0,-3,0],[5,2,0],[10,0,0]];
var c1 = BEZIER(S0)(controlpoints);
var curve1 = MAP(c1)(domain1);
DRAW(curve1);


function POLYPOINT (points) {
	return SIMPLICIAL_COMPLEX(points)(points.map(function(p,i){
		return [i];
	}));
}

var p1 = POLYPOINT(controlpoints);
var t = T([2])([10]);
var struct = STRUCT([p1,t,p1,t,p1,t,p1]); // Z=0, Z=10, Z=20, Z=30


var domain2 = DOMAIN([[0,1],[0,1]])([30,50]); 

var p0 = [[10,0,0],[0,5,0],[0,-3,0],[5,2,0],[10,0,0]];
var p1 = p0.map(function(p) {return [p[0],p[1],p[2]+10]});
var p2 = p0.map(function(p) {return [p[0],p[1],p[2]+20]});
var p3 = p0.map(function(p) {return [p[0],p[1],p[2]+30]});
var p4 = p0.map(function(p) {return [p[0],p[1],p[2]+40]});

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);

var curves = STRUCT(CONS(AA(MAP)([c0,c1,c2,c3,c4]))(domain1));
DRAW(curves);

var wing = BEZIER(S1)([c0,c1,c2,c3,c4]);
var surf = MAP(wing)(domain2);
DRAW(surf);



/* Eservizio 4*/
var domain1 = INTERVALS(1)(15);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);

var controls1 = [[0,0,0],[2,5,0],[7,3,0],[9,7,0],[12,2,0]];
var knots1 = [0,0,0,1,2,3,3,3];
var c1 = NUBS(S0)(2)(knots1)(controls1);
var curve1 = MAP(c1)(domain1);
DRAW(curve1);


var controls2 = [[0,0,0],[2,5,3],[7,3,6],[9,7,-2],[12,2,-3]];
var knots2 = [0,0,0,1,2,3,3,3];
var c2 = NUBS(S0)(2)(knots2)(controls2);
var curve2 = MAP(c2)(domain1);
DRAW(curve2);


var s12 = BEZIER(S1)([c1,c2]);
var surf = MAP(s12)(domain2);
DRAW(surf);


