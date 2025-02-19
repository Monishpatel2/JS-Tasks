let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let guess = parseInt(document.getElementById("guess").value);
    let message = document.getElementById("message");

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.innerText = "Please enter a number between 1 and 100.";
        message.style.color = "red";
        return;
    }

    if (guess === randomNumber) {
        message.innerText = "Congratulations! You guessed the right number!";
        message.style.color = "green";
    } else if (guess < randomNumber) {
        message.innerText = "Too low! Try again.";
        message.style.color = "orange";
    } else {
        message.innerText = "Too high! Try again.";
        message.style.color = "orange";
    }
}
