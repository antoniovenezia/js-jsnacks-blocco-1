var num = [];

for (var i = 1; i <= 6; i++ ) {
    var userNumber = parseInt(prompt("Inserisci un numero!"));
    if (userNumber % 2 !== 0) {
        num.push(userNumber);
    } 
}



console.log(num);