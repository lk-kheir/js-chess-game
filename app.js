import Board from "./src/Board.js"
let brd = new Board();
brd.showBoard();

document.addEventListener('click' , (event) => {
    console.log(brd.board[0][].constructor.name)
    // console.log(brd.board[1][0]);
    // brd.board[2][0] = brd.board[1][0];
    // brd.board[1][0] = '';
    // console.log(brd.board[2][0]);
    // console.log(brd.board)\
    
})