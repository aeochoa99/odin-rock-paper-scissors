const choices = ["rock", "paper", "scissors"];

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