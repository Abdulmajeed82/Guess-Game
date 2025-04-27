let randomNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
    const guessInput = document.getElementById('guess');
    const message = document.getElementById('message');
    const guess = Number(guessInput.value);

    if (!guess || guess < 1 || guess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
        message.style.color = "red";
        return;
    }
    if (guess === randomNumber) {
        message.textContent = "Congratulations! You guessed the correct number!";
        message.style.color = "green";
    } else if (guess < randomNumber) {
        message.textContent = "Too low! Try again.";
        message.style.color = "orange";
    } else {
        message.textContent = "Too high! Try again.";
        message.style.color = "orange";
    }
}
function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('guess').value = '';
    document.getElementById('message').textContent = '';
}
    document.addEventListener('DOMContentLoaded', () => {
       const restartButton = document.getElementById('restart-game');
       restartButton.addEventListener('click', restartGame);
    });

