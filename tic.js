const cells = document.querySelectorAll(".cell");
const status = document.getElementById("statusText");
const restart_btn = document.getElementById("restartBtn");
let currentPlayer = "X";
let gameActive = true;

let array = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

// Function to update board with click events
function updateBoard() {
    for (let i of cells) {
        i.addEventListener("click", () => {
            if (gameActive && i.innerHTML === "") {
                const cellId = i.id;
                if (cellId === "0") {
                    array[0][0] = currentPlayer;
                } else if (cellId === "1") {
                    array[0][1] = currentPlayer;
                } else if (cellId === "2") {
                    array[0][2] = currentPlayer;
                } else if (cellId === "3") {
                    array[1][0] = currentPlayer;
                } else if (cellId === "4") {
                    array[1][1] = currentPlayer;
                } else if (cellId === "5") {
                    array[1][2] = currentPlayer;
                } else if (cellId === "6") {
                    array[2][0] = currentPlayer;
                } else if (cellId === "7") {
                    array[2][1] = currentPlayer;
                } else if (cellId === "8") {
                    array[2][2] = currentPlayer;
                }
                cellClicked(i);
                switchPlayer();
            }
        });
    }
}

// Initialize board setup
updateBoard();

// Function to handle cell click
function cellClicked(cell) {
    if(cell.innerHTML !== ""){
        return;
    }
    cell.innerHTML = currentPlayer;
    if (checkDraw() || checkWin()) {
        if (checkWin()) {
            status.innerHTML = `${currentPlayer} wins`;
        } else {
            status.innerHTML = `${currentPlayer} draw`;
        }
        status.innerHTML = newStatus;
        gameActive =false;
    }
}

// Function to check for a win
function checkWin() {
    if (
        array[0][0] === currentPlayer && array[0][1] === currentPlayer && array[0][2] === currentPlayer ||
        array[1][0] === currentPlayer && array[1][1] === currentPlayer && array[1][2] === currentPlayer ||
        array[2][0] === currentPlayer && array[2][1] === currentPlayer && array[2][2] === currentPlayer ||
        array[0][0] === currentPlayer && array[1][0] === currentPlayer && array[2][0] === currentPlayer ||
        array[0][1] === currentPlayer && array[1][1] === currentPlayer && array[2][1] === currentPlayer ||
        array[0][2] === currentPlayer && array[1][2] === currentPlayer && array[2][2] === currentPlayer ||
        array[0][0] === currentPlayer && array[1][1] === currentPlayer && array[2][2] === currentPlayer ||
        array[0][2] === currentPlayer && array[1][1] === currentPlayer && array[2][0] === currentPlayer
    ) {
        return true;
    }
    return false;
}

// Function to check for a draw
function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (array[i][j] === "") {
                return false;
            }
        }
    }
    return true;
}

// Function to switch players
function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    status.innerHTML = `${currentPlayer}'s turn`;
}

// Function to restart the game
function restartGame() {
    array = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    currentPlayer = "X";
    gameActive = true;
    cells.forEach(cell => cell.innerHTML = "");
    status.innerHTML = `${currentPlayer}'s turn`;
}

// Event listener for the restart button
restart_btn.addEventListener("click", restartGame);
