import { Rook , Bishop , Pawn ,  Queen , King , Knight , Position , Square  , Empty} from "./Peices.js"
const ALPHABTIC = "abcdefgh";
export default class Board{
    constructor() {
        this.board = [
            [new Square(new Rook(new Position('a', 1) , 'W') , false),
            new Square(new Knight(new Position('b', 1) , 'W') , false),
            new Square(new Bishop(new Position('c', 1) , 'W'), false),
            new Square(new Queen(new Position('d', 1) , 'W'), false),
            new Square(new King(new Position('e', 1) , 'W'), false),
            new Square(new Bishop(new Position('f', 1) , 'W'), false),
            new Square(new Knight(new Position('g', 1) , 'W'), false),
            new Square(new Rook(new Position('h', 1) , 'W'), false)],
            [new Square(new Pawn(new Position('a' , 2) , 'W'), false),
            new Square(new Pawn(new Position('b' , 2) , 'W'), false),
            new Square(new Pawn(new Position('c' , 2) , 'W'), false) ,
            new Square(new Pawn(new Position('d' , 2) , 'W'), false),
            new Square(new Pawn(new Position('e' , 2) , 'W'), false), 
            new Square(new Pawn(new Position('f' , 2) , 'W'), false),
            new Square(new Pawn(new Position('g' , 2) , 'W'), false),
            new Square(new Pawn(new Position('h' , 2) , 'W'), false)],
            [ new Square( Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),],
            [ new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),],
            [new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),],
            [new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),
                new Square(Empty , true),],
            [new Square(new Pawn(new Position('a' , 7) , 'B'), false),
                new Square(new Pawn(new Position('b' , 7) , 'B'), false),
                new Square(new Pawn(new Position('c' , 7) , 'B'), false) ,
                new Square(new Pawn(new Position('d' , 7) , 'B'), false),
                new Square(new Pawn(new Position('e' , 7) , 'B'), false), 
                new Square(new Pawn(new Position('f' , 7) , 'B'), false),
                new Square(new Pawn(new Position('g' , 7) , 'B'), false),
                new Square(new Pawn(new Position('h' , 7) , 'B'), false)],
            [new Square(new Rook(new Position('a', 8) , 'B') , false),
            new Square(new Knight(new Position('b', 8) , 'B') , false),
            new Square(new Bishop(new Position('c', 8) , 'B'), false),
            new Square(new Queen(new Position('d', 8) , 'B'), false),
            new Square(new King(new Position('e', 8) , 'B'), false),
            new Square(new Bishop(new Position('f', 8) , 'B'), false),
            new Square(new Knight(new Position('g', 8) , 'B'), false),
            new Square(new Rook(new Position('h', 8) , 'B'), false)],
        ]
    
    } 
    pawnMove(moveDetails) {

        // first we need to make sure that the next squre is empty (not yet implemented) 
        // of course we need to think about the case where the pawn reaches the last rank

        let {destination , location} = moveDetails;
        console.log(destination , location)

        // moveDetails passes the location.file and destination.file using letters so transforme them into numbers
        location.file = ALPHABTIC.indexOf(location.file);
        destination.file = ALPHABTIC.indexOf(destination.file);
        // this conditiion means we move the pawn one squre forward
        if (Math.abs(destination.rank - location.rank) === 1) {
            let tempSquare = this.board[destination.rank][destination.file]
            // we update the distination squre
            this.board[destination.rank][destination.file] = this.board[location.rank][location.file]
            // we update the lhe location to Empty;
            this.board[location.rank][location.file] = tempSquare;
            this.updateTheDOMBoard(moveDetails);
        } 
        // the case if the pawn is goin two moves for the first time
        else if (Math.abs(destination.rank - location.rank) === 2 &&
                 location.rank === 1 || location.rank === 6) {

             let tempSquare = this.board[destination.rank][destination.file]
            // we update the distination squre
            this.board[destination.rank][destination.file] = this.board[location.rank][location.file]
            // we update the lhe location to Empty;
            this.board[location.rank][location.file] = tempSquare;
            this.updateTheDOMBoard(moveDetails);

        } 
    }


    showBoard(){ 
        console.log(this.board)
    };

    updateTheDOMBoard(moveDetails) {
        document.querySelectorAll(`.rank-${moveDetails.location.rank + 1} .cell`)[moveDetails.location.file].innerHTML = ""
        document.querySelectorAll(`.rank-${moveDetails.destination.rank + 1} .cell`)[moveDetails.destination.file].innerHTML = "P"

    }
}

