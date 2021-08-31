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

function playerPlay() {
    let input = prompt("Rock, Paper, Scissors?");
    const playerInput= input.toLowerCase();
    return playerInput
}

function playRound() {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    let result;

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = 'You Win! Rock beats scissors'
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = 'You Win! Scissors beats paper'
    }

    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result = 'You Win! Paper beats rock'
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        result = 'You Lose! Paper beats rock'
    }

    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result = 'You Lose! Rock beats scissors'
    }

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result = 'You Lose! Scissors beats paper'
    }

    else if (playerSelection ===  computerSelection) {
        result = 'Draw!' 
    }

    else {
        result = 'unexpected input'
    }

    console.log(result);

    return result;
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    for (let round=0; round<5; round++) {
        if (playRound().includes("You Win")) {
            playerPoints++;
            round++;
        }
        else if (playRound().includes("You Lose")) {
            computerPoints++;
            round++;
        }
        
        else {
            round++;
        }
    }
    
    let finalResult;

        if (playerPoints > computerPoints) {
            finalResult = 'You Won the game!';
        }

        else if (playerPoints < computerPoints) {
            finalResult = 'You Lost the game!';
        }

        else if (playerPoints === computerPoints) {
            finalResult = 'You drew the game!';
        }
    
    return finalResult;
}

console.log(game())