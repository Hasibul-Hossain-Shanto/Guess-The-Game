let randomNumber;
let guessesLeft = 10;

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessesLeft = 10;
    document.getElementById("feedback").textContent = "";
    document.getElementById("remainingGuesses").textContent = `Guesses left: ${guessesLeft}`;
    document.getElementById("guessInput").value = "";
    document.getElementById("submitGuess").disabled = false;
}

function submitGuess() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById("feedback").textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    guessesLeft--;
    document.getElementById("remainingGuesses").textContent = `Guesses left: ${guessesLeft}`;
    
    if (userGuess === randomNumber) {
        document.getElementById("feedback").textContent = "Congratulations! You guessed it!";
        document.getElementById("submitGuess").disabled = true;
    } else if (guessesLeft === 0) {
        document.getElementById("feedback").textContent = `Game Over! The correct number was ${randomNumber}.`;
        document.getElementById("submitGuess").disabled = true;
    } else if (userGuess < randomNumber) {
        document.getElementById("feedback").textContent = "Too low!";
    } else {
        document.getElementById("feedback").textContent = "Too high!";
    }
}

document.getElementById("submitGuess").addEventListener("click", submitGuess);
document.getElementById("restartGame").addEventListener("click", initializeGame);

// Initialize the game when the page loads
initializeGame();
