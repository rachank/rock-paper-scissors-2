/*List all constants for DOM elements and game options */

let startImages = document.querySelectorAll(".startimage");
let compPick;

//Variables to track scores
let playerScore = 0;
let computerScore = 0;

//const winnerResult = document.getElementById("winnerResult"); 
//add above to HTML Modal div
const modal = document.getElementsByClassName(".modal")

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
function findWinner(pPick, compPick) {
    if (pPick === compPick) {
        return "It's a tie!";
    } else if (pPick === "rock") {
        if (compPick === "paper") {
            return "Computer wins!";
     } else {
        return "Player wins!";
     }     
    } else if (pPick === "paper") {
        if (compPick === "scissors") {
            return "Computer Wins!";
        } else {
            return "Player wins!";
        }
    } else if (pPick === "scissors") {
        if (compPick === "rock") {
            return "Computer wins!";
        } else {
            return "Player wins!";
        }
    }
}

// Display the player choice image, computer choice image 

function displayWinner(pPick, compPick)
    document.getElementById
