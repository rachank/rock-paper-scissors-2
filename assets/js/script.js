/*List all constants for DOM elements and game options */

let startImages = document.querySelectorAll(".startimage");
let compPick;

//Variables to track scores
let playerScore = 0;
let computerScore = 0;

//const winnerResult = document.getElementById("winnerResult"); 
//add above to HTML Modal div
const modal = document.getElementsByClassName(".modal")

//Update score display
function updateScore() {
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = compterScore;
}

// GameBoard area - play game

function playGame(e) {
    const pPick = e.target.id;
    findCompPick();
    const checkWinner = findWinner(pPick, compPick);
    console.log(pPick, compPick, checkWinner);
}
// Event Listener for each initial click on start images to play game
startImages.forEach(startimage => startimage.addEventListener('click', playGame));

//Get computer random choice of image for game function
function findCompPick() {
    const randPick = Math.floor(Math.random() * 3) + 1;
    switch (randPick) {
        case 1:
            compPick = "rock";
            break;
        case 2:
            compPick = "paper";
            break;
        case 3:
            compPick = "scissors";
            break;
    }
}
//Get the Winner of the game
let resultText = '';
function findWinner(pPick, compPick) {
    if (pPick === compPick) {
        resultText = "It's a tie!";
        return "It's a tie!";
    } else if (pPick === "rock") {
        if (compPick === "paper") {
            resultText = "Computer wins!";
            computerScore++;
            return "Computer wins!";
     } else {
        resultText = "Player wins!";
        playerScore++;
        return "Player wins!";

     }     
    } else if (pPick === "paper") {
        if (compPick === "scissors") {
            resultText = "Computer Wins!";
            computerScore++;
            return "Computer wins!";
        } else {
            resultText = "Player wins!";
            playerScore++;
            return "Player wins!";
        }
    } else if (pPick === "scissors") {
        if (compPick === "rock") {
            resultText = "Computer wins!";
            computerScore++;
            return "Computer wins!";
        } else {
            resultText = "Player wins!";
            playerScore++;
            return "Player wins!";
        }
    }
}

// Update the score display
updateScore();

// Display the player choice image, computer choice image 


