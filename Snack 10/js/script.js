//Il software deve chiedere per 5 volte all’utente di inserire un numero.
// programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.

// CON IL FOR
var result = 0;

for (var i = 1; i < 6; i++) {
    var numberUser = prompt("Scrivi un numero:");
    result += parseInt(numberUser);
    // document.getElementById("number").innerHTML = result + "\n";
}

if (isNaN(result)) {
    alert ("Non hai inserito una cifra");
} else {
    document.getElementById("number").innerHTML = result + "\n";
}


/*
// CON IL WHILE
var result = 0;
var quantitàNum = 5;
var i = 0;

while (i < quantitàNum) {
    var numberUser = prompt("Scrivi un numero:");
    result += parseInt(numberUser);
    i++;
}


document.getElementById("number").innerHTML = result + "\n";*/

