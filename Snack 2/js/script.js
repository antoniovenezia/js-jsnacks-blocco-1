var word1 = prompt("Scegli una parola");
var word2 = prompt("Scegli un'altra parola");

if (word1.length > word2.length) {
    document.getElementById("word").innerHTML = word1;
} else if (word1.length < word2.length) {
    document.getElementById("word").innerHTML = word2;
} else {
    document.getElementById("word").innerHTML = word1 + "----" + word2;
}