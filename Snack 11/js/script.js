//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo

var userNumber = parseInt(prompt("Inserisci un numero:"));

if (userNumber % 2 == 0) {
    document.getElementById("number").innerHTML = "Il numero inserito è pari: " + userNumber;
} else {
    document.getElementById("number").innerHTML = "Il numero inserito dall'utente era dispari :-( dunque il successivo è: " + (userNumber + 1);
}