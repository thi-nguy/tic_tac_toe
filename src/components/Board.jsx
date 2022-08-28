import React from 'react'
import Box from './Box.jsx'
import './Board.css'

const Board = ({board_value, board_onClick}) => {
    return (
        <div className="board">
            {board_value.map( (value, index) => {
                return (<Box box_value={value} box_onClick={() => value === null && board_onClick(index)} />)
            })}
        </div>
    )
}

export default Board 
