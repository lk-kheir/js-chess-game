import Board from "./src/Board.js";

const peiceTypeInput = document.querySelector('.peice-type');
const moveFromRankInput = document.querySelector('.from-rank');
const moveFromFileInput = document.querySelector('.from-file');
const moveToRankInput = document.querySelector('.to-rank');
const moveToFileInput = document.querySelector('.to-file');
const submitMoveInput = document.querySelector('.move-now');
let brd = new Board();
brd.showBoard();

function getAllMoveDetails() {
    return {
        peiceType : peiceTypeInput.value,
        location: {
            file: moveFromFileInput.value,
            rank: Number(moveFromRankInput.value) - 1
        },
        destination : {
            file: moveToFileInput.value,
            rank: Number(moveToRankInput.value) - 1
        }
    }
}

submitMoveInput.addEventListener("click" , () => {
    let moveDetails = getAllMoveDetails();
    console.log(moveDetails);
    // if the selected Peice is a pawn  ...
    if (moveDetails.peiceType === 'P') {
        brd.pawnMove(moveDetails);
        brd.showBoard();
    }else if (peice == "Kn") {
        
    }
});
    


