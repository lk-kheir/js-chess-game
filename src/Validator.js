export default class Validator {
    static pawnMovesValidator(Board , moveDetails) {
        // make sure that the next square forward is empty
        // the next square accorfing to white or black  
        // console.log(Board , moveDetails);
        //console.log(Board.board[moveDetails.location.rank][moveDetails.location.file]);
        let nextSquare;
        if (Board.playingNow === "W") {

            nextSquare = Board.board[moveDetails.location.rank + 1][moveDetails.destination.file];
        } else {

            nextSquare = Board.board[moveDetails.location.rank - 1][moveDetails.destination.file];
        }

        if(!nextSquare.empty) {
            console.log("wait wait where are you going next square is occupied");
            return false;
        }
        else {
            return true;
        }
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