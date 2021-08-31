function computerPlay() {
    let computerChoice = Math.floor(Math.random()*100); 
    
        if (computerChoice <= 33) {
            return 'Rock';
        }
    
        else if (computerChoice > 66) {
            return 'Scissors';
        }
    
        else {
            return 'Paper';
        }
}

let playerPlay = prompt("Rock, Paper, Scissors?");
let playerChoice = playerPlay.toLowerCase();

console.log(playerChoice);