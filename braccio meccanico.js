var link = T([0,1])([-1,-19])(CUBOID([2,20]));
var joint = function (alpha) {
	return COMP([T([1])([-18]), R([2]) (alpha*PI/180)]); // trasformazione di scala
}

var arm = function (a1,a2,a3) {
	return STRUCT([link, joint(a1), link, joint(a2), link, joint(a3), link]);
}