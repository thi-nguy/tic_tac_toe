import React from 'react'
import "./Box.css"

const Box = ({value}) => {
    const box_style = value === "X" ? "box x" : "box o";
    return (
        <button className={box_style}>
            {value}
        </button>
    )
}

export default Box;