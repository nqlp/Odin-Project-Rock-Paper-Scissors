document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button-container button");
    const rockBtn = document.getElementById("rockBtn");
    const paperBtn = document.getElementById("paperBtn");
    const scissorsBtn = document.getElementById("scissorsBtn");

    let playerScore = 0;
    let computerScore = 0;

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            playerSelection = e.target.id;

            if (playerSelection === "rockBtn") {
                playerSelection = "rock";
            }

            else if (playerSelection === "paperBtn") {
                playerSelection = "paper";
            }
            else if (playerSelection === "scissorsBtn") {
                playerSelection = "scissors";
            }

            computerSelection = getComputerChoice();

            if (playerSelection === computerSelection) {
                document.getElementById("winner").textContent = "It's a tie!";
                document.getElementById("computerChoice").textContent = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
            } else if (
                (playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "scissors" && computerSelection === "paper")
            ) {
                playerScore++;
                document.getElementById("playerScore").textContent = "Player Score: " + playerScore;
                document.getElementById("computerChoice").textContent = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
                document.getElementById("winner").textContent = "You. 🎉 " + `${playerSelection}`.charAt(0).toUpperCase() + `${playerSelection}`.slice(1) + " beats " + `${computerSelection}`.charAt(0).toUpperCase() + `${computerSelection}`.slice(1) + ".";
                checkWinner();

            } else {
                computerScore++;
                document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
                document.getElementById("computerChoice").textContent = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
                document.getElementById("winner").textContent = "The computer. " + `${computerSelection}`.charAt(0).toUpperCase() + `${computerSelection}`.slice(1) + " beats " + `${playerSelection}`.charAt(0).toUpperCase() + `${playerSelection}`.slice(1) + ".";
                checkWinner();

            }
        });
    });

    document.getElementById("playAgainBtn").addEventListener("click", () => {
        playerScore = 0;
        computerScore = 0;
        document.getElementById("playerScore").textContent = "Player Score: " + playerScore;
        document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
        document.getElementById("winner").textContent = "";
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
    });

    function getComputerChoice() {
        var choices = ["rock", "paper", "scissors"];
        var randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function checkWinner() {
        if (playerScore === 5) {
            alert("You win the game!");
            disableBtn();
        } else if (computerScore === 5) {
            alert("Computer wins the game!");
            disableBtn();
        }
    }

    function disableBtn() {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
});