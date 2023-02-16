const player1 = {
    color:"red",
    wins:0
};
const player2 = {
    color:"blue",
    wins:0
};
const curPlayer=player1;
const board = document.querySelector(".board");
const slot = document.querySelector("#token");
board.addEventListener("click", e=>{
   if (e.target=slot){
    
e.target.classList.remove('slot');
e.target.classList.add('played');
e.target.style.backgroundColor=curPlayer.color;
if (curPlayer===player1){
    curPlayer=player2();
    console.log()
}
else if(curPlayer===player2){
    curPlayer=player1;
}
console.log(e.target);
   }
})