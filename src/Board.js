import React, { useState } from 'react';

function Square() {
  function handleClick() {
    alert('Clicked!');
  }

  return <button onClick={handleClick}>X</button>;
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
