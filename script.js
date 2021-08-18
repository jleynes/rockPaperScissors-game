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

  //if statements to see who wins and adds score to total
  if (computerSelection === player) {
    return "It's a tie!";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    computerPoints++;
    return "You Lose! Paper beats Rock";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    playerPoints++;
    return "You Win! Rock beats Scissors";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    computerPoints++;
    return "You Lose! Rock beats Scissors";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    playerPoints++;
    return "You Win! Scissors beats Paper"
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    playerPoints++;
    return "You Win! Paper beats Rock";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerPoints++;
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

function resetGame() {
  playerPoints = 0;
  computerPoints = 0;
}

// DOM selector for buttons
const buttons = document.querySelectorAll('button');

// Applies an eventListener to each button which calls the playRound function with clicked button value
buttons.forEach((button) => {
      button.addEventListener('click', function() {

        // sets playerSelection to button value
        playerSelection = button.value;

        // if statement to check if score is less than 5
        if (computerPoints <= 5 || playerPoints <= 5) {
          document.querySelector('#gameResult').innerText = playRound(playerSelection, computerPlay());

          document.querySelector('#computerScore').innerText = "Computer Score: " + computerPoints;
          document.querySelector('#playerScore').innerText = "Player Score: " + playerPoints;

          // if statements to remove eventListener from buttons and resets game
          if ((computerPoints > playerPoints) && computerPoints == 5) {
            document.querySelector('#gameResult').innerText = "The computer wins!";
            button.removeEventListener('click', resetGame());
            }
          if ((computerPoints < playerPoints) && playerPoints == 5) {
            document.querySelector('#gameResult').innerText = "You win!";
            button.removeEventListener('click', resetGame());
          }
        } else {
          resetGame();
        }
      });
    });
