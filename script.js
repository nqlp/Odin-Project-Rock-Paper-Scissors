document.addEventListener("DOMContentLoaded", function () {
    function getComputerChoice() {
        var choices = ["rock", "paper", "scissors"];
        var randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    let playerScore = 0;
    let computerScore = 0;

    document.getElementById("playRound").addEventListener("click", () => {
        const rockRadio = document.getElementById("rockRadio");
        const paperRadio = document.getElementById("paperRadio");
        const scissorsRadio = document.getElementById("scissorsRadio");

        if (!rockRadio.checked && !paperRadio.checked && !scissorsRadio.checked) {
            alert("Please select Rock, Paper, or Scissors");
        }

        else {
            let playerInput;
            if (rockRadio.checked) {
                playerInput = rockRadio.value;
            }
            if (paperRadio.checked) {
                playerInput = paperRadio.value;
            }
            if (scissorsRadio.checked) {
                playerInput = scissorsRadio.value;
            }

            computerInput = getComputerChoice();

            document.getElementById("player").textContent = "Player has chosen: " + playerInput;
            document.getElementById("computer").textContent = "Computer has chosen: " + computerInput;

            if (playerInput === computerInput) {
                document.getElementById("winner").textContent = "It's a tie!";
                return "It's a tie!";
            } else if (
                (playerInput === rockRadio.checked && computerSelection === "scissors") ||
                (playerInput === paperRadio.checked && computerSelection === "rock") ||
                (playerInput === scissorsRadio.checked && computerSelection === "paper")
            ) {
                playerScore++;
                document.getElementById("playerScore").textContent = "Player Score: " + playerScore;
                document.getElementById("winner").textContent = "The winner is: You!";
                return "You win!";
            } else {
                computerScore++;
                document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
                document.getElementById("winner").textContent = "The winner is: Computer!";
                return "You lose!";
            }
        }
    });
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id);
    });
});