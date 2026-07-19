const choices = ["ROCK", "PAPER", "SCISSORS"];
const startBtn = document.querySelector("#start");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const rockBtnComputedStyles = window.getComputedStyle(rockBtn);
const paperBtnComputedStyles = window.getComputedStyle(paperBtn);
const scissorsBtnComputedStyles = window.getComputedStyle(scissorsBtn);
const startBtnComputedStyles = window.getComputedStyle(startBtn);

const startBtnBackgroundColor = startBtnComputedStyles.backgroundColor;
const startBtnColor = startBtnComputedStyles.color;

const rockBtnBackgroundColor = rockBtnComputedStyles.backgroundColor;
const rockBtnColor = rockBtnComputedStyles.color;

const paperBtnBackgroundColor = paperBtnComputedStyles.backgroundColor;
const paperBtnColor = paperBtnComputedStyles.color;

const scissorsBtnBackgroundColor = scissorsBtnComputedStyles.backgroundColor;
const scissorsBtnColor = scissorsBtnComputedStyles.color;

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
scissorsBtn.disabled = true;

startBtn.addEventListener("click", () => {
    if (currentRound > 0) {
        resetBtnStyles();
        resetGame();
    }

    startBtn.disabled = true;
    startBtn.style.backgroundColor = "#999999";
    startBtn.style.color = "#636363";

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

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

    isGameOver();
})

paperBtn.addEventListener("click", () => {
    let playerChoice = "PAPER";
    let computerChoice = getComputerChoice();

    displayPlayerChoice.textContent = playerChoice;
    displayComputerChoice.textContent = computerChoice;

    determineWinner(playerChoice, computerChoice);

    isGameOver();
})

scissorsBtn.addEventListener("click", () => {
    let playerChoice = "SCISSORS";
    let computerChoice = getComputerChoice();

    displayPlayerChoice.textContent = playerChoice;
    displayComputerChoice.textContent = computerChoice;

    determineWinner(playerChoice, computerChoice);

    isGameOver();
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

function isGameOver() {
    if (playerScore == 3 || computerScore == 3) {
        displayRound.textContent = "FINAL";
        disableButtons();
        resetStartBtn();
    } else {
        displayRound.textContent = `Round ${currentRound}`;
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled =true;

    rockBtn.style.backgroundColor = "#999999";
    rockBtn.style.color = "#636363";
    paperBtn.style.backgroundColor = "#999999";
    paperBtn.style.color = "#636363";
    scissorsBtn.style.backgroundColor = "#999999";
    scissorsBtn.style.color = "#636363";
}

function resetBtnStyles() {
    rockBtn.style.backgroundColor = rockBtnBackgroundColor;
    rockBtn.style.color = rockBtnColor;

    paperBtn.style.backgroundColor = paperBtnBackgroundColor;
    paperBtn.style.color = paperBtnColor;

    scissorsBtn.style.backgroundColor = scissorsBtnBackgroundColor;
    scissorsBtn.style.color = scissorsBtnColor;
}

function resetStartBtn() {
    startBtn.style.backgroundColor = startBtnBackgroundColor;
    startBtn.style.color = startBtnColor;
    startBtn.textContent = "NEW GAME";
    startBtn.disabled = false;
}

function resetGame() {
    currentRound = 0;
    playerScore = 0;
    computerScore = 0;

    displayRound.textContent = currentRound
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
}