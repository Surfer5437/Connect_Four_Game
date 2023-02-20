const player1 = {
    color:"red",
    wins:0
};
const player2 = {
    color:"blue",
    wins:0
};
let gameWon=false;
let curPlayer=player1;
const board = document.querySelector(".board");
const slots = document.querySelectorAll("div");
const winningHeader = document.getElementById("winner");
let a = 5;
let b = 5;
let c = 5;
let d = 5;
let e = 5;
let f = 5;
let g = 5;

// --On click event check if conditions are met for a non-played slot
// for insertion of a token.
for (slot of slots) {
    slot.addEventListener("click", e => {
        if (gameWon === false) {
            const playingPiece = e.target;
        // console.log(playingPiece);
        if (!playingPiece.classList.contains('played')) {
            gravity(playingPiece, e);
        }
        }
        else if(gameWon=true){
            return;
        }
        
    })
}

// --Token Gravity--
function gravity(playingPiece, el){
    const playData=playingPiece.dataset;
switch (playData.column) {
                case "0":
                    if (playData.row == a){
                        played(el);
                        a--;
                    }
                
                break;
                case "1":
                    if (playData.row == b){
                         played(el);
                         b--;
                    }
                
                break;
                case "2":
                    if (playData.row == c){
                         played(el);
                        c--;
                    }
                
                break;
                case "3":
                    if (playData.row == d){
                         played(el);
                        d--;
                    }
                
                break;
                case "4":
                    if (playData.row == e){
                         played(el);
                        e--;
                    }
                
                break;
                case "5":
                    if (playData.row == f){
                         played(el);
                        f--;
                    }
                
                break;
                case "6":
                    if (playData.row == g){
                         played(el);
                        g--;
                    }
                
                break;
                default:
                break;
            }
}

// --Played piece logic-- Changing current player and checking if current 
// clicked piece has been played yet and setting it to played and
// and changing attributes on the token.
function played (e){
    e.target.classList.remove('slot');
    e.target.classList.add('played');
    e.target.dataset.player=curPlayer.color;
    // console.log(e.target.dataset.column, e.target.dataset.row, e.target.dataset.player);
    e.target.style.backgroundColor = curPlayer.color;
    const boardRow = e.target.dataset.row;
    const boardCol = e.target.dataset.column;
    boardGrid[`${boardRow}`][`${boardCol}`]=curPlayer.color;

    checkWinner(e.target);
    if(gameWon===false){
    if (curPlayer === player1) {
        curPlayer = player2;
        winningHeader.innerText=`PLAYER 2 GO`;
        winningHeader.style.color = 'blue';
    }
    else if (curPlayer === player2) {
        curPlayer = player1;
        winningHeader.innerText=`PLAYER 1 GO`;
        winningHeader.style.color = 'red';
    };
}
else if (gameWon===true){
    return;
}
}


//Checking for a winning 4 piece combo
function checkWinner(){
    checkDiagonal();
    checkVertical();
    checkHorizontal();
    checkDiagonalOpposite();
}

function removeEventListeners(){
    for (const slot of slots) {
        slot.removeEventListener;
    }
}


const boardGrid=[
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined]
];

function checkVertical(){

    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 7; i++) {
        if (boardGrid[j][i] !== undefined && boardGrid[j][i] === boardGrid[j+1][i] && boardGrid[j+1][i] === boardGrid[j+2][i] && boardGrid[j+2][i] === boardGrid[j+3][i]){
            const capWinner = boardGrid[j][i].toUpperCase();
                            winningHeader.style.color = boardGrid[j][i];
                            winningHeader.innerText=`${capWinner} IS THE WINNER!!!!`
                            gameWon = true;
        }
        }
    }
}
function checkHorizontal(){
    for (let colu = 0; colu < boardGrid.length; colu++) {
        const grid = boardGrid[colu];
        for (let i = 0; i < 3; i++) {
            if (grid[i] !== undefined && grid[i] === grid[i+1] && grid[i+1] === grid[i+2] && grid[i+2] === grid[i+3]){
                        const capWinner = grid[i].toUpperCase();
                        winningHeader.style.color = grid[1];
                        winningHeader.innerText=`${capWinner} IS THE WINNER!!!!`
                        gameWon = true;
                }
            }
        }
}
function checkDiagonal(){
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 4; i++) {
        if (boardGrid[j][i] !== undefined && boardGrid[j][i] === boardGrid[j+1][i+1] && boardGrid[j+1][i+1] === boardGrid[j+2][i+2] && boardGrid[j+2][i+2] === boardGrid[j+3][i+3]){
            const capWinner = boardGrid[j][i].toUpperCase();
                            winningHeader.style.color = boardGrid[j][i];
                            winningHeader.innerText=`${capWinner} IS THE WINNER!!!!`
                            gameWon = true;
        }
        }
    }
}
function checkDiagonalOpposite(){
    for (let j = 5; j > 2; j--) {
        for (let i = 0; i < 4; i++) {
        if (boardGrid[j][i] !== undefined && 
            boardGrid[j][i] === boardGrid[j-1][i+1] && 
            boardGrid[j-1][i+1] === boardGrid[j-2][i+2] && 
            boardGrid[j-2][i+2] === boardGrid[j-3][i+3]){
            const capWinner = boardGrid[j][i].toUpperCase();
                            winningHeader.style.color = boardGrid[j][i];
                            winningHeader.innerText=`${capWinner} IS THE WINNER!!!!`
                            gameWon = true;
        }
        }
    }
}
