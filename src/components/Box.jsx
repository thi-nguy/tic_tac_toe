import React from 'react'

const box_style = {
    backgroundColor: "green",
    opacity: '0.7',
    borderRadius: '16px'
}

const Box = (props) => (
    <button style={box_style} onClick={ () => props.onClick(props.index) } >
        {props.value}
    </button>
)

export default Box;