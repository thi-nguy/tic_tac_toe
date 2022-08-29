import React from 'react'
import "./Reset.css"

const Reset = ({reset_onClick}) => {
    return (
        <button className='reset' onClick={reset_onClick}>Reset</button>
    )
    
}

export default Reset