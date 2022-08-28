import React from "react";
import Board from "./components/Board.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });

  const updateBoard = (boxID) => {
    const boardCopy = board.map((item, index) => {
      if (index === boxID) return xPlaying === true ? "X" : "O";
      else return item;
    });

    const winner = checkWinCondition(boardCopy);
    if (winner) {
      if (winner === "O") {
        let {oScore} = scores;
        oScore += 1;
        setScores({...scores, oScore});
      } else {
        let {xScore} = scores;
        xScore += 1;
        setScores({...scores, xScore});
      }
    }
    setBoard(boardCopy);
    setXPlaying(!xPlaying);
  };

  const checkWinCondition = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] === board[y] && board[y] === board[z]) {
        console.log(board[x]);
        return board[x];
      }
    }
  };

  return (
    <div className="App">
      <Board board_value={board} board_onClick={updateBoard} />
    </div>
  );
}

export default App;
