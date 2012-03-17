function Point(x,y) {
	this.x = x || 0; // per dare valori di default con costruttore senza argomenti
	this.y = y || 0;
}


Point.prototype.toString = function() {
	return "x = " + this.x + " , y = " + this.y;
};


Point.prototype.getDistanceFromPoint = function(p2) {
	return Math.sqrt(Math.pow(this.x - p2.x,2) + Math.pow(this.y - p2.y,2));
};


Point.prototype.traslate = function(dx,dy) {
	this.x += dx;
	this.y += dy;
	return this; // utile per il chaining
};


Point.prototype.membership = function(line) {
	var result = line.valueOf(this);
	if (result > 0)
		return +1;
	if (result < 0)
		return -1;
	return 0;
};


function Line(a,b,c) {
	if(!(this instanceof Line)) { // così i valori non vengono assegnati alla window
		return new Line(a,b,c);		// viene sempre creato un oggetto Line
	}

	this.a = a;
	this.b = b;
	this.c = c;
}


Line.prototype.valueOf = function(point) {
	return (this.a * point.x) + (this.b * point.y) + this.c;
};


Point.prototype.getDistanceFromLine = function(line) {
	return ((line.a * this.x) + (line.b * this.y) + line.c)/(Math.sqrt(Math.pow(line.a,2)+Math.pow(line.b,2)));
};


Point.prototype.getDistance = function (x) {
	if (x instanceof Point) {
		return this.getDistanceFromPoint(x);
	}

	if (x instanceof Line) {
		return this.getDistanceFromLine(x);
	}

	throw new Error("It's not a Point nor a Line");
};


var overBisector = function(array) {
	var isOver = function(point) {
   		return point.y - point.x > 0 ;  
  	}
	var result = array.filter(function(item,index,array) {
    	return test(item);
 	})
  	
  	return result;
}


var randomPoint = function() {
	var x = Math.cos(Math.random() * Math.PI) * 100;
	var y = Math.cos(Math.random() * Math.PI) * 100;
	return new Point(x,y);
}


var randomPointAlternative = function() {
	var x = Math.random() * 200 - 100;
	var y = Math.random() * 200 - 100;
	return new Point(x,y);
}


var generatePoints = function(n) {
	var n = n || 1;
	var array = new Array(n);
	for (var i = 0; i < n; i++) {
		array[i] = randomPoint();
	}
	return array;
}

function Triangle(p1,p2,p3) {
	this.points = [p1,p2,p3];
}


Triangle.prototype.toString = function() {
	return "A = (" + points[0].x + " , " + points[0].y + ") , " +
	"B = (" + points[1].x + " , " + points[1].y + ") , " +
	"C = (" + points[2].x + " , " + points[2].y + ")";
};


Triangle.prototype.getPerimeter = function() {
	return this.points.reduce(function(previous, current) {
		return previous + current;
	});
};


Triangle.prototype.getArea = function() { // modifica
	var edge1 = this.points[0].getDistance(this.points[1]);
	var edge2 = this.points[0].getDistance(this.points[2]);
	var edge3 = this.points[1].getDistance(this.points[2]);
	var p = (edge1+edge2+edge3)/2;
	return Math.sqrt(p*(p-edge1)*(p-edge2)*(p-edge3));
};


Triangle.prototype.above = function(newLine) {
	return this.points.every(function(item,index,array){
			return newLine.getDistance(item) > 0
		});
};


Triangle.prototype.below = function(newLine) {
	return this.points.every(function(item,index,array){
			return newLine.getDistance(item) < 0
		});
};


Triangle.prototype.intersect = function(newLine) {
	return (!this.above(newLine) && !this.below(newLine));
};


var Quad = function(p1,p2,p3,p4) {
	this.points = [p1,p2,p3,p4];
}


Quad.prototype.above = Triangle.prototype.above;


Quad.prototype.below = Triangle.prototype.below;


Quad.prototype.intersect = Triangle.prototype.intersect;