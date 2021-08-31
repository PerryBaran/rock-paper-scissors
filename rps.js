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

console.log(computerPlay());