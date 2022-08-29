import React from 'react'
import './ScoreBoard.css'

const ScoreBoard = ({ score_value, xPlaying }) => {
    return (
        <div className="score_board">
            <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {score_value.xScore}</span>
            <span className={`score o-score ${xPlaying && "inactive"}`}>O - {score_value.oScore}</span>
        </div>
    )
}

export default ScoreBoard;