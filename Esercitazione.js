var quad = new SIMPLICIALCOMPLEX([[0,0],[1,0],[1,1],[0,1]])([[0,1,3],[1,2,3]]);

DRAW(quad);

var quad10 = STRUCT(REPLICA(10)([quad,T([1])([2])]));

DRAW(quad10);

 // Questa va fatta per prima, fixa il SIMPLEXGRID che  buggato
 SIMPLEXGRID = function (quotes) {
    return p.simplexGrid(quotes);
 };

var maioliche = SIMPLEXGRID([REPLICA(10)([1,-1]), REPLICA(10)([1,-1])]);

var cubi3d = SIMPLEXGRID([REPLICA(10)([1,-1]), REPLICA(10)([1,-1]), REPLICA(10)([1,-1])]);