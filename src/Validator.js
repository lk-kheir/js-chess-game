export default class Validator {
    static pawnMovesValidator(Board , moveDetails) {
        // make sure that the next square forward is empty
        // the next square accorfing to white or black  
        // console.log(Board , moveDetails);
        //console.log(Board.board[moveDetails.location.rank][moveDetails.location.file]);
        // we make sure the the pwan is not pinned

        let file = moveDetails.location.file;
        let rank = moveDetails.location.rank;
        let peice = Board.board[rank][file].peice;
        let isPinned = Board.listOfPinnedWhitePeices.includes(peice);
        console.log(isPinned);
        let nextSquare;
        if (Board.playingNow === "W") {

            nextSquare = Board.board[moveDetails.location.rank + 1][moveDetails.destination.file];
            console.log(nextSquare);
        } else {

            nextSquare = Board.board[moveDetails.location.rank - 1][moveDetails.destination.file];
            console.log(nextSquare);
        }

        if(!nextSquare.empty) {
            console.log("wait wait where are you going next square is occupied");
        }

        return isPinned && nextSquare.empty
        
    }

    static kingMovesValidator() {

    }
    static knightMovesValidator() {

    }
    static queenMovesValidator() {

    }
    static rookMovesValidator() {

    } 
    static bishopMovesValidator() {
        
    }

}