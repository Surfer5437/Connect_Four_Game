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

for (slot of slots) {
    slot.addEventListener("click", e => {
        if (!e.target.classList.contains('played')) {
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
            checkWinner();
        }
    })
}
function checkWinner(){
    checkDiagonal();
    checkVertical();
    checkHorizontal();
}
const colList = ['a','b','c','d','e','f','g'];
const rowList = ['1','2','3','4','5','6'];
let curColorChecker=""
let winCheckerCounter=0;
let winPiece1,winPiece2,winPiece3,winPiece4;
console.log(slots)
function checkVertical(){

for (const i of colList) {
    for (const j of rowList) {
        if (curColorChecker===""){
            curColorChecker=slot.color;
            winPiece1=slot;
        }
        else if (slot.color===curColorChecker){
            winCheckerCounter++;
            if (winCheckerCounter===4) {
                alert(`${curColorChecker} WINS!!!!!!!`)
            }
            console.log(curColorChecker);
        }
        
    }
}
}
function checkHorizontal(){

}
function checkDiagonal(){

}
