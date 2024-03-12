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
let playerX = [];
let playerO = [];
let gameRunning = false;

//CACHED ELEMENTS------------------CACHED ELEMENTS------------------CACHED ELEMENTS------------------CACHED ELEMENTS------------------
const gameBoard = document.getElementById('board');
const resetButton = document.getElementById('reset-button');
const gameStatus = document.getElementById('game-status');
gameStatus.style.fontSize = '40px';
const cells = Array.from(document.querySelectorAll('.cell'));

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
});

document
  .getElementById('reset-button')
  .addEventListener('click', initializeGame());

document.getElementById('reset-button').addEventListener('click', restartGame);

//FUNCTIONS------------------FUNCTIONS------------------FUNCTIONS------------------FUNCTIONS------------------FUNCTIONS---------------
initializeGame();

function initializeGame() {
  board = [
    [null, null, null], //col 0
    [null, null, null], //col 1
    [null, null, null], //col 2
  ];
  winner = null;
  turn = 1;

  renderMessage();
}

function handleChoice(event) {
  if (event.target.className !== 'cell') return;

  let choiceSquare = event.target;
  console.log('choice square:', choiceSquare);
  let currentChoice = event.target.id;
  console.log('currentChoice', currentChoice);

  if (choiceSquare.classList.contains('filled')) return;
  choiceSquare.classList.add('filled');
  if (winner) return;

  if (turn === 1) {
    playerX.push(currentChoice);
    document.getElementById(currentChoice).innerText = `${players[1]}`;
  }

  if (turn === 1) {
  } else {
    playerO.push(currentChoice);
    document.getElementById(currentChoice).innerText = `${players[-1]}`;
  }

  //handle turn
  turn *= -1;
  checkWinner();
  console.log(winner);
}

function checkWinner() {
  for (let i = 0; i < winningCombinations.length; i++) {
    let combo = winningCombinations[i];
    if (playerX.sort().join(',') === combo.sort().join(',')) {
      winner = players[1];
    } else if (playerO.sort().join(',') === combo.sort().join(',')) {
      winner = players[-1];
    }
  }
  let isTie;
  for (let row of board) {
    if (row.includes(null)) {
      isTie = false;
      break;
    }
  }
  if (isTie) {
    winner = 'T'; // 'T' represents a tie
  }
}

function restartGame() {}

function renderMessage() {
  if (winner === 'T') {
    gameStatus.innerText = `It's a tie!`;
  } else if (winner) {
    gameStatus.innerText = `${winner} is the winner!`;
  } else {
    gameStatus.innerText = `It's ${turn}'s turn`;
  }
}
