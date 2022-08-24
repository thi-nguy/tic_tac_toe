import React from 'react'
import Box from './Box'

const board_style = {
    width: '550px',
    height: '550px',
    margin: '0 auto', // space around element
    display: 'grid',
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)" // what's this?
    
}
const Board = (props) => {
    return (
        <div style={board_style}>
            { [...Array(9)].map( 
                (_, index) => ( 
                    <Box key={index} onClick={props.onClick} value={props.value[index]} index={index} /> )
            ) }
        </div>
    )
}

export default Board;