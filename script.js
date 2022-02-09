let choices =['Rock','Paper','Scissors'];

function computerPlay() {
    let n = Math.floor(Math.random() * 3);
    let move = choices[n];
    console.log(n);
    console.log(move);
    return move;
}
computerPlay()

let playerMove = 'rock';

let computerSelection = computerPlay().toLowerCase();
let playerSelection = playerMove.toLowerCase();

function playRound(playerSelection,computerSelection) {
    
    switch (playerSelection) {

        case 'rock':
            if (playerSelection == computerSelection) {
                console.log('its a tie!');
            } else if (playerSelection == 'rock' && computerSelection == 'paper') {
                console.log('You lose! Paper beats Rock!');
            } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
                console.log('You win! Rock beats Scissors!')
            }
        
        case 'paper':
            if (playerSelection == computerSelection) {
                console.log('its a tie!');
            } else if (playerSelection == 'paper' && computerSelection == 'rock') {
                console.log('You Win! Paper beats Rock!');
            } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
                console.log('You lose! Scissors beats Paper!')
            }
        
        case 'scissors':
            if (playerSelection == computerSelection) {
                console.log('its a tie!');
            } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
                console.log('You Win! Scissors beats Paper!');
            } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
                console.log('You Lose! Rock beats Scissors!')
            }
    }        
}

playRound(playerSelection,computerSelection)