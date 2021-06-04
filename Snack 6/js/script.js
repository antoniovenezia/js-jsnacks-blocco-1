var cube = parseInt(prompt("Scegli un numero!"));

for (var i = 1; i <= cube; i++) {
    document.getElementById("numberCube").innerHTML += Math.pow(i, 3) + "<br>";
}

console.log(i);