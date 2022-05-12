let boardContainer = document.querySelector(".board");
let boxes = boardContainer.querySelectorAll(".inner-box");


const GameBoard = (() => {
    let board = ["", "", "",
                 "", "", "",
                 "", "", ""];

    return { board };
})();

const updateBoard = () => {
    let i = 0;
    boxes.forEach(box => {
        box.textContent = GameBoard.board[i];
        i++;
    });

    let board = GameBoard.board;

    if(board[1] == board[0] && board[2]) {
        let winningLetter = board[1];
        console.log(`The winner is ${winningLetter}`);
    }

}
updateBoard();


const Player = (symbol) => {
    
    return { symbol }
}

const GameController = (() => {
    let currentTurn = "X";
    let winner;

    boxes.forEach(box => {
        box.addEventListener("click", () => {
            if(box.textContent == "") {
                GameBoard.board[box.id] = currentTurn;
                if(currentTurn == "X") {
                    currentTurn = "O";
                } else {
                    currentTurn = "X";
                }
                console.log(currentTurn);
            } else if(box.textContent != "") {
                alert("Choose an empty square.");
            }
            console.log(GameBoard.board);
            updateBoard();
        })
    })
    return { winner, currentTurn };
})();




console.log(boxes);


let xPlayer = Player("X");
let oPlayer = Player("O");

