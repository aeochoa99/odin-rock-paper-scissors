const choices = ["ROCK", "PAPER", "SCISSORS"];
const startBtn = document.querySelector("#start");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");

let computerScore = 0;
let playerScore = 0;
let currentRound = 0;

let displayRound = document.querySelector("#round");
let displayPlayerChoice = document.querySelector(".results > :first-child");
let displayComputerChoice = document.querySelector(".results > :last-child");
let displayPlayerScore = document.querySelector(".scoreboard > :first-child");
let displayComputerScore = document.querySelector(".scoreboard > :last-child");

rockBtn.disabled = true;
paperBtn.disabled = true;

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    startBtn.style.backgroundColor = "#999999";
    startBtn.style.color = "#636363";

    rockBtn.disabled = false;
    paperBtn.disabled = false;

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

paperBtn.addEventListener("click", () => {
    let playerChoice = "PAPER";
    let computerChoice = getComputerChoice();

    displayPlayerChoice.textContent = playerChoice;
    displayComputerChoice.textContent = computerChoice;

    determineWinner(playerChoice, computerChoice);
    displayRound.textContent = `Round ${currentRound}`;
})

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

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