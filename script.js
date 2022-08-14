let computerSelection;
let trackp = 0;
let trackc = 0;

function getComputerChoice () {
    let choice = Math.floor(Math.random()*3);
    if (choice === 0) {
        computerSelectionTranslated = "rock";
    } else if (choice === 1) {
        computerSelectionTranslated = "paper"
    } else {
        computerSelectionTranslated = "scissors"
    }
    return choice;
}

function capitalize(string){
    string = string.trim();
    string = string.toLowerCase();
    return string.replace(/^\w/, (c) => c.toUpperCase());
}

function play (playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    let playerChoice = 0;
    if (playerSelection === "rock") {
        //default
    } else if (playerSelection === "paper") {
        playerChoice = 1;
    } else if (playerSelection === "scissors") {
        playerChoice = 2;
    } else {
        return "You did not enter a valid choice. Please try again."
    }

    if (playerChoice===computerSelection) {
        return "You tied! " + capitalize(playerSelection) + " meets " + capitalize(computerSelectionTranslated) + ".";
    } else if (playerChoice - computerSelection === -1 || playerChoice - computerSelection === 2) {
        trackc++;
        return "You lose! " + capitalize(computerSelectionTranslated) + " beats " + capitalize(playerSelection) + ".";
    } else {
        trackp++;
        return "You win! " + capitalize(playerSelection) + " beats " + capitalize(computerSelectionTranslated) + ".";
    }
}

function game (){
    for (let i = 0; i < 5; i++) {
        console.log(play(prompt("Enter rock, paper, or scissors: "),getComputerChoice()));
    }
    if (trackp>trackc) {
        console.log("You won the game with " + trackp + " wins.");
    } else if (trackc>trackp) {
        console.log("You lost the game. The computer had " + trackc + " wins.");
    } else {
        console.log("You tied the game.");
    }
}

game();