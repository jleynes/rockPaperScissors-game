// Creating the variables
// let computerSelection = "";
// let playerSelection = "";
let gameSelection = ["rock", "paper", "scissors"];

// Initial game function
function computerPlay() {
  // Finds a random number to return random selection from gameSelection array
  let random = Math.floor(Math.random() * 3);

  return gameSelection[random];
}

// Game round function
function playRound(playerSelection, computerSelection) {
  // Changes all inputs of playerSelection to lower case
  let player = playerSelection.toLowerCase();

  //if statements to see who wins
  if (computerSelection === player) {
    return "It's a tie!";
  } else if (computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (computerSelection === "scissors") {
    return "You Win! Rock bests Scissors"
  } else {
    return "Not a valid input."
  }
}

// Game function to play 5 games
function game() {
  for (let i = 0; i <= 4; i++) {
    console.log(playRound(playerSelection, computerPlay()));
  }
}

const playerSelection = "rock";
// const computerSelection = computerPlay();
