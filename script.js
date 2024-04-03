document.addEventListener("DOMContentLoaded", function () {
    function getComputerChoice() {
        var choices = ["rock", "paper", "scissors"];
        var randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

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
        }

        computerInput = getComputerChoice();

        document.getElementById("player").textContent = "Player has chosen: " + playerInput;
        document.getElementById("computer").textContent = "Computer has chosen: " + computerInput;

        let playerScore = 0;
        let computerScore = 0;
        if (playerInput === computerInput) {
            return "It's a tie!";
        } else if (
            (playerInput === "rock" && computerSelection === "scissors") ||
            (playerInput === "paper" && computerSelection === "rock") ||
            (playerInput === "scissors" && computerSelection === "paper")
        ) {
            playerScore++;
            return "You win!";
        } else {
            computerScore++;
            return "You lose!";
        }
    });
});
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        results.textContent = result;
        console.log(result);
    });
});