import React from 'react'

const box_style = {
    backgroundColor: "green",
    opacity: '0.7',
    borderRadius: '16px'
}

const Box = () => (
    <button style={box_style} onClick={ () => {} }>
        {"X"}
    </button>
)

export default Box;