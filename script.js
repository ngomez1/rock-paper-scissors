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

function play (e) { 
    playerSelection = this.classList.value;
    computerSelection = getComputerChoice();

    this.classList.add('selected');

    let playerChoice = 0;
    if (playerSelection === "rock") {
        //default
    } else if (playerSelection === "paper") {
        playerChoice = 1;
    } else if (playerSelection === "scissors") {
        playerChoice = 2;
    }

    if (playerChoice===computerSelection) {
        div.textContent = "You tied! " + capitalize(playerSelection) + " meets " + capitalize(computerSelectionTranslated) + ".";
    } else if (playerChoice - computerSelection === -1 || playerChoice - computerSelection === 2) {
        trackc++;
        div.textContent = "You lose! " + capitalize(computerSelectionTranslated) + " beats " + capitalize(playerSelection) + ".";
    } else {
        trackp++;
        div.textContent = "You win! " + capitalize(playerSelection) + " beats " + capitalize(computerSelectionTranslated) + ".";
    }

    divCW.textContent = "Computer's score: " + trackc;
    divPW.textContent = "Player's score: " + trackp;

    if (trackp === 5) {
        div.textContent = "Click a button to begin the game."
        divGame.textContent = "Victory";
        divGame.style.color = "blue";
        trackp = 0;
        trackc = 0;
    } else if (trackc === 5) {
        div.textContent = "Click a button to begin the game."
        divGame.textContent = "Defeat";
        divGame.style.color = "red";
        trackp = 0;
        trackc = 0;
    } else {
        divGame.textContent = "Beat the computer to 5 wins to claim victory!";
        divGame.style.color = "white";
    }
}

const btns = document.querySelectorAll("button");
div = document.querySelector(".outcome");
btns.forEach(button => button.addEventListener('click',play));
btns.forEach(button => button.addEventListener('transitionend', removeTransition));

divCW = document.querySelector(".computerWins");
divPW = document.querySelector(".playerWins");
divGame = document.querySelector(".game");

function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip if event is not a transform
    this.classList.remove('selected'); //remove class from the button (this)
  }