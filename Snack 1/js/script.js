var number1 = parseInt(prompt("Scegli un numero"));
var number2 = parseInt(prompt("Scegli un altro numero"));

if (number1 > number2) {
    document.getElementById("numbers").innerHTML = number1;
} else if (number1 < number2) {
    document.getElementById("numbers").innerHTML = number2;
} else {
    document.getElementById("numbers").innerHTML = number1 + "----" + number2;
}