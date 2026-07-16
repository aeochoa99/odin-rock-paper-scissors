const choices = ["rock", "paper", "scissors"];
const startBtn = document.querySelector("#start");

let computerScore = 0;
let playerScore = 0;
let currentRound = 0;

let displayRound = document.querySelector("#round");
let displayPlayerChoice = document.querySelector(".results > :first-child");
let displayComputerChoice = document.querySelector(".results > :last-child");


startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    startBtn.style.backgroundColor = "#999999";
    startBtn.style.color = "#636363";

    displayPlayerChoice.textContent = "Make your choice!";
    displayComputerChoice.textContent = "Bring it on!";

    currentRound++;
    displayRound.textContent = displayRound.textContent + ` ${currentRound}`;
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

function playGame() {
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