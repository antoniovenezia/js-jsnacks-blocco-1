var name = prompt("Qual'è il tuo nome?");

var allInvitates = ["Antonio", "Marco", "Gianluca", "Manuela", "Lucrezia", "Anna", "Sabrina", "Patrick"];

var check = false;

for (var i=0; i < allInvitates.length; i++) {
    if (allInvitates[i] === name) {
        check = true;
        break;
    }
}

if (check) {
    document.getElementById("invitates").innerHTML = "Ok, sei invitato!"
} else {
    document.getElementById("invitates").innerHTML = "Mi dispiace, non sei invitato!"
}