let choices =['Rock','Paper','Scissors'];


// function for choosing computer playing moves

function computerPlay() {
    let n = Math.floor(Math.random() * 3);
    let move = choices[n];
    
    const choice = document.querySelector('.compChoice');
    choice.textContent = `The Computer chose ${move}`;
    return move;
}

// function for playing one singular round

let playerScore = 0;
let compScore =0;


function playRound(playerMove) {
    
    let computerSelection = computerPlay().toLowerCase();
    let playerSelection = playerMove.toLowerCase();
    const round = document.querySelector('.round');

    switch (playerSelection) {

        case 'rock':
            if (playerSelection == computerSelection) {
                round.textContent = 'its a tie!';
                break;
            } else if (playerSelection == 'rock' && computerSelection == 'paper') {
                ++compScore;
                round.textContent = 'You Lose! Paper beats Rock!';
                break;
            } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
                ++playerScore;
                round.textContent = 'You Win! Rock beats Scissors!';
                break;
            }
        
        case 'paper':
            if (playerSelection == computerSelection) {
                round.textContent = 'its a tie!';
                break;
            } else if (playerSelection == 'paper' && computerSelection == 'rock') {
                ++playerScore;
                round.textContent = 'You Win! Paper beats Rock!';
                break;
            } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
                ++compScore;
                round.textContent = 'You Lose! Scissors beats Paper!';
                break;
            }
        
        case 'scissors':
            if (playerSelection == computerSelection) {
                round.textContent = 'its a tie!';
                break;
            } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
                ++playerScore;
                round.textContent = 'You Win! Scissors beats Paper!';
                break;
            } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
                ++compScore;
                round.textContent = 'You Lose! Rock beats Scissors!';
                break;
            }
    }

    updateScore();
            
}

// function for updating the score after every round

function updateScore() {
    
    const playerResult = document.querySelector('.player');
    const compResult = document.querySelector('.comp');
    const finalResult = document.querySelector('.finalResult');
    const restart = document.querySelector('.restart');

    playerResult.textContent = `Player Score is ${playerScore}`;
    compResult.textContent = `Computer Score is ${compScore}`;
    
    if (playerScore == 5 || compScore == 5) {
        if (playerScore > compScore) {
            finalResult.textContent = "HUZZA! THE PLAYER WON!!";
            restart.textContent = 'Refresh to restart the game!';
        } else if (playerScore < compScore) {
            finalResult.textContent = "AW SHUCKS! OUR COMPUTER OVERLORD HAS EMERGED VICTORIOUS!!";
            restart.textContent = 'Refresh to restart the game!';
        } else {
            finalResult.textContent = "THE GAME IS TIED!!";
            restart.textContent = 'Refresh to restart the game!';
        } 
    }
}

// Event listeners to respond to events (player moves) 

const rock = document.querySelector('.Rock');
const playerChoice = document.querySelector('.playerChoice');

rock.addEventListener('click', () => { playRound('rock');} );
rock.addEventListener('click', () => {
    playerChoice.textContent = 'You chose Rock!';
});

const paper = document.querySelector('.Paper');
paper.addEventListener('click', () => { playRound('paper');} );
paper.addEventListener('click', () => {
    playerChoice.textContent = 'You chose Paper!';
});

const scissors = document.querySelector('.Scissors');
scissors.addEventListener('click', () => { playRound('scissors');} );
scissors.addEventListener('click', () => {
    playerChoice.textContent = 'You chose Scissors!';
});