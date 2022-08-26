import React from 'react'
import Board from './components/Board.jsx'
import { useState } from 'react'
import './App.css'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const updateBoard = (boxID) => {
    const boardCopy = board.map( (item, index) => {
      if (index === boxID)
        return "X";
      else
        return item;
    });
    setBoard(boardCopy);

  }

  return (
    <div className='App'>
      <Board board_value={board} board_onClick={updateBoard} />
    </div>
  );
}

export default App;
