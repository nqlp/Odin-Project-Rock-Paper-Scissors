function getComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Test the function
var playerSelection = "rock";
const computerChoice = getComputerChoice();
console.log(playRound(playerSelection, computerChoice));

function playGame() {
    for (let i = 0; i < 5; i++) {
        prompt("Enter your choice: rock, paper, or scissors");
        playRound(playerSelection, getComputerChoice());
    }
    console.log(playRound(playerSelection, getComputerChoice()));
}

// Test the function
playGame();