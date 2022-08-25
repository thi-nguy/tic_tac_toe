import React from 'react'
import Box from './Box.jsx'
import './Board.css'

const Board = ({board_list, id}) => {
    return (
        <div className="board">
        {board_list.map( (item, index) => (
            <Box value={item} id={index}/>
            ))}
    </div>
    )
}

export default Board