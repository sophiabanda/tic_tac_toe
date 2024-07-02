import { useState } from 'react';

//CONSTANTS ----------------------CONSTANTS ----------------------CONSTANTS ----------------------CONSTANTS ------------------------
const players = {
  '1': 'X',
  '-1': 'O',
  'null': 'white',
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

//STATE VARIABLES------------------STATE VARIABLES------------------STATE VARIABLES------------------STATE VARIABLES------------------

let board;
let turn;
let winner;
let playerX = [];
let playerO = [];

//CACHED ELEMENTS------------------CACHED ELEMENTS------------------CACHED ELEMENTS------------------CACHED ELEMENTS------------------
const gameBoard = document.getElementById('board');
const resetButton = document.getElementById('reset-button');
const gameStatus = document.getElementById('game-status');
gameStatus.style.fontSize = '40px';
const cells = Array.from(document.querySelectorAll('.cell'));
const squares = document.querySelectorAll('#board > div');
const square = Array.from(squares);

//EVENT LISTENERS-------------------EVENT LISTENERS-------------------EVENT LISTENERS-------------------EVENT LISTENERS----------------
cells.forEach(function (cell) {
  cell.addEventListener('click', handleChoice);
});

document
  .getElementById('reset-button')
  .addEventListener('click', initializeGame);

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
  playerO = [];
  playerX = [];
  gameStatus.innerText = `Let's begin!`;
  square.map((s) => {
    s.classList.remove('filled');
    s.innerText = '';
  });
  //set innertext to null for chosen squares & classlist
}

function handleChoice(event) {
  if (event.target.className !== 'cell') return;

  let choiceSquare = event.target;
  let currentChoice = event.target.id;

  if (choiceSquare.classList.contains('filled')) return;
  choiceSquare.classList.add('filled');
  if (winner) return;

  if (turn === 1) {
    playerX.push(currentChoice);
    document.getElementById(currentChoice).innerText = `${players[1]}`;
  } else {
    playerO.push(currentChoice);
    document.getElementById(currentChoice).innerText = `${players[-1]}`;
  }

  //handle turn
  turn *= -1;
  checkWinner();
  renderMessage();
  console.log('winner:', winner);
}

function renderMessage() {
  console.log('turn', turn);
  if (turn === 1 && !winner) {
    gameStatus.innerText = `It's ${players[1]}'s turn`;
  } else if (turn === -1) {
    gameStatus.innerText = `It's ${players[-1]}'s turn`;
  }
}
