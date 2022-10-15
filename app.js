import Board from "./src/Board.js";

const peiceTypeInput = document.querySelector('.peice-type');
const moveToRankInput = document.querySelector('.to-rank');
const moveToFileInput = document.querySelector('.to-file');
const submitMoveInput = document.querySelector('.move-now');

let brd = new Board();
brd.showBoard();

function getAllMoveDetails() {
    return {
        peiceType : peiceTypeInput.value,
        file: moveToFileInput.value,
        rank: moveToRankInput.value 
    }
}

submitMoveInput.addEventListener("click" , () => {
    let moveDetails = getAllMoveDetails();
    console.log(moveDetails)
    
    let rank = moveDetails.rank;
    let file = moveDetails.file;
    let peice = moveDetails.peiceType;
    if (peice === 'P') {
        console.log(brd.board[rank - 1][0].peice.pawnMove(brd.board , 1))
        brd.showBoard();
    }
});
    


