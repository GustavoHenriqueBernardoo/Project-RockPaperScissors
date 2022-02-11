/* 

GAME FUNCTION:
- make the player select between rock, paper, and scissor
- the CPU choose randomly
- after the player select, show in the screen what he chooses, and what CPU choose
- show who Won and who loses
- show the score of each player
- show the round count
- if is a tie, do not count that round
- The max number of rounds is 5
- The first player that reaches 3 victories, won the game

*/

// Define Vars
const rockPaperScissor = ['ROCK', 'PAPER', 'SCISSOR'];
let cpu = 0;
let user = 0;
let roundLeft = 5;

// Setting a random number to the computer
function computerPlay(){
  let numRandom = Math.random();
  let x = Math.floor(numRandom * rockPaperScissor.length);
  return rockPaperScissor[x]
}

// Win or Lose variables
const loseToPaper = 'You lose! Paper beats Rock',
      wonPaper = 'You won! Paper beats Rock',
      loseToRock = 'You lose! Rock beats Scissor',
      wonRock = 'You won! Rock beats Scissor',
      loseToScissor = 'You lose! Scissor beats Paper',
      wonScissor = 'You won! Scissor beats Paper';

// Define UI Vars
const rockBtn = document.createElement('button'),
paperBtn = document.createElement('button'),
scissorBtn = document.createElement('button'),
container = document.querySelector('.container')
card = document.querySelector('.card'),
playerSelectionUI = document.querySelector('#player'),
body = document.querySelector('body'),
messageUI = document.createElement('p');
playerMessageUI = document.createElement('p')
playAgain = document.createElement('button')

// Add class buttons
rockBtn.className = 'rock player-button';
paperBtn.className = 'paper player-button';
scissorBtn.className = 'scissor player-button';
playAgain.className = 'player-button'
messageUI.className = 'messageUI'

// CSS Properties
messageUI.style.textAlign = 'center';
messageUI.style.color = 'red';
playAgain.style.display = 'none';
// Text content
rockBtn.textContent = 'Rock';
paperBtn.textContent = 'Paper';
scissorBtn.textContent = 'Scissor';
playAgain.textContent = 'Play Again';
messageUI.textContent = '';
playerMessageUI.textContent = 'Please choose between Paper, Rock and Scissor'


// Create a div
const div = document.createElement('div');

// Append into the page
div.appendChild(paperBtn);
div.appendChild(rockBtn);
div.appendChild(scissorBtn);
div.appendChild(playAgain);
card.insertBefore(messageUI, playerSelectionUI);
playerSelectionUI.appendChild(div);
div.appendChild(playerMessageUI);


// Making the logic of who win
function playRounds(playerSelection, computerSelection){


  if(playerSelection === computerSelection){
      setMessage(`${playerSelection} X ${computerSelection} is a TIE!`)

  }
  if (playerSelection === 'ROCK' && computerSelection === 'PAPER'){
    
    game(false, 
    `${loseToPaper}
    Score: User(${user}) X CPU(${cpu})
    Rounds Left:${roundLeft}`);

  } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
    // user++;
    game(true, `${wonPaper}
    Score: User(${user}) X CPU(${cpu})
    Rounds Left:${roundLeft}`);
  } else if (playerSelection === 'SCISSOR' && computerSelection === 'ROCK'){
    // cpu++;
    game(false, `${loseToRock}
    Score: User(${user}) X CPU(${cpu})
    Rounds Left:${roundLeft}`);
  } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSOR'){
    // user++;
    game(true, `${wonRock}
    Score: User(${user}) X CPU(${cpu})
    Rounds Left:${roundLeft}`);
  } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSOR'){
    // cpu++;
    game(false, `${loseToScissor}
    Score: User(${user}) X CPU(${cpu})
    Rounds Left:${roundLeft}`);
  } else if (playerSelection === 'SCISSOR' && computerSelection === 'PAPER'){
    // user++;
    game(true, `${wonScissor}
    Score: User(${user}) X CPU(${cpu})
    Rounds Left:${roundLeft}`);
  } 
}
// Event Listeners
paperBtn.addEventListener('mousedown', function(){
  gameStart('PAPER')
});
rockBtn.addEventListener('mousedown', function(){
  gameStart('ROCK')
});
scissorBtn.addEventListener('mousedown', function(){
  gameStart('SCISSOR')
});
// Play again Event Listener
playAgain.addEventListener('click', function(){
  window.location.reload();
})

// set a game function
function game (win, msg){

  if (win === true){
    user++
    roundLeft--
    console.log(`Score: User(${user}) X CPU(${cpu})`)
  }else{
    cpu++
    roundLeft--
    console.log(`Score: User(${user}) X CPU(${cpu})`)
  }
  //set message
  setMessage(msg)
}

// gameStart function
function gameStart(playerSelection){
  computerSelection = computerPlay();
  console.log(playerSelection, computerPlay());
  if(roundLeft > 0){
    playRounds(playerSelection, computerSelection);
  }else if(roundLeft === 0){
    if(user > cpu){
      setMessage(`The game finished! Congratulations!!! YOU WON
      ||CPU:${cpu}||User:${user}`)

      // removing the buttons
      paperBtn.style.display = 'none';
      rockBtn.style.display = 'none';
      scissorBtn.style.display = 'none';
      // Option to play again
      playAgain.style.display = 'inline-block'
      // Change the message to user play again
      playerMessageUI.textContent = 'Wanna play again?'


    }else{
      setMessage(`The game finished! CPU WON
      ||CPU:${cpu}||User:${user}`)

      // removing the buttons
      paperBtn.style.display = 'none';
      rockBtn.style.display = 'none';
      scissorBtn.style.display = 'none';
      // Option to play again
      playAgain.style.display = 'inline-block'
      // Change the message to user play again
      playerMessageUI.textContent = 'Wanna play again?'

    }
  }
}
// set message
function setMessage(msg){
  messageUI.textContent = msg;
}
