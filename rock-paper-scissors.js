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

    if(playerSelection === null){
        return;
    }

    if(playerSelection.toLowerCase() != 'rock'){
        if(playerSelection.toLowerCase() != 'paper'){
            if(playerSelection.toLowerCase() != 'scissors'){
                return `"${playerSelection}" is not a proper choice! You lose this round!`;
            }
        }
    }

    if((playerSelection.toLowerCase() == 'rock' && computerSelection == 'Paper') || (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors') || (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Rock')){
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }else if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return 'It\'s a draw!';
    }else{
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

//Plays rock paper scissors for 5 rounds, keeps score and declares the winner at the end then asks if the player wants to play again.
function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        let outcome = playRPS(prompt('Type "Rock", "Paper", or "Scissors"'), computerPlay());

        if(outcome === undefined){
            console.log("Ok, we don't have to play if you don't want to...")
            return;
        }

        if(outcome.includes('win')){
            playerScore++;
        }else if(outcome.includes('lose')){
            computerScore++;
        }

        console.log(outcome);
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
    }

    if(playerScore > computerScore){
        console.log('You won the whole game!');
    }else if(playerScore < computerScore){
        console.log('You lost the game!');
    }else{
        console.log('Tie! Everyone wins!');
    }

    let again = prompt('Want to play again?');

    if(again !== null && again.toLowerCase() == 'yes'){
        game();
    }
}

game();