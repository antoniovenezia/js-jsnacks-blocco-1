//Calcola la somma e la media dei primi 10 numeri.

var userNumber = "5555555555";

var resultSomma = 0;
var resultMedia;

for (var i = 0; i < userNumber.length; i++) {
    resultSomma += parseInt(userNumber[i]);
    document.getElementById("number").innerHTML = resultSomma + "<br>";
}

resultMedia = resultSomma / 10;
document.getElementById("number").innerHTML += resultMedia;

