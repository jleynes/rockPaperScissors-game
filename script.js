// Creating the variables
let computerSelection = "";
let playerSelection = "";
let gameSelection = ["rock", "paper", "scissors"];

let computerPoints = 0;
let playerPoints = 0;

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
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return "You Lose! Paper beats Rock";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    return "You Win! Rock beats Scissors";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return "You Lose! Rock beats Scissors";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    return "You Win! Scissors beats Paper"
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    return "You Win! Paper beats Rock";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return "You Lose! Scissors beats Paper";
  } else {
    return "Not a valid input."
  }
}

// Game function to play 5 games
function game() {
  playerSelection = window.prompt("What is your selection? (Rock, Paper, or Scissors?)");

  // for (let i = 0; i <= 4; i++) {
  //   console.log(playRound(playerSelection, computerPlay()));
  // }
}

// DOM selector for buttons
const buttons = document.querySelectorAll('button');

// Applies an eventListener to each button which calls the playRound function with clicked button value
buttons.forEach((button) => {
    button.addEventListener('click', function() {

      playerSelection = button.value;

      console.log(playRound(playerSelection, computerPlay()));
    });
});
