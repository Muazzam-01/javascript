let word = prompt("Enter a word:");

let reversed = "";

for (let count = word.length - 1; count >= 0; count--) {

    reversed += word[count];

}

if (word === reversed) {
    console.log("It is a palindrome");
}
else {
    console.log("It is not a palindrome");
}
