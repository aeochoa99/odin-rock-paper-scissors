const choices = ["ROCK", "PAPER", "SCISSORS"];
const startBtn = document.querySelector("#start");
const rockBtn = document.querySelector("#rock");

let computerScore = 0;
let playerScore = 0;
let currentRound = 0;

let displayRound = document.querySelector("#round");
let displayPlayerChoice = document.querySelector(".results > :first-child");
let displayComputerChoice = document.querySelector(".results > :last-child");
let displayPlayerScore = document.querySelector(".scoreboard > :first-child");
let displayComputerScore = document.querySelector(".scoreboard > :last-child");

rockBtn.disabled = true;

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    startBtn.style.backgroundColor = "#999999";
    startBtn.style.color = "#636363";

    rockBtn.disabled = false;

    displayPlayerChoice.textContent = "Make your choice!";
    displayComputerChoice.textContent = "Bring it on!";

    currentRound++;
    displayRound.textContent = `Round ${currentRound}`;
})

rockBtn.addEventListener("click", () => {
    let playerChoice = "ROCK";
    let computerChoice = getComputerChoice();

    displayPlayerChoice.textContent = playerChoice;
    displayComputerChoice.textContent = computerChoice;

    determineWinner(playerChoice, computerChoice);
    displayRound.textContent = `Round ${currentRound}`;
})

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

/*function getPlayerChoice() {
    choice = prompt("Enter 'rock', 'paper', or scissors'.").toLowerCase().replace(/\s/g, '');

    if (choice !== choices[0] && choice !== choices[1] && choice !== choices[2]) {
        return "Please enter a valid choice.";
    }

    return choice;
}*/

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === "ROCK" && computerChoice === "SCISSORS" ||
        playerChoice === "PAPER" && computerChoice === "ROCK"  ||
        playerChoice === "SCISSORS" && computerChoice === "PAPER"
    ) {
        playerScore++;
        displayPlayerScore.textContent = playerScore;
        currentRound++;
    } else if (playerChoice === computerChoice) {
        console.log(`It's a tie! You both picked ${playerChoice}!`);
    } else {
        computerScore++;
        displayComputerScore.textContent = computerScore;
        currentRound++;
    }
}

/*function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getPlayerChoice(), getComputerChoice());
    }

    if (playerScore > computerScore) {
        console.log(`You win ${playerScore}-${computerScore}!`);
    } else if (playerScore < computerScore) {
        console.log(`You lose ${playerScore}-${computerScore}!`);
    } else {
        console.log(`It's a tie ${playerScore}-${computerScore}!`);
    }
}*/