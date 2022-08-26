import React from 'react'
import "./Box.css"

const Box = ({box_value, box_onClick}) => {
    const box_style = box_value === "X" ? "box x" : "box o";
    return (
        <button className={box_style} onClick={box_onClick}>
            {box_value}
        </button>
    )
}

export default Box;