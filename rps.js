function computerPlay() {
    let computerChoice = Math.floor(Math.random()*100); 
    
        if (computerChoice <= 33) {
            return 'rock';
        }
    
        else if (computerChoice > 66) {
            return 'scissors';
        }
    
        else {
            return 'paper';
        }
}

let playerPlay = prompt("Rock, Paper, Scissors?");
let playerChoice = playerPlay.toLowerCase();

const playerSelection = playerChoice;
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats scissors'
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats paper'
    }

    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats rock'
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats rock'
    }

    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats scissors'
    }

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats paper'
    }

    else if (playerSelection === 'rock' && computerSelection === 'rock' || playerSelection === 'paper' && computerSelection === 'paper' || playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Draw!'
    }

    else {
        return 'unexpected input'
    }

}

console.log (playRound(playerSelection, computerSelection))