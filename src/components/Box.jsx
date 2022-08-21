import React from 'react'

const box_style = {
    backgroundColor: "pink", 
    borderRadius: '8px'
}

const Box = () => (
    <button style={box_style} onClick={ () => {} }>
        {"X"}
    </button>
)

export default Box;