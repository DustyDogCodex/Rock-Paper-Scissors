let choices =['Rock','Paper','Scissors'];

function computerPlay() {
    let n = Math.floor(Math.random() * 3);
    let move = choices[n];
    console.log(move);
    return move;
}

// function for playing a round

let playerScore = 0;
let compScore =0;

function playRound() {
    
    let playerMove = prompt('What is your choice of weapon?');
    let computerSelection = computerPlay().toLowerCase();
    let playerSelection = playerMove.toLowerCase();

    switch (playerSelection) {

        case 'rock':
            if (playerSelection == computerSelection) {
                return ('its a tie!');
            } else if (playerSelection == 'rock' && computerSelection == 'paper') {
                ++compScore;
                return ('You Lose! Paper beats Rock!');
            } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
                ++playerScore;
                return ('You Win! Rock beats Scissors!');
            }
        
        case 'paper':
            if (playerSelection == computerSelection) {
                return ('its a tie!');
            } else if (playerSelection == 'paper' && computerSelection == 'rock') {
                ++playerScore;
                return ('You Win! Paper beats Rock!');
            } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
                ++compScore;
                return ('You Lose! Scissors beats Paper!');
            }
        
        case 'scissors':
            if (playerSelection == computerSelection) {
                return ('its a tie!');
            } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
                ++playerScore;
                return ('You Win! Scissors beats Paper!');
            } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
                ++compScore;
                return ('You Lose! Rock beats Scissors!');
            }
    }        
}

function game () {
    

    while (playerScore < 5 && compScore < 5) {
        
        console.log(playRound());

        console.log('Player Score is ' + playerScore);
        console.log('Computer Score is ' + compScore);
        
    }

    

    if (playerScore > compScore) {
        console.log("HUZZA! THE PLAYER WON!!");
    } else if (playerScore < compScore) {
        console.log("AW SHUCKS! OUR COMPUTER OVERLORD HAS EMERGED VICTORIOUS!!");
    } else {
        console.log("THE GAME IS TIED!!");
    }
}

console.log(game());
