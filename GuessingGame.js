var secretNumber =21;

var guess = Number(prompt("Guess a number"));

if(guess === secretNumber) {
    alert("YOU GOT IT RIGHT!");
}
else if (guess > secretNumber) {
    alert("Too high. Guess again!");
}
else {
    alert("Too low. Guess again!");
}