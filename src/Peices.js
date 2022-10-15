const ALPHABTIC = "abcdefgh";
export  class Position {
    constructor(file , rank ) {
        this.file = file;
        this.rank = rank;
    }
}

export class Square {
    constructor(peice , empty) {
        this.peice = peice;
        this.empty = empty;
    }
}

export class Empty {

}


export  class Pawn {
    constructor(position , peiceColor) {
        this.position = position;
        this.peiceColor = peiceColor;
    }

    // 
    pawnMove(board , steps) {
        // first we need to make sure that the next squre is empty 
        // getting the current position
        // of course we neel to think about the case where the pawn reaches the last rank ;
        if (steps === 1 ) {
            this.position.rank = this.position.rank + 1;
            // update the board 
            board[this.position.file][this.position.rank] = new Empty();
            board[this.position.file][this.position.rank + 1] = this;

        } 
        // this is available only in first move of the pawn;
        else if (steps === 2) {

            this.position.rank = this.position.rank + 2;
            // update the board 
            board[this.position.file][this.position.rank] = new Empty();
            board[this.position.file][this.position.rank + 2] = this;
        }
        else {
            return false;
        }
    }

    pawnUpgrade() {

    }
}

export  class Knight {
    
    constructor(position , peiceColor) {
        this.position = position;
        this.peiceColor = peiceColor;
    }
    
    knightMove() {

    }
}
export class Bishop {
    
    constructor(position , colorSquare , peiceColor) {
        this.position = position;
        this.colorSquare = colorSquare
        this.peiceColor = peiceColor;
    }
    
    BishopMove() {
        
    }
}

export  class Rook {
    constructor(position , peiceColor) {
        this.position = position;
        this.peiceColor = peiceColor;
    }
    
    rookMove() {
        
    }

}
export  class Queen {
    constructor(position , peiceColor) {
        this.position = position;
        this.peiceColor = peiceColor;
    }
    
    queenMove() {
        
    }
    
}
export  class King {
    
    constructor(position , peiceColor) {
        this.position = position;
        this.peiceColor = peiceColor;
    }
    
    kingMove() {
        
    }
}