/*List all constants for DOM elements and game options */

let startImages = document.querySelectorAll(".startimage");
let compPick;

//Variables to track scores
let playerScore = 0;
let computerScore = 0;




//Update score display
function updateScore() {
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
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

function findWinner(pPick, compPick) {
    if (pPick === compPick) {
        return "It's a tie!";
    } else if (pPick === "rock") {
        if (compPick === "paper") {
            computerScore++;
            return "Computer wins!";
     } else {
        playerScore++;
        return "Player wins!";

     }     
    } else if (pPick === "paper") {
        if (compPick === "scissors") {
            computerScore++;
            return "Computer wins!";
        } else {
            playerScore++;
            return "Player wins!";
        }
    } else if (pPick === "scissors") {
        if (compPick === "rock") {
            computerScore++;
            return "Computer wins!";
        } else {
            playerScore++;
            return "Player wins!";
        }
    }
    // Update the score display
    updateScore();

}


 


// Determine game result
const result = findWinner(pPick, compPick);

// Update the computer choice
document.getElementById('compPick').innerHTML = `<img src="${'startimage'}.jpg" alt="${'startimage'}">`;


//Display result of game
document.getElementById('result').textContent = result;





