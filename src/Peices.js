export  class Position {
    constructor(file , rank ) {
        this.file = file;
        this.rank = rank;
    }
}


export  class Pawn {
    constructor(position , peiceColor) {
        this.position = position;
        this.peiceColor = peiceColor;
    }

    pawnMove() {

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