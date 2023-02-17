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
            e.target.style.backgroundColor = curPlayer.color;
            if (curPlayer === player1) {
                curPlayer = player2;
                console.log()
            }
            else if (curPlayer === player2) {
                curPlayer = player1;
            };
        }
    })
}