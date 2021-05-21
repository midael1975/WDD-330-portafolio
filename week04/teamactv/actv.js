// ==================== CONSTANTS ==================== //
const STATUS_DISPLAY = document.querySelector('.game-notification'),
    GAME_STATE = ["", "", "", "", "", "", "", "", ""],
    WINNINGS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],
    WIN_MESSAGE = () => `The player ${currentPlayer} has won!`,
    DRAW_MESSAGE = () => `The game has ended in a tie!`,
    CURRENT_PLAYER_TURN = () => `Player's turn ${currentPlayer}`;

// ==================== VARIABLES ==================== //
let gameActive = true,
    currentPlayer = "O";

// ==================== FUNCTIONS ==================== //

function main() {
    handleStatusDisplay(CURRENT_PLAYER_TURN());
    listeners();
}

main();

function handleStatusDisplay(message) {
    STATUS_DISPLAY.innerHTML = message;
}

function listeners() {
    document.querySelector('.game-container').addEventListener('click', handleCellClick);
    document.querySelector('.game-restart').addEventListener('click', handleRestartGame);
}

function handleCellClick(clickedCellEvent /** Type Event **/ ) {
    const clickedCell = clickedCellEvent.target;
    if (clickedCell.classList.contains('game-cell')) {
        const clickedCellIndex = Array.from(clickedCell.parentNode.children).indexOf(clickedCell);
        console.log(clickedCellIndex);
        if (GAME_STATE[clickedCellIndex] !== '' || !gameActive) {
            return;
        }

        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
    }
    console.log(clickedCell);
}


function handleRestartGame() {
    gameActive = true;
    currentPlayer = "O";
    restartGameState();
    handleStatusDisplay(CURRENT_PLAYER_TURN());
    document.querySelectorAll('.game-cell').forEach(cell => cell.innerText = "");
}

function restartGameState() {
    let i = GAME_STATE.length;
    while (i--) {
        GAME_STATE[i] = '';
    }
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
    GAME_STATE[clickedCellIndex] = currentPlayer; // Agrega en la posición correspondiente el valor ya sea "X" u "O" en el estado actual del juego
    clickedCell.innerText = currentPlayer; // Agrega en el HTML el valor del jugador
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < WINNINGS.length; i++) { // Itera cada uno de las posibles combinaciones ganadores
        const winCondition = WINNINGS[i]; // Guarda la combinación por ejemplo: [0, 1, 2]
        let position1 = GAME_STATE[winCondition[0]],
            position2 = GAME_STATE[winCondition[1]],
            position3 = GAME_STATE[winCondition[2]]; // Almacena el valor del estado actual del juego según las posiciones de winCondition

        if (position1 === '' || position2 === '' || position3 === '') {
            continue; // Si hay algún valor vacio nadie ha ganado aún
        }
        if (position1 === position2 && position2 === position3) {
            roundWon = true; // Si todas las posiciones coinciden entonces, dicho jugador ha ganado la partida
            break;
        }
    }

    if (roundWon) {
        handleStatusDisplay(WIN_MESSAGE());
        gameActive = false;
        return;
    }

    let roundDraw = !GAME_STATE.includes(""); // Si todas las celdas tienen valor y la sentencia anterior fue falsa entonces es empate
    if (roundDraw) {
        handleStatusDisplay(DRAW_MESSAGE());
        game_active = false;
        return;
    }

    handlePlayerChange();
}

function handlePlayerChange() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    handleStatusDisplay(CURRENT_PLAYER_TURN());
}