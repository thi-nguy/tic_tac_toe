import React from 'react'
import Box from './Box'

const style = {

}
const Board = () => (
    <div>
        {[...Array(9)].map(() => 
            <Box />
        )}
    </div>
)

export default Board;