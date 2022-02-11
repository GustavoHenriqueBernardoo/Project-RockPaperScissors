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

// Add class buttons
rockBtn.className = 'rock player-button';
paperBtn.className = 'paper player-button';
scissorBtn.className = 'scissor player-button';

// CSS Properties
messageUI.style.textAlign = 'center';
messageUI.style.color = 'red';
// Text content
rockBtn.textContent = 'Rock';
paperBtn.textContent = 'Paper';
scissorBtn.textContent = 'Scissor';
messageUI.textContent = '';
playerMessageUI.textContent = 'Please choose between Rock, Paper and Scissor'


// Create a div
const div = document.createElement('div');

// Append into the page
div.appendChild(paperBtn);
div.appendChild(rockBtn);
div.appendChild(scissorBtn);
card.insertBefore(messageUI, playerSelectionUI);
playerSelectionUI.appendChild(div);
div.appendChild(playerMessageUI);


// Making the logic of who win
function playRounds(playerSelection, computerSelection){


  if(playerSelection === computerSelection){
      setMessage(`${playerSelection} X ${computerSelection} is a TIE!`)

  }
  if (playerSelection === 'ROCK' && computerSelection === 'PAPER'){
    // cpu++;
    game(false, `${loseToPaper} \n Score: User(${user}) X CPU(${cpu}) \n Rounds Left:${roundLeft}`);
  } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
    // user++;
    game(true, `${wonPaper}`);
  } else if (playerSelection === 'SCISSOR' && computerSelection === 'ROCK'){
    // cpu++;
    game(false, `${loseToRock}`);
  } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSOR'){
    // user++;
    game(true, `${wonRock}`);
  } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSOR'){
    // cpu++;
    game(false, `${loseToScissor}`);
  } else if (playerSelection === 'SCISSOR' && computerSelection === 'PAPER'){
    // user++;
    game(true, `${wonScissor}`);
  } 
}
// test
paperBtn.addEventListener('mousedown', function(){
  gameStart('PAPER')
});
rockBtn.addEventListener('mousedown', function(){
  gameStart('ROCK')
});
scissorBtn.addEventListener('mousedown', function(){
  gameStart('SCISSOR')
});

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
// gameStart
function gameStart(playerSelection){
  computerSelection = computerPlay();
  console.log(playerSelection, computerPlay());
  if(roundLeft > 0){
    playRounds(playerSelection, computerSelection);
  }else if(roundLeft === 0){
    setMessage(`The game finished!`)
  }
  
  
}

// set message
function setMessage(msg){
  messageUI.textContent = msg;
}


// paperBtn.addEventListener('mousedown', function(e){
//   playerSelection = rockPaperScissor[1]
//   console.log(playerSelection)
//   return playerSelection
// })

// Player choosing


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
