// My game is going to play against a computer.
// The computer has to randomly choose between rock, paper or scissors
// And the player choose, after the two sides pick their option, compare who won and show a message

/* 
1 - computer select 
2 - user select
3 - if statement to compare and see who won
  3.1 -  if user = rock and computer = paper: Computer won
  3.2 -  if user = rock and computer = scissor: user won
  3.3 -  if user = paper and computer = scissor: computer won

4 - display who won
5 - repeat the process in total five times
*/


const rockPaperScissor = ['Rock', 'Paper', 'Scissor'];
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
  switch(playerSelection, computerSelection){
    case playerSelection === 'Rock' && computerSelection === 'Rock':
      console.log('Tie!!!')
      break;
    case playerSelection === 'Scissor' && computerSelection === 'Scissor':
      console.log('Tie!!!')
      break;
    case playerSelection === 'Paper' && computerSelection === 'Paper':
      console.log('Tie!!!')
      break;
    default:
      console.log('WTF')
      break;
  }
  if (playerSelection === 'Rock' && computerSelection === 'Paper'){
      return loseToPaper;
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
    return wonPaper;
  } else if (playerSelection === 'Scissor' && computerSelection === 'Rock'){
  return loseToRock;
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissor'){
    return wonRock;
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissor'){
    return loseToScissor;
  } else if (playerSelection === 'Scissor' && computerSelection === 'Paper'){
    return wonScissor;
  }
  // return loseToPaper;

}

const playerSelection = 'Rock' /* prompt('Choose: Rock, Paper or Scissor'); */
const computerSelection = computerPlay();

console.log(rounds(playerSelection, computerSelection));

function game(){
  for (let i = 0; i <= 5 ; i++){

    rounds();
    console.log(i);
  }
}
// game();

// function computerPlay(){
//   return console.log(rockPaperScissor.mathrandom());
// }

// computerPlay();