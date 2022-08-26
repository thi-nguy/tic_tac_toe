import React from 'react'
import Box from './Box.jsx'
import './Board.css'

const Board = ({board_value, board_onClick}) => {
    return (
        <div className="board">
        {board_value.map( (item, index) => (
            <Box box_value={item} box_onClick={ () => board_onClick(index)}/>
            ))}
        </div>
    )
}

export default Board 
