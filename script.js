const choices = ["rock", "paper", "scissors"];

let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    choice = prompt("Enter 'rock', 'paper', or scissors'.").toLowerCase().replace(/\s/g, '');

    if (choice !== choices[0] && choice !== choices[1] && choice !== choices[2]) {
        return "Please enter a valid choice.";
    }

    return choice;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock"  ||
        playerChoice === "scissors" && computerChoice === "paper"
    ) {
        console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
        playerScore++;
    } else if (playerChoice === computerChoice) {
        console.log(`It's a tie! You both picked ${playerChoice}!`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        computerScore++;
    }
}