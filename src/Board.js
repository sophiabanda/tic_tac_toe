import React, { useState } from 'react';

function Square() {
  function handleClick() {
    alert('Clicked!');
  }

  return (
    <button className="cell" onClick={handleClick}>
      X
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="container">
        <div className="board">
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
}
