/*List all constants for DOM elements and game options */

let startImages = document.querySelectorAll(".startimage");
let compPick;
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

