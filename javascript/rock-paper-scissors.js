// My game is going to play against a computer.
// The computer has to randomly choose between rock, paper or scissors
// And the player choose, after the two sides pick their option, compare who won and show a message


const rockPaperScissor = ['Rock', 'Paper', 'Scissor'];
console.log(rockPaperScissor);
let numRandom = Math.random(1);
let x = Math.floor(numRandom * rockPaperScissor.length);


// let numFloor = Math.floor(numRandom);
console.log(x);



// function computerPlay(){
//   return console.log(rockPaperScissor.mathrandom());
// }

// computerPlay();