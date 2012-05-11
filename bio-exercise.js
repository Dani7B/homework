var cls = function (X,Y) {
	var i = X.length;
	var j = Y.length;
	if (i==0 || j==0)
		return 0
	else if (X[i-1] == Y[j-1])
		return cls (X.slice(0,i-1),Y.slice(0,j-1)) + 1;
	else 
		return Math.max(cls(X,Y.slice(0,j-1)),cls(X.slice(0,i-1),Y));
}

var LCS = function (X,Y) {
	var m = X.length;
	var n = Y.length;
	var C = new Array (m+1);
	for (i = 0; i < C.length; i++)
		C[i] = new Array (n+1);
	for(i = 0; i < m+1; i++)
		C[i][0] = 0;
	for(j = 0; j < n+1; j++)
		C[0][j] = 0;
	for(i = 1; i < m+1; i++){
		for(j = 1; j < n+1; j++){
			if(X.charAt(i) == Y.charAt(j))
				C[i][j] = C[i-1][j-1] + 1;
			else
				C[i][j] = Math.max(C[i][j-1], C[i-1][j]);
		}
	}
	return C;
} 

var backTrack = function (C, X, Y, i, j) {
	if (i == 0 || j == 0)
		return "";
	else if (X.charAt(i-1) == Y.charAt(j-1))
		return backTrack(C, X, Y, i-1, j-1) + X.charAt(i-1);
	else {
		if (C[i][j-1] > C[i-1][j])
			return backTrack(C, X, Y, i, j-1);
		else
			return backTrack(C, X, Y, i-1, j);
	}
}
