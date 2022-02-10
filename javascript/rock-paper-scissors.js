// My game is going to play against a computer.
// The computer has to randomly choose between rock, paper or scissors
// And the player choose, after the two sides pick their option, compare who won and show a message

/* 
1 - computer select 
2 - user select
3 - if statement to compare and see who won
  3.1 -  if user = rock and computer = paper: Computer won
    put +1 score to CPU
  3.2 -  if user = rock and computer = scissor: user won
    put +1 score to user
  3.3 -  if user = paper and computer = scissor: computer won
    put +1 score to CPU

4 - display who won
5 - repeat the process in total five times
*/


const rockPaperScissor = ['ROCK', 'PAPER', 'SCISSOR'];
let cpu = 0;
let user = 0;

// Setting a random number to the computer
let numRandom = Math.random(1);
let x = Math.floor(numRandom * rockPaperScissor.length);

function computerPlay(){
  return rockPaperScissor[x]
}

// Win or Lose variables
const loseToPaper = 'You lose! Paper beats Rock',
      wonPaper = 'You won! Paper beats Rock',
      loseToRock = 'You lose! Rock beats Scissor',
      wonRock = 'You won! Rock beats Scissor',
      loseToScissor = 'You lose! Scissor beats Paper',
      wonScissor = 'You won! Scissor beats Paper';

function rounds(playerSelection, computerSelection){
  
  if(playerSelection === computerSelection  ){
      console.log('Tie!!!')
  }
  if (playerSelection === 'ROCK' && computerSelection === 'PAPER'){
    cpu++;
    return loseToPaper;
  } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
    user++;
    return wonPaper;
  } else if (playerSelection === 'SCISSOR' && computerSelection === 'ROCK'){
    cpu++;
    return loseToRock;
  } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSOR'){
    user++;
    return wonRock;
  } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSOR'){
    cpu++;
    return loseToScissor;
  } else if (playerSelection === 'SCISSOR' && computerSelection === 'PAPER'){
    user++;
    return wonScissor;
  } 
}

// Buttons and Selectors
const paperBtn = document.createElement('button'),
      rockBtn = document.createElement('button'),
      scissorBtn = document.createElement('button'),
      body = document.querySelector('body'),
      messageUI = document.createElement('p'),
      playerSelectionUI = document.querySelector('#player-selector');

// Add class buttons
paperBtn.className = 'paper player-button';
rockBtn.className = 'rock player-button';
scissorBtn.className = 'scissor player-button';
paperBtn.textContent = 'Paper';
rockBtn.textContent = 'Rock';
scissorBtn.textContent = 'Scissor';

// Create a div
const div = document.createElement('div');

// Append into the page
div.appendChild(paperBtn);
div.appendChild(rockBtn);
div.appendChild(scissorBtn);
console.log(messageUI)
console.log(playerSelectionUI)
// playerSelectionUI.appendChild(div);



// function game(){
//   for (let i = 1; i <= 5 ; i++){
//     const playerSelection = prompt('Choose: Rock, Paper or Scissor'); 
//     playerSelectionUpper = playerSelection.toUpperCase();
//     const computerSelection = computerPlay();
//     console.log('Round:'+ i);
//     rounds();
//     console.log(rounds(playerSelectionUpper, computerSelection));
//     console.log('CPU score:'+ cpu, 'User score:'+ user)
    
//   }
// }
// game();
// if(playerSelectionUpper != rockPaperScissor[0] || playerSelectionUpper !== rockPaperScissor[1] || playerSelectionUpper !== rockPaperScissor[2]){
//   console.log('WTF');
//   continue;
// }
