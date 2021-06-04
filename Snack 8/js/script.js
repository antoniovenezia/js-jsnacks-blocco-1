//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero.
//(bonus: controllate che il numero sia realmente di 4 cifre altrimenti 
//restituite un alert) 


var num4cifre = prompt("Inserisci un numero di 4 cifre:");

if (num4cifre.length !== 4) {
    alert("Hai inserito un numero di lunghezza superiore!");
} else if (isNaN(num4cifre)) {
    alert("L'input non è un numero!");
} else {
    var result = 0;
    for (var i = 0; i < num4cifre.length; i++) {
        result += parseInt(num4cifre[1]);
        document.getElementById("numbers").innerHTML = result;
    }
}