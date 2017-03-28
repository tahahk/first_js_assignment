/*11. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.*/

var secnum = 4;
var promptInput = +prompt("Guess Number ranging from 1 to 10");

if(promptInput===secnum){
    document.write("Bingo");
}
else if(promptInput===++secnum){
    document.write("Close Enough")
}