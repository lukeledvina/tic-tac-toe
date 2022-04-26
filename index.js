const GameBoard = (() => {
    let board = ["X", "O", "O",
                 "O", "X", "X",
                 "O", "X", "O"];

    return { board };
})();

const Player = (symbol) => {
    
}

const GameController = (() => {
    let winner;

    return { winner, };
})();

let boardContainer = document.querySelector(".board");
let boxes = boardContainer.querySelectorAll(".inner-box");
console.log(boxes);

const updateBoard = () => {
    let i = 0;
    boxes.forEach(box => {
        box.textContent = GameBoard.board[i];
        i++;
    });

}

let xPlayer = Player("X");
let oPlayer = Player("O");

updateBoard();
