//CONSTANTS ----------------------CONSTANTS ----------------------CONSTANTS ----------------------CONSTANTS ------------------------
const players = {
  1: 'X',
  '-1': 'O',
  null: 'white',
};

const winningCombinations = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [3, 8, 5],
  [6, 4, 2],
];

const COLORS = {
  null: 'white',
  1: 'gray',
  '-1': 'black',
};

//STATE VARIABLES------------------STATE VARIABLES------------------STATE VARIABLES------------------STATE VARIABLES------------------
let board;
let turn;
let winner;

//CACHED ELEMENTS------------------CACHED ELEMENTS------------------CACHED ELEMENTS------------------CACHED ELEMENTS------------------
const gameBoard = document.getElementById('board');
const resetButton = document.getElementById('reset-button');
const gameStatus = document.getElementById('game-status');
gameStatus.style.fontSize = '40px';
const cells = Array.from(document.querySelectorAll('.cell'));
console.log('cells: ', cells);

// const sq1 = document.getElementById('0');
// const sq2 = document.getElementById('1');
// const sq3 = document.getElementById('2');
// const sq4 = document.getElementById('3');
// const sq5 = document.getElementById('4');
// const sq6 = document.getElementById('5');
// const sq7 = document.getElementById('6');
// const sq8 = document.getElementById('7');
// const sq9 = document.getElementById('8');
// Isn't the click going to set the index?

//EVENT LISTENERS-------------------EVENT LISTENERS-------------------EVENT LISTENERS-------------------EVENT LISTENERS----------------

cells.forEach(function (cell) {
  cell.addEventListener('click', handleChoice);
  console.log('cell: ', cell);
});

//FUNCTIONS------------------FUNCTIONS------------------FUNCTIONS------------------FUNCTIONS------------------FUNCTIONS---------------
initializeGame();

function initializeGame() {
  board = [
    [null, null, null], //col 0
    [null, null, null], //col 1
    [null, null, null], //col 2
  ];
  winner = players[null];
  turn = players[1];

  renderBoard();
  renderMessage();
}

function renderBoard() {
  board.forEach(function (column) {
    column.forEach(function (col, idx) {
      // console.log('idx: ', idx, 'col: ', col);
    });
  });
}

function handleChoice(event) {
  console.log(event.target);
  let currentChoice = event.target;

  if (event.target.className !== 'cell') return;
}

function renderMessage() {
  if (winner === 'T') {
    gameStatus.innerText = `It's a tie!`;
  } else if (winner) {
    gameStatus.innerText = `${winner} is the winner!`;
  } else {
    gameStatus.innerText = `It's ${turn}'s turn`;
  }
}

function render() {}
