import React from 'react'
import Board from './components/Board.jsx'
import './App.css'

function App() {
  const board = ["X","O","X","O","X","O","X","O","X"]

  return (
    <div className='App'>
      <Board board_list={board} onClick={null} />
    </div>
  );
}

export default App;
