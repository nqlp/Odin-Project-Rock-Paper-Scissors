document.addEventListener("DOMContentLoaded", () => {
    const rockRadio = document.getElementById("rockRadio");
    const paperRadio = document.getElementById("paperRadio");
    const scissorsRadio = document.getElementById("scissorsRadio");

    let playerScore = 0;
    let computerScore = 0;

    document.getElementById("playRound").addEventListener("click", () => {
        if (!rockRadio.checked && !paperRadio.checked && !scissorsRadio.checked) {
            alert("Please select Rock, Paper, or Scissors");
        }

        else {
            if (rockRadio.checked) {
                playerSelection = rockRadio.value;
            }
            if (paperRadio.checked) {
                playerSelection = paperRadio.value;
            }
            if (scissorsRadio.checked) {
                playerSelection = scissorsRadio.value;
            }

            computerSelection = getComputerChoice();

            document.getElementById("player").textContent = "Player has chosen: " + playerSelection;
            document.getElementById("computer").textContent = "Computer has chosen: " + computerSelection;

            if (playerSelection === computerSelection) {
                document.getElementById("winner").textContent = "It's a tie!";
            } else if (
                (playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "scissors" && computerSelection === "paper")
            ) {
                playerScore++;
                document.getElementById("playerScore").textContent = "Player Score: " + playerScore;
                document.getElementById("winner").textContent = "You have won!";
                checkWinner();
            } else {
                computerScore++;
                document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
                document.getElementById("winner").textContent = "The computer have won!";
                checkWinner();
            }
        }
    });

    document.getElementById("playAgainBtn").addEventListener("click", () => {
        location.reload();
    });

    function getComputerChoice() {
        var choices = ["rock", "paper", "scissors"];
        var randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function checkWinner() {
        if (playerScore === 5) {
            alert("You win the game!");
        } else if (computerScore === 5) {
            alert("Computer wins the game!");
        }
    }
});