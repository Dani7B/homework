Filtrare i numeri positivi di un array e restituire la somma

var sumPositiveArray = function(array) {
	return array
			.filter(function(item) {
				return item > 0;
			})
			.reduce(function(previous,current){
				return previous + current;
			});
}

/* Possiamo così incapsulare le variabili. La funzione viene eseguita subito, nell'oggetto globale;
	abbiamo anche visibilità di ciò che è pubblico */
!(function (exports) { // ! se voglio che ritorni true e non undefined
	var a = 1;
	var b = 2;

	exports.f1 = function() {

	}

}(this))  // this è window


window.f1 // da window possiamo vedere f1, ma a e b sono nascoste.


var apply = function(arguments) {
	var elemento = arguments[1];
	var funzione = arguments[0];
	return funzione(elemento);
}


var aa = function(funzione) {
	return (function(array) {
		return array.map(funzione);
	});
}


var comp2 = function(funzioni) {
	return (function(x) {
		return funzioni[0](funzioni[1](x));
	});
}


var comp = function(funzioni) {
	var funzione = funzioni.reduce(function(prev,curr) {
		return comp2([prev,curr]);
	});
	return (function(x) {
		return funzione(x);
	});
}


var cons = function(funzioni) {
	return function(x) {
		var result = new Array(funzioni.length);
		for(var i=0; i<funzioni.length; i++) {
			result[i] = (funzioni[i](x));
		}
		return result;
	};
}