const player1 = {
    color:"red",
    wins:0
};
const player2 = {
    color:"blue",
    wins:0
};
let curPlayer=player1;
const board = document.querySelector(".board");
const slots = document.querySelectorAll("div");
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
        const playingPiece = e.target;
        // console.log(playingPiece);
        if (!playingPiece.classList.contains('played')) {
            gravity(playingPiece, e);
            checkWinner(playingPiece);
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
    if (curPlayer === player1) {
        curPlayer = player2;
        
    }
    else if (curPlayer === player2) {
        curPlayer = player1;
    };
}


//Checking for a winning 4 piece combo
function checkWinner(e){
    checkDiagonal(e);
    checkVertical(e);
    checkHorizontal(e);
}


let curColorChecker="";
let winCheckerCounter=0;

function checkVertical(e){
    for (let i = 0; i < 5; i++) {
        for (const col of boardGrid) {
            if (curColorChecker!==""&& col[i]!==undefined){
                if (col[i]===curColorChecker) {
                    winCheckerCounter++;
                    if (winCheckerCounter === 4){
                        alert(`${curColorChecker} wins!!!`);
                    }
                    console.log(curColorChecker);
                }
                else if (col[i]!==curColorChecker){
                    winCheckerCounter=0;
                    curColorChecker=e.dataset.player;
                }
            }
            else if (curColorChecker==="") {
                curColorChecker=e.dataset.player;

                console.log(curColorChecker);
            }
        }
    }

}
function checkHorizontal(){

}
function checkDiagonal(){

}
const boardGrid=[
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined]
];