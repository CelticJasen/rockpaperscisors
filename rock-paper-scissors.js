const container = document.querySelector(".container");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const playerScoreDisplay = document.querySelector(".playerScore");
const computerScoreDisplay = document.querySelector(".computerScore");
const infoDisplay = document.querySelector(".info");
const grandWinnerDisplay = document.querySelector(".grandWinner");
const playAgainButton = document.querySelector("#playAgainButton");

let playerScore = 0;
let computerScore = 0;

playAgainButton.style.visibility = "hidden";

playAgainButton.addEventListener("click", function(){ reset(); });
rockButton.addEventListener("click", function(){ playRPS('rock', computerPlay()); });
paperButton.addEventListener("click", function(){ playRPS('paper', computerPlay()); });
scissorsButton.addEventListener("click", function(){ playRPS('scissors', computerPlay());} );

//reset the game to play again
function reset(){
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.innerText = `${playerScore}`;
  computerScoreDisplay.innerText = `${computerScore}`;
  grandWinnerDisplay.innerText = "First to 5 wins!";
  infoDisplay.innerText = "Choose Rock, Paper, or Scissors...";
  playAgainButton.style.visibility = "hidden";
}

//Return a string 'rock' or 'paper' or 'scissors' at random
function computerPlay(){
    let randomNumber = Math.random();

    if(randomNumber < 1/3){
        return 'Rock';
    }else if(randomNumber < 2/3 && randomNumber > 1/3){
        return 'Paper';
    }else{
        return 'Scissors';
    }
}

//Calculate the winner of the round and return a string stating who won
function playRPS(playerSelection, computerSelection){
    if(playerScore == 5 || computerScore == 5){
      return;
    }

    if((playerSelection.toLowerCase() == 'rock' && computerSelection == 'Paper') || (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors') || (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Rock')){
        infoDisplay.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        computerScoreDisplay.innerText = `${computerScore}`;
    }else if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        infoDisplay.innerText = 'It\'s a draw!';
    }else{
        infoDisplay.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        playerScoreDisplay.innerText = `${playerScore}`;
    }

    if(playerScore == 5){
      grandWinnerDisplay.innerText = "You're the winner!";
      playAgainButton.style.visibility = "visible";
    }else if(computerScore == 5){
      grandWinnerDisplay.innerText = "Computer is the winner!";
      playAgainButton.style.visibility = "visible";
    }
}
