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
    const playerInput = input.toLowerCase();
    return playerInput
}

function playRound() {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();

    if ((playerSelection === 'rock' && computerSelection === 'scissors')
     || (playerSelection === 'scissors' && computerSelection === 'paper')
     || (playerSelection === 'paper' && computerSelection === 'rock')) {
        result = 'You win, ' + playerSelection + ' beats ' + computerSelection;
    }

    else if ((playerSelection === 'rock' && computerSelection === 'paper')
    || (playerSelection === 'scissors' && computerSelection === 'rock') 
    || (playerSelection === 'paper' && computerSelection === 'scissors')) {
        result = 'You lose, ' + computerSelection + ' beats ' + playerSelection;
    }

    else if (playerSelection ===  computerSelection) {
        result = 'Draw, both players chose ' + playerSelection;
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
    let round = 5;

    for (var i=0; i<round; i++) {
        playRound();

        if (result.includes('win')) {
            ++playerPoints;
        }
        else if (result.includes('lose')) {
            ++computerPoints;
        }

        else if (result.includes('unexpected')) {
            ++round;
        }

        console.log('Your score: ' + playerPoints, '\nComputers score: ' + computerPoints)
    }
    
    let finalResult;

        if (playerPoints > computerPoints) {
            finalResult = 'You Won the game! ' +  '\nYour score: ' + playerPoints + '\nComputers score: ' + computerPoints;
        }

        else if (playerPoints < computerPoints) {
            finalResult = 'You Lost the game! ' +  '\nYour score: ' + playerPoints + '\nComputers score: ' + computerPoints;
        }

        else {
            finalResult = 'You drew the game!  ' +  '\nYour score: ' + playerPoints + '\nComputers score: ' + computerPoints;
        }
    
    return finalResult;
}

console.log(game())