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
// console.log(rockPaperScissor);
let numRandom = Math.random(1);
let x = Math.floor(numRandom * rockPaperScissor.length);

function computerPlay(){
  return rockPaperScissor[x]
}
// console.log(computerPlay());

function rounds(playerSelection, computerSelection){
  const loseToPaper = 'You lose! Paper beats Rock';
  const wonPaper = 'You won! Paper beats Rock';
  const loseToRock = 'You lose! Rock beats Scissor';
  const wonRock = 'You won! Rock beats Scissor';
  const loseToScissor = 'You lose! Scissor beats Paper';
  const wonScissor = 'You won! Scissor beats Paper';
  if(playerSelection === 'ROCK' && computerSelection === 'ROCK'){
      console.log('Tie!!!')
  }else if (playerSelection === 'SCISSOR' && computerSelection === 'SCISSOR'){
    console.log('Tie!!!')
  }else if (playerSelection === 'PAPER' && computerSelection === 'PAPER'){
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
  // else {
  //   console.log('You type it something else, please try again.') 
  // }
  // return loseToPaper;

}


function game(){
  for (let i = 1; i <= 5 ; i++){
    const playerSelection = prompt('Choose: Rock, Paper or Scissor'); 
    playerSelectionUpper = playerSelection.toUpperCase();
    const computerSelection = computerPlay();
    console.log('Round:'+ i);
    rounds();
    console.log(rounds(playerSelectionUpper, computerSelection));
    console.log('CPU score:'+ cpu, 'User score:'+ user)
    
  }
}
game();
// if(playerSelectionUpper != rockPaperScissor[0] || playerSelectionUpper !== rockPaperScissor[1] || playerSelectionUpper !== rockPaperScissor[2]){
//   console.log('WTF');
//   continue;
// }
