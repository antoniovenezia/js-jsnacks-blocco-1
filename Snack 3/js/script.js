var result = 0;

for (var i = 1; i <= 10; i++) {
    var numbers = parseInt(prompt("Scegli un numero"));
    result += numbers;
}

document.getElementById("count").innerHTML = result;