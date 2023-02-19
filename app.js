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
let a = 6;
let b = 6;
let c = 6;
let d = 6;
let e = 6;
let f = 6;
let g = 6;



// --On click event check if conditions are met for a non-played slot
// for insertion of a token.
for (slot of slots) {
    slot.addEventListener("click", e => {
        const playingPiece = e.target;
        console.log(playingPiece);
        if (!playingPiece.classList.contains('played')) {

            gravity(playingPiece, e)
            
           
            checkWinner();
        }
    })
}

// --Building Gravity--
function gravity(playingPiece, el){
    const playData=playingPiece.dataset;
switch (playData.column) {
                case "a":
                    if (playData.row == a){
                        console.log("worked");
                        played(el);
                        a--;
                    }
                
                break;
                case "b":
                    if (playData.row == b){
                        console.log("worked");
                         played(el);
                         b--;
                    }
                
                break;
                case "c":
                    if (playData.row == c){
                        console.log("worked");
                         played(el);
                        c--;
                    }
                
                break;
                case "d":
                    if (playData.row == d){
                        console.log("worked");
                         played(el);
                        d--;
                    }
                
                break;
                case "e":
                    if (playData.row == e){
                        console.log("worked");
                         played(el);
                        e--;
                    }
                
                break;
                case "f":
                    if (playData.row == f){
                        console.log("worked");
                         played(el);
                        f--;
                    }
                
                break;
                case "g":
                    if (playData.row == g){
                        console.log("worked");
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
    console.log(e.target.dataset.column, e.target.dataset.row, e.target.dataset.player);
    e.target.style.backgroundColor = curPlayer.color;
    if (curPlayer === player1) {
        curPlayer = player2;
        console.log()
    }
    else if (curPlayer === player2) {
        curPlayer = player1;
    };
}


//Checking for a winning 4 piece combo
function checkWinner(){
    checkDiagonal();
    checkVertical();
    checkHorizontal();
}



const colList = ['a','b','c','d','e','f','g'];
const rowList = ['1','2','3','4','5','6'];
let curColorChecker="";
let winCheckerCounter=0;
// let winPiece1,winPiece2,winPiece3,winPiece4;
// console.log(slots);
function checkVertical(){

}
function checkHorizontal(){

}
function checkDiagonal(){

}
