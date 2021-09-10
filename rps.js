let playerPoints = 0;
let computerPoints = 0;

const buttons = document.querySelectorAll('button');
const playerChoice = document.querySelector('#PlayerChoice');
const computerChoice= document.querySelector('#ComputerChoice');
const playerScore = document.querySelector('#PlayerScore');
const computerScore = document.querySelector('#ComputerScore');
const winLose = document.querySelector('#WinLose');

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

function playersImage(choice) {
    var playersImg = new Image();

    if (choice === 'rock') {
        playersImg.src = 'rpsimages/Rock.png';
        document.getElementById('PlayerChoice').appendChild(playersImg);
    }
    else if (choice === 'paper') {
        playersImg.src = 'rpsimages/Paper.png';
        document.getElementById('PlayerChoice').appendChild(playersImg);
    }
    else if (choice === 'scissors') {
        playersImg.src = 'rpsimages/Scissors.png';
        document.getElementById('PlayerChoice').appendChild(playersImg);
    }
};

function computerImage(computerSelection) {
    var computersImg = new Image();
    
    if (computerSelection === 'rock') {
        computersImg.src = 'rpsimages/Rock.png';
        document.getElementById('ComputerChoice').appendChild(computersImg);
    }
    else if (computerSelection === 'paper') {
        computersImg.src = 'rpsimages/Paper.png';
        document.getElementById('ComputerChoice').appendChild(computersImg);
    }
    else if (computerSelection === 'scissors') {
        computersImg.src = 'rpsimages/Scissors.png';
        document.getElementById('ComputerChoice').appendChild(computersImg);
    }

    computersImg.classList.add('flip');
};

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    computerImage(computerSelection);
    

    if ((playerSelection === 'rock' && computerSelection === 'scissors')
     || (playerSelection === 'scissors' && computerSelection === 'paper')
     || (playerSelection === 'paper' && computerSelection === 'rock')) {

        ++playerPoints;
        playerScore.innerHTML = playerPoints;
        playerScore.style.backgroundColor = 'chartreuse';
        computerScore.style.backgroundColor = '#45e9ff';
    }
    else if ((playerSelection === 'rock' && computerSelection=== 'paper')
    || (playerSelection === 'scissors' && computerSelection === 'rock') 
    || (playerSelection === 'paper' && computerSelection === 'scissors')) {

        ++computerPoints
        computerScore.innerHTML = computerPoints;
        computerScore.style.backgroundColor = 'chartreuse';
        playerScore.style.backgroundColor = '#45e9ff';
    }
    else {
        computerScore.style.backgroundColor = '#45e9ff';
        playerScore.style.backgroundColor = '#45e9ff';
    }
}

function resetCounter() {
    
    if (playerPoints === 0 && computerPoints == 0) {
    playerScore.innerHTML = '0';
    computerScore.innerHTML = '0';
    winLose.innerHTML = ' ';
    }
}

function playGame(playerSelection) {
    resetCounter();
    playRound(playerSelection);

    if (playerPoints === 5) {
        winLose.innerHTML = 'YOU WIN!';
        playerPoints = 0;
        computerPoints = 0;
    }
    else if (computerPoints === 5) {
        winLose.innerHTML = 'YOU LOSE!';
        playerPoints = 0;
        computerPoints = 0;
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playGame(button.id);

    

        var element = document.querySelector('img');
	    element.parentNode.removeChild(element);
        var element = document.querySelector('img');
	    element.parentNode.removeChild(element);

        playersImage(button.id);
    });
});