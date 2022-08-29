import React from "react";
import Board from "./components/Board.jsx";
import ScoreBoard from "./components/ScoreBoard.jsx";
import Reset from "./components/Reset.jsx";
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
  const [gameOver, setGameOver] = useState(false);

  const updateBoard = (boxID) => {
    setBoard((board) => {
      const boardCopy = board.map((item, index) => {
        setXPlaying(!xPlaying);
        if (index === boxID) return xPlaying === true ? "X" : "O";
        else return item;
      });
      const winner = checkWinCondition(boardCopy);
      if (winner) {
        setGameOver(true);
        if (winner === "X") {
          let { xScore } = scores;
          xScore += 1;
          setScores({ ...scores, xScore });
        } else {
          let { oScore } = scores;
          oScore += 1;
          setScores({ ...scores, oScore });
        }
      }
      return [...boardCopy];
    });
  };

  const checkWinCondition = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  return (
    <div className="App">
      <ScoreBoard score_value={scores} xPlaying={xPlaying} />
      <Board board_value={board} board_onClick={gameOver ? resetBoard : updateBoard} />
      <Reset reset_onClick={resetBoard} />
    </div>
  );
}

export default App;