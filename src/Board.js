import React, { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button id="board" className="cell" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [isXNext, setIsXNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const nextSquares = squares.slice();
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `${winner} is the winner!!!`;
  } else {
    status = `It's ${isXNext ? 'X' : 'O'}'s turn`;
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    if (isXNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }

  return (
    <>
      <div className="container">
        <h1 id="game-status">{status}</h1>
        <div className="board">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const possibleCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < possibleCombos.length; i++) {
    const [a, b, c] = possibleCombos[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
