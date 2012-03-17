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